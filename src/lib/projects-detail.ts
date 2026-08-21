export interface ProjectDetail {
    _id: string;
    businessProblem: string;
    responsibilities: string;
    architecture: string;
    keyDecisions: string[];
    businessImpact: string;
    technologies: string[];
}

export const projectDetails: ProjectDetail[] = [
    {
        _id: "featured-2",
        businessProblem:
            "Multiple education products needed one secure identity layer with tenant-scoped users, clients, and projects instead of separate authentication implementations and inconsistent security controls.",
        responsibilities:
            "Led implementation of the centralized authentication platform. Owned major technical decisions around OIDC integration, MFA, device and session management, tenant isolation, security hardening, the Nuxt administration dashboard, and end-to-end verification.",
        architecture:
            "Go identity provider built on the ZITADEL OIDC library, with PostgreSQL for identity and tenant configuration, Redis for sessions and revocation, and ClickHouse for audit-event analytics. The service exposes OIDC protocol endpoints plus an admin API for tenants, projects, clients, users, and sessions. A Nuxt 3 dashboard consumes that management surface through OIDC authentication.",
        keyDecisions: [
            "Used a battle-tested OIDC library instead of implementing protocol flows from scratch",
            "Separated protocol handling, product-specific auth UI, and admin management APIs",
            "Used PostgreSQL, Redis, and ClickHouse for distinct identity, session, and analytics workloads",
            "Enforced MFA, device limits, CSRF, CSP nonces, reCAPTCHA, rate limiting, and session controls centrally",
            "Added Cypress E2E coverage and Docker/GitHub Actions release workflows before production rollout",
        ],
        businessImpact:
            "Created a reusable central identity foundation for multiple products, reducing duplicated authentication work and concentrating security policy in one service. The platform is complete and release-ready, with admin tooling, automated integration coverage, and deployment packaging in place, but has not yet been promoted to production.",
        technologies: [
            "Go",
            "PostgreSQL",
            "Redis",
            "ClickHouse",
            "Prisma",
            "ZITADEL OIDC",
            "OpenAPI",
            "Nuxt 3",
            "Cypress",
            "Docker",
        ],
    },
    {
        _id: "featured-1",
        businessProblem:
            "Internal products needed reliable email delivery without each team managing provider integrations, delivery logic, and failure handling independently.",
        responsibilities:
            "Owned maintenance, feature development, and cross-team coordination for the centralized email platform.",
        architecture:
            "Centralized email service providing a unified delivery API for all internal products. The service handles provider abstraction, delivery tracking, retry logic, and template management, allowing consuming services to send emails without managing delivery complexity.",
        keyDecisions: [
            "Centralized email into a single service to reduce per-product integration overhead",
            "Abstracted provider logic so delivery can be migrated without consumer changes",
            "Built cross-team coordination workflows for template and delivery management",
        ],
        businessImpact:
            "Reduced engineering effort required to integrate email capabilities into new products. Improved delivery reliability through centralized retry and failure handling. Enabled non-engineering teams to manage email templates independently, reducing reliance on engineering for routine email operations.",
        technologies: ["Node.js", "TypeScript", "Plunk"],
    },
    {
        _id: "ai-game-platform",
        businessProblem:
            "Technical learners needed practice that was more interactive than documentation or video, while generated game content had to remain safe, predictable, and compatible with fixed gameplay components.",
        responsibilities:
            "Built the full-stack platform and its shared content contract. Owned the engine registry, envelope design, provider-agnostic generation pipeline, server-authoritative scoring path, and integration between the Express API and React app.",
        architecture:
            "pnpm monorepo with 19 frozen React game templates, a shared @eduplay/schemas package, and an Express + TypeScript API. AI emits only per-engine JSON; the backend validates it, wraps it in a universal GameEnvelope, stores each play in MongoDB, and the frontend validates again before rendering. Score submissions contain raw results only; the server re-validates stored content and derives correctness, XP, levels, badges, and leaderboard updates.",
        keyDecisions: [
            "Used fixed React templates plus schema-validated JSON instead of AI-generated UI",
            "Created a universal envelope for shared rewards, timers, assets, accessibility, localization, and versioning",
            "Separated searchable game metadata, heavy game content, and user progress in MongoDB",
            "Made scoring server-authoritative and added offline authored fixtures for local development",
        ],
        businessImpact:
            "Established a reusable foundation for interactive technical learning. New content can use existing mechanics without engine changes, while new mechanics follow a clear six-seam registry path. The current MVP supports runtime-personalized play through four AI providers and deterministic local fixture seeding.",
        technologies: [
            "TypeScript",
            "React",
            "Vite",
            "Express",
            "MongoDB",
            "Zod",
            "Zustand",
            "Docker",
        ],
    },
    {
        _id: "featured-3",
        businessProblem:
            "A large-scale bootcamp program needed a comprehensive learning management system handling course delivery, event registration, payment processing, DRM-protected video streaming, QR-based attendance, and WhatsApp group management.",
        responsibilities:
            "Owned maintenance and feature development across the full-stack platform. Ensured reliability for active learners through testing and production monitoring.",
        architecture:
            "Full-stack LMS with Express.js + TypeScript backend, MongoDB persistence, Redis caching, and React 19 frontend. ABAC authorization with 5 roles and 13 resource types. DRM video delivery with IP restrictions. Append-only activity audit log with secret auto-redaction.",
        keyDecisions: [
            "Chose ABAC over RBAC for fine-grained permission control across diverse resource types",
            "Built 13 domain-specific cache adapters instead of generic caching",
            "Implemented append-only audit logging with automatic secret redaction",
            "Used MSW for frontend test infrastructure to avoid mocking real API behavior",
        ],
        businessImpact:
            "Served 13,820+ leads and 898+ active users. Automated bootcamp operations (registration, payment, attendance, communication) reducing manual coordination overhead.",
        technologies: [
            "TypeScript",
            "Node.js",
            "Express",
            "MongoDB",
            "Redis",
            "React 19",
            "bKash",
            "Docker",
        ],
    },
    {
        _id: "featured-4",
        businessProblem:
            "Language learners and instructors needed a marketplace connecting them through live video lessons, real-time messaging, and secure payment processing across multiple currencies and gateways.",
        responsibilities:
            "Built payment processing and real-time messaging systems enabling transactions and communication within the platform.",
        architecture:
            "Next.js 14 monolith with 90+ API routes, 27 Mongoose models, and 7 user roles. Firebase Auth + JWT hybrid authentication. Dual notification system: Socket.IO for in-app messaging and Firebase Cloud Messaging for push notifications.",
        keyDecisions: [
            "Chose hybrid auth (Firebase Auth + JWT) for identity management flexibility",
            "Dual notification architecture to cover both browser and mobile scenarios",
            "Multi-gateway payment strategy serving international users across currencies",
        ],
        businessImpact:
            "Enabled a functional education marketplace connecting instructors with students across languages and currencies. Provided payment flexibility through multiple gateway support.",
        technologies: ["Next.js", "TypeScript", "MongoDB", "Firebase", "Socket.IO", "Stripe"],
    },
];
