export type SkillGroup = {
    category: string;
    items: string[];
};

export const skills: SkillGroup[] = [
    {
        category: "Languages",
        items: ["Go", "TypeScript", "JavaScript", "Python", "PHP", "SQL", "C", "C++"],
    },
    {
        category: "Backend & APIs",
        items: [
            "Node.js",
            "Express.js",
            "Go",
            "Laravel",
            "NestJS",
            "Django",
            "FastAPI",
            "REST API Design",
            "GraphQL",
            "OpenAPI",
            "Socket.IO",
            "Bull/Queue",
            "Zod",
        ],
    },
    {
        category: "Databases & Caching",
        items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Redis", "Firebase"],
    },
    {
        category: "Security & Identity",
        items: [
            "ZITADEL",
            "OIDC",
            "OAuth2",
            "JWT",
            "ABAC",
            "RBAC",
            "Firebase Auth",
            "Google OAuth",
            "CSP",
            "CSRF Protection",
            "Rate Limiting",
            "ReCAPTCHA v2/v3",
        ],
    },
    {
        category: "DevOps & Infrastructure",
        items: [
            "Docker",
            "GitHub Actions",
            "CI/CD",
            "UAT Environment Management",
            "Nginx",
            "PM2",
            "Vercel",
            "AWS S3",
            "Cloudflare Pages",
            "Git",
        ],
    },
    {
        category: "Frontend (secondary)",
        items: [
            "React.js",
            "Next.js",
            "Vue.js",
            "Electron",
            "Tailwind CSS",
            "SSR",
        ],
    },
    {
        category: "Testing & Quality",
        items: ["Vitest", "Jest", "Postman", "ESLint", "Biome"],
    },
];
