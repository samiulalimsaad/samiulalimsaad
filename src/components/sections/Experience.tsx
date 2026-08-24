import { Building2, CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import { experienceFacts } from "@/lib/knowledge";

const experiences = [
    {
        designation: experienceFacts[0].title,
        company: experienceFacts[0].employer,
        location: "Dhaka",
        jobMode: "Remote",
        dateFrom: experienceFacts[0].start,
        dateTo: experienceFacts[0].end,
        description: [
            "Own and operate 5 production services end-to-end: PH Mailer (email platform), SkillMapper (assessment platform), Bootcamp (LMS), JobPortal (recruitment platform), and FTP server. Full ownership across frontend, backend, and infrastructure.",
            "JobPortal (recruitment platform) and FTP file-delivery server: maintained and operated in production alongside the other services release coordination, incident response, and deployment through the same Docker + CI/CD pipeline.",
            "Build and maintain UAT environments and deployment pipelines using Docker and CI/CD. Maintain 24/7 monitoring and alerting across all services.",
            "Led architecture of a desktop DRM player (Electron) for protected educational video. Mid-project pivot when upstream Chromium changes broke offline playback. Redesigned to a hybrid online/offline license strategy.",
            "Contributed to the complete but unreleased multi-tenant auth platform on ZITADEL: custom Go product layer for SSR UI, security controls (MFA, device limits, rate limiting, CSP/CSRF), and integration logic. Coordinated two mid-level engineers.",
            "The multi-gateway payment service in Go is in development.",
        ],
    },
    {
        designation: experienceFacts[1].title,
        company: experienceFacts[1].employer,
        location: "Dhaka",
        jobMode: "Remote",
        dateFrom: experienceFacts[1].start,
        dateTo: experienceFacts[1].end,
        description: [
            "Reviewed code and architecture for junior engineers working on real React/JavaScript projects security, state management, error handling, and performance under review.",
            "Translated product requirements into implementable technical breakdowns and gave structured, actionable feedback on code quality and architecture.",
            "Coordinated with learners across different time zones, strengthening written technical communication.",
        ],
    },
    {
        designation: experienceFacts[2].title,
        company: experienceFacts[2].employer,
        location: "Remote",
        jobMode: "Part-time / Contract",
        dateFrom: experienceFacts[2].start,
        dateTo: experienceFacts[2].end,
        description: experienceFacts[2].responsibilities,
    },
    {
        designation: experienceFacts[3].title,
        company: experienceFacts[3].employer,
        location: "Rajshahi",
        jobMode: "On-site · Paid",
        dateFrom: experienceFacts[3].start,
        dateTo: experienceFacts[3].end,
        description: experienceFacts[3].responsibilities,
    },
    {
        designation: experienceFacts[4].title,
        company: experienceFacts[4].employer,
        location: "Romania",
        jobMode: "Remote",
        dateFrom: experienceFacts[4].start,
        dateTo: experienceFacts[4].end,
        description: experienceFacts[4].responsibilities,
    },
];

function formatDuration(from: string, to: string) {
    const end = to.toLowerCase() === "present" ? "Present" : to;
    return `${from} → ${end}`;
}

export default function Experience() {
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
                    Industry experience since Jul 2021 · Platform engineering since Aug 2024 ·
                    Remote · Bangladesh
                </p>

                <div className="rounded-3xl border border-white/70 bg-white/80 p-5 sm:p-6 backdrop-blur-sm">
                    <ol className="relative ml-4 border-s border-indigo-200">
                        {experiences.map((exp, index) => (
                            <li key={exp.company + exp.designation} className="mb-8 ms-6 last:mb-0">
                                <span className="absolute -left-4 grid h-8 w-8 place-items-center rounded-full bg-linear-to-br from-cyan-500 to-indigo-500 text-xs font-semibold text-white shadow-sm">
                                    {experiences.length - index}
                                </span>
                                <div className="rounded-2xl border border-zinc-100 bg-linear-to-br from-white via-cyan-50/40 to-indigo-50/40 p-4 transition hover:-translate-y-0.5 hover:shadow-md">
                                    <div className="space-y-1">
                                        <h3 className="text-base sm:text-lg font-semibold text-cyan-700 inline-flex items-center gap-2 flex-wrap">
                                            {exp.designation}
                                            {index === 0 && (
                                                <span className="text-[11px] font-medium text-emerald-600">
                                                    · Current
                                                </span>
                                            )}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="inline-flex items-center gap-1 rounded-full border border-cyan-100 bg-white/80 px-2 py-0.5 text-[11px] font-medium text-cyan-700">
                                                <Building2 size={12} /> {exp.company}
                                            </span>
                                            <span className="inline-flex items-center gap-1 rounded-full border border-cyan-100 bg-white/80 px-2 py-0.5 text-[11px] font-medium text-cyan-700">
                                                <CalendarDays size={12} />{" "}
                                                {formatDuration(exp.dateFrom, exp.dateTo)}
                                            </span>
                                        </div>
                                        <p className="text-[11px] sm:text-xs text-foreground/70 inline-flex items-center gap-2">
                                            <span className="inline-flex items-center gap-1">
                                                <MapPin size={12} /> {exp.location}
                                            </span>
                                            {exp.jobMode && (
                                                <span className="inline-flex items-center gap-1 text-foreground/70">
                                                    • {exp.jobMode}
                                                </span>
                                            )}
                                        </p>
                                        <ul className="mt-2 space-y-1 text-[11px] sm:text-xs leading-relaxed text-foreground/70">
                                            {exp.description.map((line, i) => (
                                                <li
                                                    key={i}
                                                    className="pl-3 relative before:absolute before:left-0 before:top-[0.4em] before:h-1 before:w-1 before:rounded-full before:bg-cyan-400/60"
                                                >
                                                    {line}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="mt-6 rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5 backdrop-blur-sm">
                    <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600 mb-3">
                        Evidence: Code Review, Monitoring & Platform Metrics
                    </p>
                    <div className="grid gap-4 sm:grid-cols-3">
                        <div className="flex flex-col">
                            <p className="text-xs text-foreground/60 mb-2">
                                GitHub contribution breakdown (62% commits, 12% code review, 26%
                                PRs):
                            </p>
                            <div
                                className="relative mt-auto flex items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-gray-900"
                                style={{ aspectRatio: "4/3" }}
                            >
                                <Image
                                    src="/evidence/pr-code-review.png"
                                    alt="GitHub contribution graph showing code review, commits, and pull request activity"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-xs text-foreground/60 mb-2">
                                Real-time monitoring via Discord (Uptime Kuma):
                            </p>
                            <div
                                className="relative mt-auto overflow-hidden rounded-xl border border-gray-200 bg-gray-800"
                                style={{ aspectRatio: "4/3" }}
                            >
                                <Image
                                    src="/evidence/monitoring-alert.png"
                                    alt="Discord monitoring alert showing service downtime detection with delivery metrics"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-xs text-foreground/60 mb-2">
                                Bootcamp platform: 898+ active users, 13K+ leads
                            </p>
                            <div
                                className="relative mt-auto overflow-hidden rounded-xl border border-gray-200 bg-white"
                                style={{ aspectRatio: "4/3" }}
                            >
                                <Image
                                    src="/evidence/bootcamp-active-users.png"
                                    alt="Bootcamp platform admin dashboard showing 898 active users and session data"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
