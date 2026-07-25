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
        category: "Languages",
        context: "Production platform services and scripting",
        items: [
            { name: "Go", level: "production" },
            { name: "TypeScript", level: "production" },
            { name: "JavaScript", level: "production" },
            { name: "PHP", level: "production" },
            { name: "SQL", level: "production" },
            { name: "C", level: "familiar" },
            { name: "C++", level: "familiar" },
            { name: "Python", level: "familiar" },
        ],
    },
    {
        category: "Backend & APIs",
        context: "REST API design, auth services, payment processing, real-time messaging",
        items: [
            { name: "Node.js", level: "production" },
            { name: "Express.js", level: "production" },
            { name: "Go", level: "production" },
            { name: "Laravel", level: "production" },
            { name: "REST API Design", level: "production" },
            { name: "Socket.IO", level: "production" },
            { name: "Bull/Queue", level: "production" },
            { name: "Zod", level: "production" },
            { name: "NestJS", level: "familiar" },
            { name: "GraphQL", level: "familiar" },
            { name: "OpenAPI", level: "familiar" },
        ],
    },
    {
        category: "Databases & Caching",
        context: "Production data modeling, query optimization, and caching",
        items: [
            { name: "PostgreSQL", level: "production" },
            { name: "MongoDB", level: "production" },
            { name: "MySQL", level: "production" },
            { name: "Redis", level: "production" },
            { name: "Firebase", level: "production" },
            { name: "SQLite", level: "familiar" },
        ],
    },
    {
        category: "Security & Identity",
        context: "Multi-tenant auth, OIDC, access control, and web security headers",
        items: [
            { name: "ZITADEL", level: "production" },
            { name: "OIDC", level: "production" },
            { name: "OAuth2", level: "production" },
            { name: "JWT", level: "production" },
            { name: "RBAC", level: "production" },
            { name: "CSP", level: "production" },
            { name: "CSRF Protection", level: "production" },
            { name: "Rate Limiting", level: "production" },
            { name: "ReCAPTCHA", level: "production" },
            { name: "Firebase Auth", level: "familiar" },
            { name: "Google OAuth", level: "familiar" },
            { name: "ABAC", level: "familiar" },
        ],
    },
    {
        category: "DevOps & Infrastructure",
        context: "Containerization, CI/CD, environment management, and deployment",
        items: [
            { name: "Docker", level: "production" },
            { name: "GitHub Actions", level: "production" },
            { name: "CI/CD", level: "production" },
            { name: "UAT Environment Management", level: "production" },
            { name: "Vercel", level: "production" },
            { name: "Git", level: "production" },
            { name: "Nginx", level: "familiar" },
            { name: "PM2", level: "familiar" },

        ],
    },
    {
        category: "Supporting Skills",
        context: "SSR dashboards, desktop apps, and component libraries (not primary focus)",
        items: [
            { name: "React.js", level: "familiar" },
            { name: "Next.js", level: "familiar" },
            { name: "Electron", level: "production" },
            { name: "Tailwind CSS", level: "production" },
            { name: "SSR", level: "production" },
            { name: "Vue.js", level: "familiar" },
        ],
    },
    {
        category: "Testing & Quality",
        context: "Linting, API testing, and type safety",
        items: [
            { name: "ESLint", level: "production" },
            { name: "Postman", level: "production" },
            { name: "Vitest", level: "familiar" },
            { name: "Jest", level: "familiar" },
            { name: "Biome", level: "familiar" },
        ],
    },
];
