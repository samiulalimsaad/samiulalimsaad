import { getExperienceYears } from "@/lib/utils";

export default function About() {
    const experienceYears = getExperienceYears();

    return (
        <section
            id="about"
            className="w-full bg-linear-to-b from-white via-sky-50/60 to-indigo-50/40 py-20 px-4 animate-section-in"
        >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-stretch">
                <div className="flex-1 flex items-center">
                    <div className="w-full rounded-3xl bg-white/80 p-8 backdrop-blur-sm border border-gray-200 animate-soft-in">
                        <h2 className="text-center md:text-left text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                            <span className="bg-linear-to-r from-indigo-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                                About Me
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-700 mb-4 leading-relaxed">
                            I&apos;m{" "}
                            <span className="font-semibold bg-linear-to-r from-cyan-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                                Samiul Alim
                            </span>{" "}
                            from Bangladesh, a full-stack software engineer with
                            over {experienceYears} years of experience building
                            scalable, modern web applications. I also practice
                            competitive programming as{" "}
                            <span className="font-semibold text-indigo-600">
                                samiulalimsaad - Codeforces
                            </span>
                            , sharpening my problem-solving and algorithmic
                            thinking. What started as curiosity quickly became a
                            focused passion for crafting products that are not
                            only beautiful on the surface but robust,
                            maintainable, and ready for production.
                        </p>
                        <p className="text-base sm:text-lg text-zinc-600 mb-4 leading-relaxed">
                            I work across the full stack, building user-centric
                            applications with technologies like
                            <span className="font-semibold text-cyan-700">
                                {" "}
                                React
                            </span>
                            ,
                            <span className="font-semibold text-indigo-700">
                                {" "}
                                Next.js
                            </span>
                            ,
                            <span className="font-semibold text-emerald-700">
                                {" "}
                                Node.js
                            </span>
                            , and
                            <span className="font-semibold text-sky-700">
                                {" "}
                                MongoDB
                            </span>
                            , often paired with tools like Tailwind CSS, ShadCN,
                            and modern UI libraries to ship fast, accessible
                            interfaces.
                        </p>
                        <p className="text-base sm:text-lg text-zinc-600 mb-4 leading-relaxed">
                            On the backend and infrastructure side, I design
                            clean, well-documented REST and GraphQL APIs,
                            automate deployments with tools like Docker and
                            GitHub Actions, and use platforms such as Vercel or
                            Coolify to deliver reliable, production-ready
                            systems. I care deeply about clean architecture,
                            performance, and DX whether I&apos;m optimizing
                            queries, refining the UI, or improving CI/CD
                            pipelines.
                        </p>
                        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
                            I don&apos;t just write code; I solve problems. From
                            reducing page load times and building real-time
                            dashboards to deploying self-hosted platforms, my
                            focus is always on outcomes that drive real business
                            value and provide a great experience for both users
                            and teams.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
