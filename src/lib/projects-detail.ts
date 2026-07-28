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
            "Multiple education products required secure, consistent authentication. Each product was managing identity independently, creating duplication, security inconsistencies, and maintenance overhead across the platform.",
        responsibilities:
            "Led implementation of the centralized authentication platform. Contributed to platform architecture while owning major technical decisions around MFA, device management, and security hardening.",
        architecture:
            "Centralized identity platform with a core identity service handling OIDC/OAuth2 flows, multi-tenant isolation, and token management. A custom application layer provides product-specific authentication logic, allowing downstream services to integrate without embedding identity complexity. Security policies (MFA, device limits) are enforced at the platform level, ensuring consistent enforcement regardless of the consuming application.",
        keyDecisions: [
            "Centralized identity into a single platform rather than per-product implementations",
            "Separated application-specific auth logic from core identity concerns",
            "Implemented MFA and device limits at the platform level for uniform security",
            "Designed security hardening to be enforceable without application-level changes",
        ],
        businessImpact:
            "Eliminated authentication duplication across products. Reduced integration effort for new services by centralizing identity into a shared platform. Improved security posture through consistent, platform-level policy enforcement. Enabled faster product development by removing identity complexity from individual teams.",
        technologies: ["Go", "PostgreSQL", "ZITADEL", "OIDC/OAuth2", "Docker"],
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
            "Educational content needed to be delivered through interactive, engaging formats that combined real-time interaction with AI-powered features — beyond what traditional learning platforms offered.",
        responsibilities:
            "Built and implemented the platform. Contributed to architecture decisions and collaborated with the engineering team across design, development, and deployment.",
        architecture:
            "Full-stack platform with a backend handling content delivery, real-time communication, and AI integration. Modular architecture separates content management, game logic, and AI services, allowing each to evolve independently. Real-time layers support interactive experiences while AI services provide dynamic content generation.",
        keyDecisions: [
            "Built modular architecture separating content, interaction, and AI concerns",
            "Implemented technical direction to support both real-time and AI-powered features",
            "Built for extensibility so new game types and AI capabilities can be added without core changes",
        ],
        businessImpact:
            "Established a reusable platform foundation for AI-powered educational experiences, enabling future expansion of interactive learning capabilities. Created a modular architecture that supports multiple game types, allowing content teams to build new experiences without additional engineering investment.",
        technologies: ["Node.js", "TypeScript", "MongoDB", "Docker"],
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
