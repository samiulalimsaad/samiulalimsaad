import type { MetadataRoute } from "next";
import { CONTENT_SIGNAL } from "@/lib/content-signal";
import { SITE_URL } from "@/lib/knowledge";

export default function robots(): MetadataRoute.Robots {
    const siteUrl = SITE_URL;
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            other: {
                "Content-Signal": CONTENT_SIGNAL,
            },
        },
        sitemap: `${siteUrl}/sitemap.xml`,
    };
}
