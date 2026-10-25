import { NextRequest } from "next/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { GET } from "@/app/api/markdown/[[...path]]/route";

const ORIGIN = "https://www.samiulalimsaad.com";

const PAGE_HTML = `<!doctype html>
<html>
<head>
    <title>Projects | Samiul Alim</title>
    <meta name="description" content="Production platform services." />
</head>
<body>
    <nav>Navigation</nav>
    <main id="main-content"><h1>Projects</h1><p>Backend case studies.</p></main>
</body>
</html>`;

type RouteContext = {
    params: Promise<{ path?: string[] }>;
};

function context(path?: string[]): RouteContext {
    return { params: Promise.resolve({ path }) };
}

function requestFor(pathname: string): NextRequest {
    return new NextRequest(new URL(pathname, ORIGIN), {
        headers: { accept: "text/markdown" },
    });
}

function htmlResponse(html = PAGE_HTML, status = 200): Response {
    return new Response(html, {
        status,
        headers: { "content-type": "text/html; charset=utf-8" },
    });
}

describe("internal markdown route", () => {
    beforeEach(() => {
        vi.spyOn(console, "error").mockImplementation(() => undefined);
    });

    afterEach(() => {
        vi.unstubAllGlobals();
        vi.restoreAllMocks();
    });

    it("fetches the same-origin HTML page and returns markdown with full headers", async () => {
        const fetchMock = vi.fn<typeof fetch>();
        fetchMock.mockResolvedValue(htmlResponse());
        vi.stubGlobal("fetch", fetchMock);

        const response = await GET(requestFor("/api/markdown/projects"), context(["projects"]));
        const body = await response.text();

        expect(response.status).toBe(200);
        expect(response.headers.get("content-type")).toBe("text/markdown; charset=utf-8");
        expect(response.headers.get("vary")).toBe("Accept");
        expect(response.headers.get("content-signal")).toBe(
            "ai-train=no, search=yes, ai-input=yes",
        );
        expect(response.headers.get("cache-control")).toContain("max-age=3600");
        expect(Number(response.headers.get("x-markdown-tokens"))).toBeGreaterThan(0);
        expect(body).toContain('title: "Projects | Samiul Alim"');
        expect(body).toContain("# Projects");
        expect(body).toContain("Backend case studies.");
        expect(body).not.toContain("Navigation");

        expect(fetchMock).toHaveBeenCalledTimes(1);
        expect(String(fetchMock.mock.calls[0]?.[0])).toBe(`${ORIGIN}/projects`);
        expect(new Headers(fetchMock.mock.calls[0]?.[1]?.headers).get("accept")).toBe("text/html");
    });

    it("converts the homepage when no catch-all segments are present", async () => {
        const fetchMock = vi.fn<typeof fetch>();
        fetchMock.mockResolvedValue(htmlResponse());
        vi.stubGlobal("fetch", fetchMock);

        const response = await GET(requestFor("/api/markdown"), context());

        expect(response.status).toBe(200);
        expect(String(fetchMock.mock.calls[0]?.[0])).toBe(`${ORIGIN}/`);
    });

    it("rejects paths outside the allowlist without fetching", async () => {
        const fetchMock = vi.fn<typeof fetch>();
        vi.stubGlobal("fetch", fetchMock);

        const response = await GET(
            requestFor("/api/markdown/private/report"),
            context(["private", "report"]),
        );
        const body = await response.text();

        expect(response.status).toBe(404);
        expect(response.headers.get("cache-control")).toBe("no-store");
        expect(body).toContain("Markdown unavailable");
        expect(fetchMock).not.toHaveBeenCalled();
    });

    it("returns a markdown 404 when the upstream page is missing", async () => {
        const fetchMock = vi.fn<typeof fetch>();
        fetchMock.mockResolvedValue(htmlResponse("<h1>Not found</h1>", 404));
        vi.stubGlobal("fetch", fetchMock);

        const response = await GET(requestFor("/api/markdown/projects"), context(["projects"]));

        expect(response.status).toBe(404);
        expect(response.headers.get("content-type")).toBe("text/markdown; charset=utf-8");
    });

    it("returns 502 when the upstream response is not HTML", async () => {
        const fetchMock = vi.fn<typeof fetch>();
        fetchMock.mockResolvedValue(
            new Response("{}", { status: 200, headers: { "content-type": "application/json" } }),
        );
        vi.stubGlobal("fetch", fetchMock);

        const response = await GET(requestFor("/api/markdown/projects"), context(["projects"]));

        expect(response.status).toBe(502);
    });

    it("returns 502 and logs when the upstream fetch throws", async () => {
        const fetchMock = vi.fn<typeof fetch>();
        fetchMock.mockRejectedValue(new Error("network down"));
        vi.stubGlobal("fetch", fetchMock);

        const response = await GET(requestFor("/api/markdown/projects"), context(["projects"]));

        expect(response.status).toBe(502);
        expect(console.error).toHaveBeenCalledWith(
            "Failed to fetch HTML for Markdown conversion",
            expect.objectContaining({ pathname: "/projects" }),
        );
    });
});
