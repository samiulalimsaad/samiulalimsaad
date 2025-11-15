export type SkillItem = string;

export type SkillGroup = {
    title: string;
    items: SkillItem[];
};

export type SkillTier = {
    id: "advanced" | "proficient" | "familiar" | "other";
    label: string;
    description?: string;
    groups: SkillGroup[];
};

export const skillTiers: SkillTier[] = [
    {
        id: "advanced",
        label: "🛠 Language & Tools (Advanced)",
        description: "Technologies I use confidently in production.",
        groups: [
            {
                title: "Core Web & Frontend",
                items: [
                    "JavaScript",
                    "TypeScript",
                    "React",
                    "Next.js",
                    "Redux",
                    "Vite",
                    "HTML5",
                    "CSS3",
                    "Tailwind CSS",
                    "Material UI",
                    "Chakra UI",
                    "Styled Components",
                    "Emotion",
                    "shadcn/ui",
                    "Radix UI",
                    "React Query",
                    "SWR",
                    "Apollo Client",
                    "Vue.js",
                ],
            },
            {
                title: "Backend & APIs",
                items: [
                    "Node.js",
                    "Express",
                    "Fastify",
                    "AdonisJS",
                    "Deno",
                    "Bun",
                    "Apollo Server",
                    "Socket.io",
                    "ws",
                    "REST",
                    "gRPC",
                    "WebSockets",
                    "API Versioning",
                    "OpenAPI / Swagger",
                ],
            },
            {
                title: "Databases & Persistence",
                items: [
                    "MongoDB",
                    "MySQL",
                    "PostgreSQL",
                    "SQLite",
                    "Redis",
                    "Supabase",
                    "PlanetScale",
                    "Neon",
                    "Prisma",
                    "TypeORM",
                    "Sequelize",
                    "Knex.js",
                ],
            },
            {
                title: "DevOps & Cloud",
                items: [
                    "Git",
                    "GitHub",
                    "GitHub Actions",
                    "CircleCI",
                    "Docker",
                    "Kubernetes",
                    "Terraform",
                    "AWS",
                    "Azure",
                    "Google Cloud",
                    "DigitalOcean",
                    "Linode",
                    "Vercel",
                    "Netlify",
                    "Sentry",
                    "Grafana",
                    "Docker Desktop",
                    "Ngrok",
                ],
            },
            {
                title: "OS, Tooling & Productivity",
                items: [
                    "Linux",
                    "Debian",
                    "Ubuntu",
                    "ESLint",
                    "Markdown",
                    "VS Code",
                    "Yarn",
                    "npm",
                    "Postman",
                    "Insomnia",
                    "Swagger UI",
                    "Redocly",
                    "Figma",
                    "Jupyter",
                    "Anaconda",
                    "Trello",
                    "Jira",
                ],
            },
        ],
    },
    {
        id: "proficient",
        label: "🛠 Language & Tools (Proficient)",
        description:
            "Technologies I have used on real projects and can work with comfortably.",
        groups: [
            {
                title: "Languages & Backend Frameworks",
                items: [
                    "Python",
                    "Go",
                    "C",
                    "C++",
                    "PHP",
                    "Flask",
                    "Django",
                    "FastAPI",
                    "Laravel",
                    "Symfony",
                    "API Platform",
                    "Gin",
                    "Echo",
                    "Fiber",
                    "Gorilla Mux",
                    "Chi",
                    "Deno (runtime)",
                ],
            },
            {
                title: "Containers, VPS & Infra",
                items: [
                    "Docker Swarm",
                    "CentOS",
                    "Rocky Linux",
                    "Nginx",
                    "Caddy",
                    "Traefik",
                    "PM2",
                    "Cloudflare",
                    "SSH",
                    "SSL / TLS",
                    "Let's Encrypt",
                ],
            },
            {
                title: "Data & Machine Learning",
                items: [
                    "Pandas",
                    "NumPy",
                    "Scikit-learn",
                    "TensorFlow",
                    "PyTorch",
                    "Keras",
                    "Streamlit",
                    "Dash",
                    "OpenCV",
                    "Pillow",
                ],
            },
            {
                title: "Frontend & UI",
                items: ["Bootstrap", "Ionic", "Electron", "Adobe XD"],
            },
        ],
    },
    {
        id: "familiar",
        label: "🛠 Language & Tools (Familiar)",
        description:
            "Technologies I have explored and can pick up quickly when needed.",
        groups: [
            {
                title: "Mobile / Web / Desktop",
                items: [
                    "Flutter",
                    "Dart",
                    "Expo",
                    "FlutterFlow",
                    "SQLite (Flutter)",
                    "Moor",
                    "Electron",
                ],
            },
            {
                title: "APIs & GraphQL",
                items: ["GraphQL", "Apollo GraphQL", "NestJS"],
            },
            {
                title: "Architecture & Patterns",
                items: ["Caching Strategies", "Retry Patterns"],
            },
            {
                title: "Platforms & Tools",
                items: ["Arduino", "Bash"],
            },
        ],
    },
    {
        id: "other",
        label: "🧩 Other Platforms & Concepts",
        description: "Additional platforms and concepts I work with.",
        groups: [
            {
                title: "Coolify Platform",
                items: [
                    "Coolify self-hosted platform",
                    "Docker integration",
                    "Database management",
                    "SSL certificates",
                    "Git integration",
                    "Backup systems",
                    "Monitoring dashboards",
                ],
            },
            {
                title: "Architectural Styles",
                items: [
                    "Microservices",
                    "Monoliths",
                    "Serverless",
                    "Event-Driven Architecture",
                    "CQRS",
                    "Hexagonal Architecture",
                    "Clean Architecture",
                    "API Gateway",
                    "Event Sourcing",
                ],
            },
            {
                title: "Networking & APIs",
                items: [
                    "API Gateway",
                    "API Versioning",
                    "REST",
                    "gRPC",
                    "WebSockets",
                    "Event Sourcing",
                    "OpenAPI / Swagger",
                ],
            },
        ],
    },
];
