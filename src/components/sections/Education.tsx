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
    {
        degree: "Junior School Certificate (JSC)",
        subject: "",
        institute: "Rajshahi Adarsha High School",
        year: "2011",
    },
];
export default function Education() {
    return (
        <section
            id="education"
            className="w-full bg-linear-to-b from-white via-indigo-50/50 to-sky-50/60 py-20 px-4"
        >
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        Education
                    </span>
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-center text-sm sm:text-base text-zinc-600">
                    A quick timeline of my academic journey.
                </p>
                <div className="rounded-3xl border border-white/70 bg-white/80 p-6 shadow-xl backdrop-blur-sm">
                    <ol className="relative ml-4 border-s border-indigo-200">
                        {educations.map((e, i) => (
                            <li key={i} className="mb-8 ms-6 last:mb-0">
                                <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-indigo-500 text-xs font-semibold text-white shadow-md">
                                    {educations.length - i}
                                </span>
                                <div className="rounded-2xl bg-white/90 p-4 shadow-sm">
                                    <h3 className="font-semibold text-lg text-indigo-700">
                                        {e.degree}
                                    </h3>
                                    <h4 className="text-sm text-cyan-700">
                                        {e.subject}
                                    </h4>
                                    <h5 className="text-xs font-medium text-zinc-500">
                                        {e.institute}
                                    </h5>
                                    <p className="mt-1 text-xs text-zinc-400">
                                        {e.year}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
