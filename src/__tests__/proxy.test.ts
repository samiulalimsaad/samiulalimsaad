import { NextRequest } from "next/server";
import { describe, expect, it } from "vitest";
import { config, proxy } from "@/proxy";

function requestFor(pathname: string, accept: string): NextRequest {
    return new NextRequest(new URL(pathname, "https://www.samiulalimsaad.com"), {
        headers: { accept },
    });
}

describe("markdown proxy", () => {
    it("rewrites explicit markdown requests to the internal converter", () => {
        const response = proxy(requestFor("/projects/ph-mailer", "text/markdown"));

        expect(response.headers.get("x-middleware-rewrite")).toBe(
            "https://www.samiulalimsaad.com/api/markdown/projects/ph-mailer",
        );
        expect(response.headers.get("vary")).toBe("Accept");
    });

    it("rewrites the homepage without an extra trailing slash", () => {
        const response = proxy(requestFor("/", "text/markdown"));

        expect(response.headers.get("x-middleware-rewrite")).toBe(
            "https://www.samiulalimsaad.com/api/markdown",
        );
    });

    it("drops query strings from the internal target", () => {
        const response = proxy(requestFor("/projects?utm_source=agent", "text/markdown"));

        expect(response.headers.get("x-middleware-rewrite")).toBe(
            "https://www.samiulalimsaad.com/api/markdown/projects",
        );
    });

    it("passes browsers and wildcard clients through to HTML", () => {
        for (const accept of ["text/html,application/xhtml+xml,*/*;q=0.8", "*/*", "text/html"]) {
            const response = proxy(requestFor("/projects", accept));

            expect(response.headers.get("x-middleware-next")).toBe("1");
            expect(response.headers.get("x-middleware-rewrite")).toBeNull();
            expect(response.headers.get("vary")).toContain("Accept");
        }
    });

    it("does not intercept API routes or file-like paths", () => {
        expect(config.matcher).toHaveLength(1);
        expect(config.matcher[0]).toContain("api/");
        expect(config.matcher[0]).toContain("_next/");
        expect(config.matcher[0]).toContain("\\.");
    });
});
