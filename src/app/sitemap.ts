import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.samiulalimsaad.com";
    return [
        {
            url: siteUrl,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: `${siteUrl}/projects`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${siteUrl}/projects/ph-mailer`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        },
        {
            url: `${siteUrl}/projects/ph-auth-service`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        },
        {
            url: `${siteUrl}/projects/payment-service`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        },
        {
            url: `${siteUrl}/projects/skill-mapper`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        },
        {
            url: `${siteUrl}/projects/ph-bootcamp`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        },
        {
            url: `${siteUrl}/projects/speaksail`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.7,
        },
        {
            url: `${siteUrl}/gists`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.6,
        },
        {
            url: `${siteUrl}/gists/csp-nonce-middleware`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.5,
        },
        {
            url: `${siteUrl}/gists/payment-gateway-adapter`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.5,
        },
        {
            url: `${siteUrl}/gists/rate-limiter-pattern`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.5,
        },
        {
            url: `${siteUrl}/gists/totp-mfa-service`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.5,
        },
    ];
}
