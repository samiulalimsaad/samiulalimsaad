import { Server, Building2, Bug, Activity } from "lucide-react";

const reasons = [
    {
        icon: <Server className="w-5 h-5" />,
        title: "Production Ownership",
        description:
            "I maintain 5 production services with 24/7 monitoring and alerting. I've handled incidents, managed deployment pipelines, and coordinated releases across multiple product teams. I treat maintenance as engineering, not overhead.",
    },
    {
        icon: <Building2 className="w-5 h-5" />,
        title: "Platform Thinking",
        description:
            "I build shared services that multiple teams consume — email, payments, authentication. I design for the second consumer from day one, because shared infrastructure that only works for one team isn't infrastructure.",
    },
    {
        icon: <Bug className="w-5 h-5" />,
        title: "Engineering Judgment",
        description:
            "Every case study on this portfolio explains why I made each decision, not just what I built. I document trade-offs, failure modes, and what I'd do differently. I expect the same rigor from systems I join.",
    },
    {
        icon: <Activity className="w-5 h-5" />,
        title: "Operational Maturity",
        description:
            "Monitoring, alerting, CI/CD, and deployment pipelines are first-class engineering work in my book. I don't ship code and hope for the best — I instrument, observe, and iterate.",
    },
];

export default function WhyHireMe() {
    return (
        <section
            id="why-hire-me"
            className="w-full bg-linear-to-b from-white via-indigo-50/40 to-sky-50/60 py-20 px-4 animate-section-in"
        >
            <div className="mx-auto w-full max-w-6xl">
                <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        Why Hire Me
                    </span>
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-center text-sm sm:text-base text-foreground/70">
                    Four signals I bring to every engineering team.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {reasons.map((r) => (
                        <div
                            key={r.title}
                            className="rounded-2xl border border-gray-100 bg-white/80 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md animate-card-in"
                        >
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                {r.icon}
                            </div>
                            <h3 className="text-base font-semibold text-foreground mb-1">
                                {r.title}
                            </h3>
                            <p className="text-sm text-foreground/70 leading-relaxed">
                                {r.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
