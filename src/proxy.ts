import { type NextRequest, NextResponse } from "next/server";
import { prefersMarkdown } from "@/lib/markdown/negotiation";

const LINK_HEADER = [
    '</.well-known/api-catalog>; rel="api-catalog"',
    '</.well-known/api-catalog/openapi.json>; rel="service-desc"; type="application/openapi+json;version=3.1"',
    '</api/markdown>; rel="service-doc"',
    '</ai-context>; rel="describedby"',
].join(", ");

function withAcceptVary(response: NextResponse): NextResponse {
    const existing = response.headers.get("vary");
    const values = new Set(
        (existing ?? "")
            .split(",")
            .map((value) => value.trim())
            .filter(Boolean),
    );

    values.add("Accept");
    response.headers.set("Vary", [...values].join(", "));

    return response;
}

function withLinkHeaders(response: NextResponse): NextResponse {
    response.headers.set("Link", LINK_HEADER);
    return response;
}

/**
 * Content negotiation entry point. HTML stays the default; only requests that
 * explicitly prefer text/markdown are rewritten to the internal converter.
 */
export function proxy(request: NextRequest): NextResponse {
    if (!prefersMarkdown(request.headers.get("accept"))) {
        return withLinkHeaders(withAcceptVary(NextResponse.next()));
    }

    const target = request.nextUrl.clone();
    const { pathname } = target;

    target.pathname = pathname === "/" ? "/api/markdown" : `/api/markdown${pathname}`;
    target.search = "";

    return withLinkHeaders(withAcceptVary(NextResponse.rewrite(target)));
}

export const config = {
    matcher: ["/((?!api/|_next/|.*\\..*).*)"],
};
