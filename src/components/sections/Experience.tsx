import { getExperienceYears } from "@/lib/utils";
import { Building2, CalendarDays, MapPin } from "lucide-react";

const experiences = [
    {
        designation: "Web Developer L2",
        company: "Programming Hero",
        location: "Dhaka",
        jobMode: "Remote",
        dateFrom: "Aug 2024",
        dateTo: "Present",
        description: [
            "Built and maintained production platform services: centralized email (PH Mailer on Plunk), multi-gateway payment integrations in Go (bKash, SSLCommerz, Stripe, Nagad), and internal tooling across multiple product teams.",
            "Contributed to a multi-tenant auth platform on ZITADEL: custom Go product layer for SSR UI, security controls (MFA/OTP, device limits, rate limiting, CSRF/CSP), and integration logic. Collaborative architecture under Senior SWE authority; coordinated two mid-level engineers.",
            "Led architecture and implementation of a desktop DRM player (Electron) for protected educational video playback, including offline support and Chromium DRM constraint handling.",
            "Maintained production education platforms (Bootcamp, Skill Mapper): feature development, monitoring, bug fixes, and cross-team coordination.",
            "Managed UAT environments, deployment pipelines, and server operations for several internal services.",
        ],
    },
    {
        designation: "Instructor",
        company: "Programming Hero",
        location: "Dhaka",
        jobMode: "Remote",
        dateFrom: "Feb 2022",
        dateTo: "Aug 2024",
        description: [
            "Taught web development through live sessions and guided projects covering React, JavaScript, and modern frontend practices.",
            "Reviewed learner code, broke down project requirements into implementable steps, and mentored students through real-world development challenges.",
        ],
    },
    {
        designation: "FullStack Developer (Intern)",
        company: "Macroman Solution",
        location: "Rajshahi",
        jobMode: "On-site",
        dateFrom: "Feb 2022",
        dateTo: "Aug 2022",
        description: [
            "Built full-stack features with React and Node.js. Fixed bugs, implemented new modules, and shipped code in a production environment.",
        ],
    },
    {
        designation: "Internship",
        company: "OpenfabricAI (Transylvanialab)",
        location: "Romania",
        jobMode: "Remote",
        dateFrom: "Jul 2021",
        dateTo: "Jan 2022",
        description: [
            "Contributed to AI-focused projects remotely with an international team. Early exposure to real-world product development workflows.",
        ],
    },
];

function formatDuration(from: string, to: string) {
    const end = to.toLowerCase() === "present" ? "Present" : to;
    return `${from} → ${end}`;
}

export default function Experience() {
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
                <p className="mx-auto mb-8 max-w-2xl text-center text-sm sm:text-base text-foreground/70">
                    Professional software engineering since 2021 · Remote
                    · Bangladesh
                </p>

                <div className="rounded-3xl border border-white/70 bg-white/80 p-5 sm:p-6 backdrop-blur-sm">
                    <ol className="relative ml-4 border-s border-indigo-200">
                        {experiences.map((exp, index) => (
                            <li
                                key={exp.company + exp.designation}
                                className="mb-8 ms-6 last:mb-0"
                            >
                                <span className="absolute -left-4 grid h-8 w-8 place-items-center rounded-full bg-linear-to-br from-cyan-500 to-indigo-500 text-xs font-semibold text-white shadow-sm">
                                    {experiences.length - index}
                                </span>
                                <div className="rounded-2xl border border-zinc-100 bg-linear-to-br from-white via-cyan-50/40 to-indigo-50/40 p-4 transition hover:-translate-y-0.5 hover:shadow-md">
                                    <div className="space-y-1">
                                        <h3 className="text-base sm:text-lg font-semibold text-cyan-700">
                                            {exp.designation}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="inline-flex items-center gap-1 rounded-full border border-cyan-100 bg-white/80 px-2 py-0.5 text-[11px] font-medium text-cyan-700">
                                                <Building2 size={12} />{" "}
                                                {exp.company}
                                            </span>
                                            <span className="inline-flex items-center gap-1 rounded-full border border-cyan-100 bg-white/80 px-2 py-0.5 text-[11px] font-medium text-cyan-700">
                                                <CalendarDays size={12} />{" "}
                                                {formatDuration(
                                                    exp.dateFrom,
                                                    exp.dateTo,
                                                )}
                                            </span>
                                        </div>
                                        <p className="text-[11px] sm:text-xs text-foreground/70 inline-flex items-center gap-2">
                                            <span className="inline-flex items-center gap-1">
                                                <MapPin size={12} />{" "}
                                                {exp.location}
                                            </span>
                                            {exp.jobMode && (
                                                <span className="inline-flex items-center gap-1 text-foreground/70">
                                                    • {exp.jobMode}
                                                </span>
                                            )}
                                        </p>
                                        <ul className="mt-2 space-y-1 text-[11px] sm:text-xs leading-relaxed text-foreground/70">
                                            {exp.description.map(
                                                (line, i) => (
                                                    <li
                                                        key={i}
                                                        className="pl-3 relative before:absolute before:left-0 before:top-[0.4em] before:h-1 before:w-1 before:rounded-full before:bg-cyan-400/60"
                                                    >
                                                        {line}
                                                    </li>
                                                ),
                                            )}
                                        </ul>
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
