import { describe, expect, it } from "vitest";
import { GET as getOpenApi } from "@/app/.well-known/api-catalog/openapi.json/route";
import { GET as getCatalog } from "@/app/.well-known/api-catalog/route";

describe("/.well-known/api-catalog", () => {
    it("returns 200 with correct Content-Type", async () => {
        const res = getCatalog();
        expect(res.status).toBe(200);
        expect(res.headers.get("content-type")).toMatch("application/linkset+json");
    });

    it("includes the RFC 9727 profile parameter in Content-Type", async () => {
        const res = getCatalog();
        expect(res.headers.get("content-type")).toContain(
            "https://www.rfc-editor.org/info/rfc9727",
        );
    });

    it("sets Access-Control-Allow-Origin: *", async () => {
        const res = getCatalog();
        expect(res.headers.get("access-control-allow-origin")).toBe("*");
    });

    it("sets a Cache-Control header", async () => {
        const res = getCatalog();
        expect(res.headers.get("cache-control")).toBeTruthy();
    });

    it("body is valid JSON with a non-empty linkset array", async () => {
        const res = getCatalog();
        const body = await res.json();
        expect(body).toHaveProperty("linkset");
        expect(Array.isArray(body.linkset)).toBe(true);
        expect(body.linkset.length).toBeGreaterThan(0);
    });

    it("every entry has a non-empty anchor URL", async () => {
        const res = getCatalog();
        const body = await res.json();
        for (const entry of body.linkset) {
            expect(typeof entry.anchor).toBe("string");
            expect(entry.anchor.length).toBeGreaterThan(0);
        }
    });

    it("every entry has a service-desc array with at least one href", async () => {
        const res = getCatalog();
        const body = await res.json();
        for (const entry of body.linkset) {
            expect(Array.isArray(entry["service-desc"])).toBe(true);
            expect(entry["service-desc"].length).toBeGreaterThan(0);
            for (const desc of entry["service-desc"]) {
                expect(typeof desc.href).toBe("string");
            }
        }
    });

    it("every entry has a service-doc array", async () => {
        const res = getCatalog();
        const body = await res.json();
        for (const entry of body.linkset) {
            expect(Array.isArray(entry["service-doc"])).toBe(true);
            expect(entry["service-doc"].length).toBeGreaterThan(0);
        }
    });

    it("the markdown API anchor resolves to the correct URL", async () => {
        const res = getCatalog();
        const body = await res.json();
        const entry = body.linkset.find((e: { anchor: string }) =>
            e.anchor.includes("/api/markdown"),
        );
        expect(entry).toBeDefined();
    });
});

describe("/.well-known/api-catalog/openapi.json", () => {
    it("returns 200", async () => {
        const res = getOpenApi();
        expect(res.status).toBe(200);
    });

    it("has application/openapi+json Content-Type", async () => {
        const res = getOpenApi();
        expect(res.headers.get("content-type")).toMatch("application/openapi+json");
    });

    it("body is a valid OpenAPI 3.1 document", async () => {
        const res = getOpenApi();
        const spec = await res.json();
        expect(spec.openapi).toBe("3.1.0");
        expect(spec.info).toBeDefined();
        expect(spec.info.title).toBeDefined();
        expect(spec.paths).toBeDefined();
    });

    it("contains a path for /api/markdown/{path}", async () => {
        const res = getOpenApi();
        const spec = await res.json();
        expect(spec.paths["/api/markdown/{path}"]).toBeDefined();
    });

    it("the markdown path defines a GET operation with responses", async () => {
        const res = getOpenApi();
        const spec = await res.json();
        const op = spec.paths["/api/markdown/{path}"].get;
        expect(op).toBeDefined();
        expect(op.responses["200"]).toBeDefined();
        expect(op.responses["404"]).toBeDefined();
    });
});
