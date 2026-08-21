export type SkillItem = {
    name: string;
    level: "production" | "familiar";
};

export type SkillGroup = {
    category: string;
    context: string;
    items: SkillItem[];
};

export const skills: SkillGroup[] = [
    {
        category: "Authentication & Identity",
        context: "Multi-tenant auth platforms, OIDC, MFA, and defense-in-depth security",
        items: [
            { name: "ZITADEL", level: "production" },
            { name: "OIDC / OAuth2", level: "production" },
            { name: "JWT / Session Management", level: "production" },
            { name: "TOTP MFA", level: "production" },
            { name: "RBAC", level: "production" },
            { name: "CSP / CSRF Hardening", level: "production" },
            { name: "Rate Limiting", level: "production" },
            { name: "Device Limit Enforcement", level: "production" },
        ],
    },
    {
        category: "Email & Messaging Infrastructure",
        context: "Centralized email delivery, queue processing, and campaign automation",
        items: [
            { name: "BullMQ / Job Queues", level: "production" },
            { name: "Email Delivery Pipelines", level: "production" },
            { name: "Bounce / Complaint Handling", level: "production" },
            { name: "Template Management", level: "production" },
            { name: "Socket.IO", level: "production" },
            { name: "Plunk API", level: "production" },
        ],
    },
    {
        category: "Payment Systems",
        context: "Multi-gateway abstraction, webhook processing, and transaction reliability",
        items: [
            { name: "Adapter Pattern", level: "production" },
            { name: "Stripe", level: "production" },
            { name: "bKash / SSLCommerz", level: "production" },
            { name: "Webhook Processing", level: "production" },
            { name: "Idempotency", level: "production" },
            { name: "Refund Management", level: "familiar" },
        ],
    },
    {
        category: "Backend Services",
        context:
            "Go is a core strength: concurrency, memory model, standard library. Plus REST API design and background workers.",
        items: [
            { name: "Go", level: "production" },
            { name: "Go Concurrency (goroutines, channels)", level: "production" },
            { name: "Go Standard Library", level: "production" },
            { name: "Node.js / Express", level: "production" },
            { name: "TypeScript", level: "production" },
            { name: "REST API Design", level: "production" },
            { name: "OpenAPI", level: "production" },
            { name: "Zod Validation", level: "production" },
            { name: "Laravel / PHP", level: "familiar" },
        ],
    },
    {
        category: "Data & Storage",
        context: "Primary: PostgreSQL, MongoDB, Redis. Familiar with ClickHouse, Firebase, MySQL.",
        items: [
            { name: "PostgreSQL", level: "production" },
            { name: "MongoDB", level: "production" },
            { name: "Redis", level: "production" },
            { name: "Firebase", level: "production" },
            { name: "ClickHouse", level: "familiar" },
            { name: "MySQL", level: "familiar" },
        ],
    },
    {
        category: "Infrastructure & Operations",
        context: "Containerization, CI/CD, monitoring, and deployment pipelines",
        items: [
            { name: "Docker", level: "production" },
            { name: "GitHub Actions / CI/CD", level: "production" },
            { name: "UAT Environment Management", level: "production" },
            { name: "Monitoring & Alerting", level: "production" },
            { name: "Vercel", level: "production" },
            { name: "Git", level: "production" },
        ],
    },
    {
        category: "Frontend (Supporting Role)",
        context: "SSR dashboards and admin panels: not my primary focus",
        items: [
            { name: "React / Next.js", level: "production" },
            { name: "Tailwind CSS", level: "production" },
            { name: "Electron", level: "production" },
            { name: "TanStack Query", level: "production" },
        ],
    },
    {
        category: "Testing & Quality",
        context: "Unit, integration, and E2E testing as part of the delivery pipeline",
        items: [
            { name: "Vitest", level: "production" },
            { name: "Test Strategy", level: "production" },
            { name: "Cypress", level: "production" },
            { name: "MSW", level: "production" },
            { name: "CI/CD Test Gates", level: "production" },
        ],
    },
];
