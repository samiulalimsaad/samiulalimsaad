import { ArrowLeftRight, Eye, Lock, Shield, Timer, Wrench } from "lucide-react";

const principles = [
    {
        icon: <Wrench className="w-5 h-5" />,
        title: "Simplicity over unnecessary complexity",
        description:
            "I choose boring, operable designs. If I can't explain a system to a new team member in 30 minutes, it's too complex. Favor incremental improvements over rewrites.",
    },
    {
        icon: <Timer className="w-5 h-5" />,
        title: "Reliability before optimization",
        description:
            "I optimize for correctness first. Fast and wrong is worse than slow and right. Make it work, make it right, then make it fast. In that order.",
    },
    {
        icon: <Eye className="w-5 h-5" />,
        title: "Observability by default",
        description:
            "Every service I build has structured logging, health checks, and alerting from day one, not as an afterthought. If I can't see what's happening, I can't operate it.",
    },
    {
        icon: <Lock className="w-5 h-5" />,
        title: "Security is part of architecture",
        description:
            "Authentication, authorization, and input validation are designed into the system, not bolted on later. Security decisions made early cost less than security incidents.",
    },
    {
        icon: <ArrowLeftRight className="w-5 h-5" />,
        title: "Design APIs for long-term evolution",
        description:
            "Version from day one. Never break consumers. Deprecate thoughtfully. Good API design pays dividends every time a new consumer integrates.",
    },
    {
        icon: <Shield className="w-5 h-5" />,
        title: "Automate repetitive work",
        description:
            "If a team member has done something twice by hand, it should be automated. CI/CD, deployment pipelines, and environment provisioning are force multipliers.",
    },
];

export default function Principles() {
    return (
        <section
            id="principles"
            className="w-full bg-linear-to-b from-white via-sky-50/60 to-indigo-50/40 py-20 px-4 animate-section-in"
        >
            <div className="mx-auto w-full max-w-6xl">
                <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        Engineering Principles
                    </span>
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-center text-sm sm:text-base text-foreground/70">
                    The engineering values that guide my decisions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {principles.map((p) => (
                        <div
                            key={p.title}
                            className="rounded-2xl border border-gray-100 bg-white/80 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md animate-card-in"
                        >
                            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                {p.icon}
                            </div>
                            <h3 className="text-sm font-semibold text-foreground mb-1">
                                {p.title}
                            </h3>
                            <p className="text-xs text-foreground/70 leading-relaxed">
                                {p.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
