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
            { name: "Refund Management", level: "production" },
        ],
    },
    {
        category: "Backend Services",
        context: "REST API design, background workers, and state machines",
        items: [
            { name: "Go", level: "production" },
            { name: "Node.js / Express", level: "production" },
            { name: "TypeScript", level: "production" },
            { name: "Laravel / PHP", level: "production" },
            { name: "REST API Design", level: "production" },
            { name: "State Machines", level: "production" },
            { name: "Zod Validation", level: "production" },
            { name: "OpenAPI", level: "familiar" },
        ],
    },
    {
        category: "Data & Storage",
        context: "Polyglot persistence: choosing the right store for each access pattern",
        items: [
            { name: "PostgreSQL", level: "production" },
            { name: "MongoDB", level: "production" },
            { name: "Redis", level: "production" },
            { name: "ClickHouse", level: "production" },
            { name: "MySQL", level: "production" },
            { name: "Firebase", level: "production" },
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
            { name: "React / Next.js", level: "familiar" },
            { name: "Tailwind CSS", level: "production" },
            { name: "Electron", level: "production" },
            { name: "TanStack Query", level: "familiar" },
        ],
    },
];
