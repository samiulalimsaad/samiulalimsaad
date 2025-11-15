const educations = [
    {
        degree: "Master's of Science",
        subject: "Computer Science & Engineering (CSE)",
        institute: "Rajshahi University",
        year: "2024",
    },
    {
        degree: "Bachelor of Science",
        subject: "Computer Science & Engineering (CSE)",
        institute: "North Bengal International University",
        year: "2021",
    },
    {
        degree: "Higher School Certificate (HSC)",
        subject: "Science",
        institute: "Rajshahi University School & College",
        year: "2016",
    },
    {
        degree: "Secondary School Certificate (SSC)",
        subject: "Science",
        institute: "Rajshahi Adarsha High School",
        year: "2014",
    },
];
export default function Education() {
    return (
        <section
            id="education"
            className="w-full bg-linear-to-b from-white via-indigo-50/50 to-sky-50/60 py-20 px-4 "
        >
            <div className="mx-auto w-full max-w-6xl rounded-3xl border border-gray-200 bg-white/40 p-6 sm:p-8 backdrop-blur-sm">
                <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        Education
                    </span>
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-center text-sm sm:text-base text-zinc-600">
                    A quick snapshot of my academic journey, from school to
                    postgraduate studies.
                </p>

                <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.1fr)]">
                    {/* Highlighted latest degree */}
                    <div className="rounded-3xl border border-white/80 bg-linear-to-br from-white via-cyan-50/60 to-indigo-50/70 p-6 shadow-sm">
                        <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            Latest Degree
                        </p>
                        <h3 className="mb-2 text-lg sm:text-xl font-semibold text-indigo-700">
                            {educations[0].degree}
                        </h3>
                        <p className="mb-1 text-sm font-medium text-cyan-700">
                            {educations[0].subject}
                        </p>
                        <p className="mb-3 text-xs sm:text-sm text-zinc-600">
                            {educations[0].institute}
                        </p>
                        <p className="mb-4 text-xs sm:text-sm text-zinc-500">
                            Completed in {educations[0].year}
                        </p>
                        <p className="text-sm sm:text-[0.95rem] leading-relaxed text-zinc-600">
                            This formal background in Computer Science and
                            Engineering laid the foundation for my work in
                            software engineering, algorithms, and systems
                            design, and continues to influence how I approach
                            problem-solving in real-world projects.
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="rounded-3xl border border-white/70 bg-white/80 p-5 sm:p-6 backdrop-blur-sm">
                        <ol className="relative ml-4 border-s border-indigo-200">
                            {educations.map((e, i) => (
                                <li key={i} className="mb-8 ms-6 last:mb-0">
                                    <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-indigo-500 text-xs font-semibold text-white">
                                        {educations.length - i}
                                    </span>
                                    <div className="rounded-2xl border border-zinc-100 bg-linear-to-br from-white via-cyan-50/40 to-indigo-50/40 p-4 transition hover:-translate-y-0.5 hover:shadow-sm">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="space-y-1">
                                                <h3 className="text-base sm:text-lg font-semibold text-indigo-700">
                                                    {e.degree}
                                                </h3>
                                                {e.subject && (
                                                    <p className="text-xs sm:text-sm text-cyan-700">
                                                        {e.subject}
                                                    </p>
                                                )}
                                                <p className="text-[11px] sm:text-xs font-medium text-zinc-500">
                                                    {e.institute}
                                                </p>
                                            </div>
                                            <span className="mt-1 inline-flex items-center rounded-full border border-indigo-100 bg-white/80 px-3 py-1 text-[11px] font-semibold text-indigo-700">
                                                {e.year}
                                            </span>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}
