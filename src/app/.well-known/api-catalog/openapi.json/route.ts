export const dynamic = "force-static";
export const revalidate = false;

export function GET() {
    const spec = {
        openapi: "3.1.0",
        info: {
            title: "Markdown API",
            version: "1.0.0",
            description:
                "Converts any allowlisted portfolio page to clean Markdown for AI/LLM consumption. Send Accept: text/markdown to any page URL, or use this dedicated endpoint.",
        },
        servers: [{ url: "https://www.samiulalimsaad.com" }],
        paths: {
            "/api/markdown/{path}": {
                get: {
                    summary: "Convert a portfolio page to Markdown",
                    description:
                        "Fetches the HTML for the given allowlisted page and returns a clean Markdown representation. Allowlisted paths include: /, /projects, /projects/ph-mailer, /projects/ph-auth-service, /projects/ph-bootcamp, /projects/payment-service, /projects/skill-mapper, /projects/speaksail, /projects/ai-game-platform, /gists, and individual gist slugs.",
                    operationId: "getMarkdown",
                    parameters: [
                        {
                            name: "path",
                            in: "path",
                            required: false,
                            schema: { type: "string" },
                            description:
                                "Slash-separated page path (e.g. `projects`, `gists/csp-nonce-middleware`). Omit for the homepage.",
                            examples: {
                                homepage: { summary: "Homepage", value: "" },
                                projects: { summary: "Projects list", value: "projects" },
                                gist: {
                                    summary: "A specific gist",
                                    value: "gists/rate-limiter-pattern",
                                },
                            },
                        },
                    ],
                    responses: {
                        "200": {
                            description: "Markdown representation of the requested page",
                            headers: {
                                "Content-Language": {
                                    schema: { type: "string", example: "en" },
                                },
                                "Content-Signal": {
                                    schema: {
                                        type: "string",
                                        example: "ai-train=no, search=yes, ai-input=yes",
                                    },
                                    description:
                                        "Machine-readable signal indicating acceptable AI use of the content.",
                                },
                                "X-Markdown-Tokens": {
                                    schema: { type: "integer" },
                                    description: "Estimated LLM token count of the response body.",
                                },
                            },
                            content: {
                                "text/markdown": {
                                    schema: { type: "string" },
                                },
                            },
                        },
                        "404": {
                            description: "Path is not in the allowlist",
                        },
                        "502": {
                            description: "Upstream HTML source could not be fetched",
                        },
                    },
                },
            },
        },
    };

    return new Response(JSON.stringify(spec, null, 2), {
        status: 200,
        headers: {
            "Content-Type": "application/openapi+json;version=3.1",
            "Cache-Control": "public, max-age=86400",
        },
    });
}
