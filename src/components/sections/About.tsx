import { getExperienceYears } from "@/lib/utils";

const highlights = [
    {
        label: "Focus",
        value: "Full-stack engineering with strong backend depth",
    },
    {
        label: "Frontend",
        value: "React, Next.js, Vue, Nuxt, Zustand, Redux, React Query",
    },
    {
        label: "Backend",
        value: "Node.js, Express, Go, Laravel, PHP, Django",
    },
    {
        label: "Databases",
        value: "MongoDB, PostgreSQL, MySQL, Redis",
    },
    {
        label: "Data & delivery",
        value: "Docker, CI/CD, system design, API architecture",
    },
    {
        label: "Availability",
        value: "Remote full-stack and backend engineering roles",
    },
];

export default function About() {
    const experienceYears = getExperienceYears();

    return (
        <section
            id="about"
            className="w-full bg-linear-to-b from-white via-sky-50/60 to-indigo-50/40 py-20 px-4 animate-section-in"
        >
            <div className="mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[1.45fr_0.85fr] lg:items-stretch">
                <div className="flex items-center rounded-3xl border border-gray-200 bg-white/80 p-6 backdrop-blur-sm animate-soft-in sm:p-8">
                    <div className="w-full">
                        <h2 className="text-center md:text-left text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                            <span className="bg-linear-to-r from-indigo-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                                About Me
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg text-foreground/80 mb-4 leading-relaxed">
                            I&apos;m{" "}
                            <span className="font-semibold bg-linear-to-r from-cyan-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                Samiul Alim
                            </span>
                            , a full-stack software engineer from Bangladesh
                            with {experienceYears}+ years building production
                            web applications, API platforms, identity systems,
                            and distributed infrastructure.
                        </p>
                        <p className="text-base sm:text-lg text-foreground/70 mb-4 leading-relaxed">
                            My expertise spans the full software development
                            lifecycle, from UI implementation and frontend
                            architecture to backend services, database design,
                            system architecture, CI/CD, Docker, and production
                            deployments. I&apos;ve delivered applications across
                            Next.js, React, MERN, Nuxt, Vue, Laravel/PHP,
                            Django, Go, and SSR architectures.
                        </p>
                        <p className="text-base sm:text-lg text-foreground/70 mb-4 leading-relaxed">
                            On the backend, I have experience designing and
                            implementing multi-tenant OIDC/OAuth2 identity and
                            access management systems, ABAC authorization
                            models, Redis-backed caching and analytics
                            solutions, and scalable API platforms.
                        </p>
                        <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
                            I enjoy solving complex engineering challenges and
                            building reliable systems that can scale. Beyond
                            professional work, I sharpen my problem-solving
                            through competitive programming as{" "}
                            <a
                                href="https://codeforces.com/profile/samiulalimsaad"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-cyan-700 underline-offset-4 hover:underline"
                            >
                                samiulalimsaad
                            </a>{" "}
                            on Codeforces.
                        </p>
                    </div>
                </div>

                <aside className="rounded-3xl border border-white/70 bg-white/80 p-5 shadow-sm backdrop-blur-sm animate-card-in sm:p-6">
                    <div className="mb-5">
                        <p className="text-sm font-semibold uppercase tracking-wide text-cyan-700">
                            Core Expertise
                        </p>
                        <h3 className="mt-1 text-2xl font-bold text-foreground">
                            Production-grade software delivery
                        </h3>
                    </div>
                    <div className="grid gap-3">
                        {highlights.map((item) => (
                            <div
                                key={item.label}
                                className="rounded-2xl border border-cyan-100 bg-cyan-50/50 p-4"
                            >
                                <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
                                    {item.label}
                                </p>
                                <p className="mt-1 text-sm font-medium leading-relaxed text-foreground/80">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </aside>
            </div>
        </section>
    );
}
