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

export type CodeSampleGist = {
    id: string;
    title: string;
    description: string;
    url: string;
    language: string;
    pattern: string;
    usedIn: string;
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

    const filePath = path.join(process.cwd(), "public", "gists", `${slug}.md`);

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

export const codeSampleGists: CodeSampleGist[] = [
    {
        id: "worker-pool",
        title: "Go Worker Pool",
        description:
            "Generic worker pool with configurable concurrency, graceful shutdown via signal handling, and built-in metrics collection for jobs processed and queue depth.",
        url: "https://gist.github.com/samiulalimsaad/9c56d0e8e20d2c0c8a4500499c3c00f8",
        language: "Go",
        pattern: "Concurrency",
        usedIn: "PH Mailer, Payment Service",
    },
    {
        id: "state-machine",
        title: "TypeScript State Machine",
        description:
            "Typed state machine with transition guards, side-effect hooks, and event sourcing support. Prevents invalid transitions and centralizes lifecycle logic.",
        url: "https://gist.github.com/samiulalimsaad/a2ed9ed1b863840f60a70591c0d93bc0",
        language: "TypeScript",
        pattern: "State Management",
        usedIn: "Skill Mapper, Payment Service",
    },
    {
        id: "payment-adapter",
        title: "Payment Gateway Adapter",
        description:
            "Interface-based adapter pattern for payment gateway abstraction. Includes webhook signature verification, idempotency handling, and refund management.",
        url: "https://gist.github.com/samiulalimsaad/975470ddd466f43abdd3452b61e93b67",
        language: "Go",
        pattern: "Adapter / Strategy",
        usedIn: "Payment Service",
    },
    {
        id: "rate-limiter",
        title: "Rate Limiting Middleware",
        description:
            "Token bucket rate limiter with per-user and per-IP strategies. Redis-backed for distributed deployments with configurable capacity and refill rates.",
        url: "https://gist.github.com/samiulalimsaad/cd75c8d0dae1ac26e72a2b7dc21121c4",
        language: "Go",
        pattern: "Middleware / Resilience",
        usedIn: "PH Auth Service",
    },
    {
        id: "csrf-middleware",
        title: "CSRF Protection Middleware",
        description:
            "Double-submit cookie pattern with CSP nonce integration. Handles safe/unsafe HTTP methods and provides configurable token generation and validation.",
        url: "https://gist.github.com/samiulalimsaad/27d139171374da820d2b6d1b8f8044c8",
        language: "Go",
        pattern: "Middleware / Security",
        usedIn: "PH Auth Service",
    },
];
