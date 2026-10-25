import { absoluteUrl } from "@/lib/knowledge";

export const dynamic = "force-static";
export const revalidate = false;

export function GET() {
    const catalog = {
        linkset: [
            {
                anchor: absoluteUrl("/api/markdown"),
                "service-desc": [
                    {
                        href: absoluteUrl("/.well-known/api-catalog/openapi.json"),
                        type: "application/openapi+json;version=3.1",
                    },
                ],
                "service-doc": [
                    {
                        href: absoluteUrl("/api/markdown"),
                        type: "text/html",
                    },
                ],
            },
        ],
    };

    return new Response(JSON.stringify(catalog, null, 2), {
        status: 200,
        headers: {
            "Content-Type":
                'application/linkset+json; profile="https://www.rfc-editor.org/info/rfc9727"',
            "Cache-Control": "public, max-age=86400",
            "Access-Control-Allow-Origin": "*",
        },
    });
}
