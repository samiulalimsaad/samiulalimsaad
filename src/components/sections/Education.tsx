import { Building2, CalendarDays, GraduationCap } from "lucide-react";
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
    const featured = educations[0];
    const others = educations.slice(1);
    return (
        <section
            id="education"
            className="w-full bg-linear-to-b from-sky-50/60 via-white to-indigo-50/60 py-20 px-4 animate-section-in"
        >
            <div className="mx-auto w-full max-w-6xl rounded-3xl border border-white/70 bg-white/80 p-6 sm:p-8 shadow-sm backdrop-blur-sm animate-soft-in">
                <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        Education
                    </span>
                </h2>
                <p className="mx-auto mb-6 max-w-2xl text-center text-sm sm:text-base text-zinc-600">
                    A quick snapshot of my academic journey, from school to
                    postgraduate studies.
                </p>
                <div className="space-y-6">
                    <div className="relative rounded-3xl border border-white/80 bg-linear-to-br from-white via-cyan-50/60 to-indigo-50/60 p-6 shadow-sm animate-card-in">
                        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full border border-indigo-100 bg-white/80 px-3 py-1 text-[11px] font-medium text-indigo-700">
                            <CalendarDays size={12} /> {featured.year}
                        </span>
                        <div className="flex items-start gap-3">
                            <span className="grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-cyan-500 to-indigo-500 text-white">
                                <GraduationCap size={18} />
                            </span>
                            <div className="space-y-1">
                                <h3 className="text-lg sm:text-xl font-semibold text-cyan-700">
                                    {featured.degree}
                                </h3>
                                {featured.subject && (
                                    <p className="text-sm font-medium text-cyan-700">
                                        {featured.subject}
                                    </p>
                                )}
                                <p className="text-xs sm:text-sm text-zinc-600">
                                    {featured.institute}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {others.map((e, i) => (
                            <div
                                key={i}
                                className="relative rounded-2xl border border-white/80 bg-linear-to-br from-white via-cyan-50/50 to-indigo-50/50 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md animate-card-in"
                            >
                                <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-indigo-100 bg-white/80 px-2 py-0.5 text-[11px] font-medium text-indigo-700">
                                    <CalendarDays size={12} /> {e.year}
                                </span>
                                <h4 className="text-base sm:text-lg font-semibold text-cyan-700">
                                    {e.degree}
                                </h4>
                                {e.subject && (
                                    <p className="text-xs sm:text-sm text-cyan-700">
                                        {e.subject}
                                    </p>
                                )}
                                <div className="mt-2 inline-flex items-center gap-2 text-[11px] font-medium text-cyan-700">
                                    <Building2 size={12} /> {e.institute}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
