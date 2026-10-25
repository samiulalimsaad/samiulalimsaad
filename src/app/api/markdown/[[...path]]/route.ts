import type { NextRequest } from "next/server";
import { CONTENT_SIGNAL, MARKDOWN_CONTENT_TYPE } from "@/lib/content-signal";
import { renderMarkdownFromHtml } from "@/lib/markdown/convert";
import { estimateMarkdownTokens } from "@/lib/markdown/negotiation";
import { isMarkdownPath, normalizeMarkdownPath } from "@/lib/markdown/paths";

type RouteContext = {
    params: Promise<{ path?: string[] }>;
};

function markdownHeaders(markdown: string, cacheControl: string): Headers {
    return new Headers({
        "Cache-Control": cacheControl,
        "Content-Language": "en",
        "Content-Signal": CONTENT_SIGNAL,
        "Content-Type": MARKDOWN_CONTENT_TYPE,
        Vary: "Accept",
        "X-Markdown-Tokens": estimateMarkdownTokens(markdown).toString(),
    });
}

function errorResponse(status: number, message: string): Response {
    const markdown = `# Markdown unavailable\n\n${message}\n`;

    return new Response(markdown, {
        status,
        headers: markdownHeaders(markdown, "no-store"),
    });
}

function pathFromSegments(segments: string[] | undefined): string {
    const joined = (segments ?? []).join("/");

    return normalizeMarkdownPath(joined ? `/${joined}` : "/");
}

export async function GET(request: NextRequest, context: RouteContext) {
    const { path: segments } = await context.params;
    const pathname = pathFromSegments(segments);

    if (!isMarkdownPath(pathname)) {
        return errorResponse(404, `No Markdown representation is available for \`${pathname}\`.`);
    }

    const target = new URL(pathname, request.nextUrl.origin);
    let upstream: Response;

    try {
        upstream = await fetch(target, {
            headers: { Accept: "text/html" },
            next: { revalidate: 3600 },
        });
    } catch (error) {
        console.error("Failed to fetch HTML for Markdown conversion", { pathname, error });
        return errorResponse(502, "The HTML source for this page could not be fetched.");
    }

    if (!upstream.ok) {
        console.error("HTML source returned a non-OK status for Markdown conversion", {
            pathname,
            status: upstream.status,
        });

        return errorResponse(
            upstream.status === 404 ? 404 : 502,
            "The HTML source for this page is not available.",
        );
    }

    const contentType = upstream.headers.get("content-type") ?? "";
    if (!contentType.includes("text/html")) {
        console.error("HTML source did not return text/html for Markdown conversion", {
            pathname,
            contentType,
        });

        return errorResponse(502, "The HTML source for this page was not an HTML document.");
    }

    const html = await upstream.text();
    const markdown = renderMarkdownFromHtml(html, target.toString());

    return new Response(markdown, {
        status: 200,
        headers: markdownHeaders(markdown, "public, max-age=3600, stale-while-revalidate=86400"),
    });
}
