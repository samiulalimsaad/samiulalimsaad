import { getExperienceYears } from "@/lib/utils";

export default function About() {
    const experienceYears = getExperienceYears();

    return (
        <section
            id="about"
            className="w-full bg-linear-to-b from-white via-sky-50/60 to-indigo-50/40 py-20 px-4"
        >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-stretch">
                <div className="flex-1 flex items-center">
                    <div className="w-full rounded-3xl bg-white/80 p-8 backdrop-blur-sm border border-gray-200">
                        <h2 className="text-center md:text-left text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                            <span className="bg-linear-to-r from-indigo-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                                About Me
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-700 mb-4 leading-relaxed">
                            I&apos;m{" "}
                            <span className="font-semibold text-indigo-600">
                                Samiul Alim
                            </span>{" "}
                            from Bangladesh, a full-stack software engineer with
                            over {experienceYears} years of hands-on experience
                            building scalable web applications. My journey
                            started during my university days at{" "}
                            <span className="font-semibold text-cyan-600">
                                North Bengal International University
                            </span>
                            , where curiosity for computers and programming
                            quickly turned into a long-term passion.
                        </p>
                        <p className="text-base sm:text-lg text-zinc-600 mb-4 leading-relaxed">
                            I work across the full stack, crafting modern,
                            user-centric applications with technologies like
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
                            . I care deeply about clean architecture,
                            performance, and DX—whether I&apos;m designing APIs,
                            optimizing queries, or refining the UI.
                        </p>
                        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
                            I don&apos;t just write code; I solve problems. From
                            reducing load times and building real-time features
                            to automating deployments with modern DevOps tools,
                            my focus is always on creating reliable,
                            maintainable systems that deliver real business
                            value.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
