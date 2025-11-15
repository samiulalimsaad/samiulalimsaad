import { getExperienceYears } from "@/lib/utils";
import { Briefcase, Building2, CalendarDays, MapPin } from "lucide-react";
const experiences = [
    {
        designation: "Web Developer",
        company: "Programming Hero",
        location: "Dhaka",
        jobType: "",
        jobMode: "Remote",
        dateFrom: "Aug 2024",
        dateTo: "Now",
        duration: "Aug 2024 0 Now",
        description:
            "Building and maintaining production-ready web applications, improving performance, and collaborating closely with designers and instructors to ship new features for learners.",
    },
    {
        designation: "Instructor",
        company: "Programming Hero",
        location: "Dhaka",
        jobType: "",
        jobMode: "Remote",
        dateFrom: "Feb 2023",
        dateTo: "Aug 2024",
        duration: "Feb 2023 0 Aug 2024",
        description:
            "Taught web development concepts through live sessions and guided projects, helping learners understand React, JavaScript, and modern frontend best practices.",
    },
    {
        designation: "FullStack Developer (Intern)",
        company: "Macroman Solution",
        location: "Rajshahi",
        jobType: "",
        jobMode: "On-site",
        dateFrom: "Feb 2022",
        dateTo: "August 2022",
        duration: "Feb 2022 0 Aug 2022",
        description:
            "Worked on full-stack features with React and Node.js, fixing bugs, implementing new modules, and learning how to ship code in a production environment.",
    },
    {
        designation: "Internship",
        company: "OpenfabricAI (Transylvanialab)",
        location: "Romania",
        jobType: "",
        jobMode: "Remote",
        dateFrom: "Jul 2021",
        dateTo: "Jan 2022",
        duration: "Jul 2021 0 Jan 2022",
        description:
            "Contributed to AI-focused projects remotely, collaborating with an international team and getting exposure to real-world product development workflows.",
    },
];

function formatDuration(from: string, to: string) {
    const end = to.toLowerCase() === "now" ? "Present" : to;
    return `${from} → ${end}`;
}

export default function Experience() {
    const roles = experiences.length;
    const modes = Array.from(new Set(experiences.map((e) => e.jobMode)))
        .filter(Boolean)
        .join(" / ");
    const years = getExperienceYears();
    return (
        <section
            id="experience"
            className="w-full bg-linear-to-b from-indigo-50/50 via-white to-sky-50/60 py-20 px-4 animate-section-in"
        >
            <div className="mx-auto w-full max-w-6xl rounded-3xl border border-white/70 bg-white/80 p-6 sm:p-8 shadow-sm backdrop-blur-sm animate-soft-in">
                <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        Experience
                    </span>
                </h2>
                <p className="mx-auto mb-8 max-w-2xl text-center text-sm sm:text-base text-zinc-600">
                    A timeline of real work, real teams, and real impact.
                </p>
                <div className="mx-auto flex flex-wrap justify-center gap-2 mb-6">
                    <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-3 py-1 text-[11px] font-medium text-indigo-700">
                        <Briefcase size={14} /> {roles} roles
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/80 px-3 py-1 text-[11px] font-medium text-cyan-700">
                        <CalendarDays size={14} /> {years}+ years
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/80 px-3 py-1 text-[11px] font-medium text-emerald-700">
                        <Building2 size={14} /> {modes}
                    </span>
                </div>

                <div className="rounded-3xl border border-white/70 bg-white/80 p-5 sm:p-6 backdrop-blur-sm">
                    <ol className="relative ml-4 border-s border-indigo-200">
                        {experiences.map((exp, index) => (
                            <li
                                key={exp.company + exp.designation}
                                className="mb-8 ms-6 last:mb-0 animate-card-in"
                            >
                                <span className="absolute -left-4 grid h-8 w-8 place-items-center rounded-full bg-linear-to-br from-cyan-500 to-indigo-500 text-xs font-semibold text-white shadow-sm">
                                    {experiences.length - index}
                                </span>
                                <div className="rounded-2xl border border-zinc-100 bg-linear-to-br from-white via-cyan-50/40 to-indigo-50/40 p-4 transition hover:-translate-y-0.5 hover:shadow-md">
                                    <div className="space-y-1">
                                        <h3 className="text-base sm:text-lg font-semibold text-indigo-700">
                                            {exp.designation}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="inline-flex items-center gap-1 rounded-full border border-cyan-100 bg-white/80 px-2 py-0.5 text-[11px] font-medium text-cyan-700">
                                                <Building2 size={12} />{" "}
                                                {exp.company}
                                            </span>
                                            <span className="inline-flex items-center gap-1 rounded-full border border-indigo-100 bg-white/80 px-2 py-0.5 text-[11px] font-medium text-indigo-700">
                                                <CalendarDays size={12} />{" "}
                                                {formatDuration(
                                                    exp.dateFrom,
                                                    exp.dateTo
                                                )}
                                            </span>
                                        </div>
                                        <p className="text-[11px] sm:text-xs text-zinc-500 inline-flex items-center gap-2">
                                            <span className="inline-flex items-center gap-1">
                                                <MapPin size={12} />{" "}
                                                {exp.location}
                                            </span>
                                            {exp.jobMode && (
                                                <span className="inline-flex items-center gap-1 text-zinc-600">
                                                    • {exp.jobMode}
                                                </span>
                                            )}
                                        </p>
                                        <p className="mt-2 text-[11px] sm:text-xs leading-relaxed text-zinc-600">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
}
