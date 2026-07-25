import fs from "node:fs";
import path from "node:path";

export type GistMeta = {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    relatedProject?: {
        name: string;
        href: string;
    };
};

export type Gist = {
    meta: GistMeta;
    content: string;
};

const gistMetaMap: Record<string, GistMeta> = {
    "csp-nonce-middleware": {
        slug: "csp-nonce-middleware",
        title: "CSP Nonce Middleware Pattern",
        description:
            "A security middleware pattern that generates a unique cryptographic nonce per request and injects it into the Content-Security-Policy header.",
        tags: ["Go", "Security", "Middleware", "CSP"],
        relatedProject: {
            name: "PH Auth Service",
            href: "/projects/ph-auth-service",
        },
    },
    "payment-gateway-adapter": {
        slug: "payment-gateway-adapter",
        title: "Payment Gateway Adapter Pattern",
        description:
            "An adapter pattern that abstracts multiple payment gateways behind a unified interface for easy provider switching.",
        tags: ["Go", "Payments", "Architecture", "Adapter Pattern"],
        relatedProject: {
            name: "Payment Service",
            href: "/projects/payment-service",
        },
    },
    "rate-limiter-pattern": {
        slug: "rate-limiter-pattern",
        title: "Rate Limiter Pattern",
        description:
            "A per-IP token bucket rate limiter using concurrent-safe maps and the Go rate package to protect APIs from abuse.",
        tags: ["Go", "Security", "Middleware", "Rate Limiting"],
        relatedProject: {
            name: "PH Auth Service",
            href: "/projects/ph-auth-service",
        },
    },
    "totp-mfa-service": {
        slug: "totp-mfa-service",
        title: "TOTP MFA Service Pattern",
        description:
            "A time-based one-time password service for multi-factor authentication using the HOTP/TOTP standard.",
        tags: ["Go", "Security", "MFA", "Authentication"],
        relatedProject: {
            name: "PH Auth Service",
            href: "/projects/ph-auth-service",
        },
    },
};

export function getAllGistMeta(): GistMeta[] {
    return Object.values(gistMetaMap);
}

export function getGistBySlug(slug: string): Gist | null {
    const meta = gistMetaMap[slug];
    if (!meta) return null;

    const filePath = path.join(
        process.cwd(),
        "public",
        "gists",
        `${slug}.md`,
    );

    try {
        const content = fs.readFileSync(filePath, "utf-8");
        return { meta, content };
    } catch {
        return null;
    }
}

export function getAllGistSlugs(): string[] {
    return Object.keys(gistMetaMap);
}
