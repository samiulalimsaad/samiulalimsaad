import {
    AlertTriangle,
    BarChart3,
    GitBranch,
    Globe,
    HardDrive,
    Lock,
    Mail,
    MessageSquare,
    RefreshCw,
    Server,
    Shield,
    Zap,
} from "lucide-react";
import Link from "next/link";

export default function PHMailerCaseStudy() {
    return (
        <>
            <HeroSection />
            <ExecutiveSummary />
            <ArchitectureDiagram />
            <KeyFeatures />
            <TechnicalDecisions />
            <MetricsSection />
            <IncidentStory />
            <TradeOffs />
            <LessonsLearned />
            <BackButton />
        </>
    );
}

function HeroSection() {
    return (
        <section className="w-full bg-linear-to-b from-sky-50/60 via-white to-indigo-50/60 py-20 px-4 animate-section-in">
            <div className="mx-auto w-full max-w-4xl text-center">
                <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600 ring-1 ring-indigo-100 mb-4">
                    Production — 100,000 emails/day peak
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        PH Mailer
                    </span>
                </h1>
                <p className="text-lg sm:text-xl text-foreground/70 mb-2">
                    Centralized Email Platform
                </p>
                <p className="text-sm text-foreground/50 max-w-2xl mx-auto mb-6">
                    Open-source email platform serving multiple product teams.
                    Replaced Mailgun with a self-hosted alternative handling
                    transactional emails, campaigns, and workflow automation.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {["Node.js", "TypeScript", "BullMQ", "Redis", "PostgreSQL", "AWS SES"].map(
                        (t) => (
                            <span
                                key={t}
                                className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 ring-1 ring-cyan-100"
                            >
                                {t}
                            </span>
                        ),
                    )}
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-foreground text-background hover:bg-foreground/90 transition"
                    >
                        ← Back to projects
                    </Link>
                </div>
            </div>
        </section>
    );
}

function ExecutiveSummary() {
    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <SummaryCard
                        icon={<Mail className="w-5 h-5" />}
                        value="100K"
                        label="Emails per day (peak)"
                    />
                    <SummaryCard
                        icon={<Server className="w-5 h-5" />}
                        value="Multiple"
                        label="Internal products served"
                    />
                    <SummaryCard
                        icon={<Shield className="w-5 h-5" />}
                        value="Production"
                        label="Status — Live"
                    />
                </div>
                <p className="text-base text-foreground/80 leading-relaxed">
                    A centralized email platform built on an open-source core to
                    eliminate per-provider costs and unify delivery across
                    multiple product teams. The system handles transactional emails,
                    marketing campaigns, and automated workflows through a
                    queue-based architecture with real-time delivery tracking.
                </p>
            </div>
        </section>
    );
}

function SummaryCard({
    icon,
    value,
    label,
}: {
    icon: React.ReactNode;
    value: string;
    label: string;
}) {
    return (
        <div className="flex flex-col items-center rounded-2xl border border-gray-100 bg-white/60 p-6 text-center">
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                {icon}
            </div>
            <div className="text-2xl font-bold text-foreground">{value}</div>
            <div className="text-xs text-foreground/60">{label}</div>
        </div>
    );
}

function ArchitectureDiagram() {
    return (
        <section className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                    Architecture
                </h2>
                <div className="rounded-2xl border border-gray-100 bg-white/80 p-6 backdrop-blur-sm overflow-x-auto">
                    <div className="min-w-[600px]">
                        <div className="flex flex-col items-center gap-2 text-sm">
                            {/* API Layer */}
                            <div className="flex items-center gap-4">
                                <div className="rounded-xl border border-cyan-200 bg-cyan-50 px-4 py-2 text-center text-sm font-medium text-cyan-700">
                                    Client Applications
                                </div>
                                <Arrow />
                                <div className="rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2 text-center text-sm font-medium text-indigo-700">
                                    REST API
                                </div>
                            </div>

                            {/* Queue Layer */}
                            <ArrowDown />
                            <div className="rounded-xl border border-amber-200 bg-amber-50 px-6 py-3 text-center text-sm font-medium text-amber-700">
                                <div className="font-semibold">Job Queue</div>
                                <div className="text-[10px] text-amber-500/80">
                                    Redis-backed — BullMQ
                                </div>
                            </div>

                            {/* Worker Layer */}
                            <ArrowDown />
                            <div className="rounded-xl border border-violet-200 bg-violet-50 px-6 py-3 text-center text-sm font-medium text-violet-700">
                                <div className="font-semibold">Worker Process</div>
                                <div className="text-[10px] text-violet-500/80">
                                    Rate-limited, concurrent processing
                                </div>
                            </div>

                            {/* Delivery Layer */}
                            <ArrowDown />
                            <div className="flex items-center gap-4">
                                <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-center text-sm font-medium text-emerald-700">
                                    Delivery Provider
                                </div>
                                <Arrow />
                                <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-center text-xs text-foreground/70">
                                    Recipients
                                </div>
                            </div>

                            {/* Data Stores */}
                            <div className="mt-4 flex flex-wrap justify-center gap-3">
                                <DataStore label="PostgreSQL" icon={<HardDrive className="w-3.5 h-3.5" />} />
                                <DataStore label="Redis" icon={<RefreshCw className="w-3.5 h-3.5" />} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Arrow() {
    return (
        <svg className="w-6 h-4 text-foreground/30" fill="none" viewBox="0 0 24 8">
            <path
                d="M1 4h20M18 1l4 3-4 3"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ArrowDown() {
    return (
        <svg className="w-4 h-6 text-foreground/30" fill="none" viewBox="0 0 8 24">
            <path
                d="M4 1v20M1 18l3 4 3-4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function DataStore({ label, icon }: { label: string; icon: React.ReactNode }) {
    return (
        <div className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-foreground/70">
            {icon}
            {label}
        </div>
    );
}

function KeyFeatures() {
    const features = [
        {
            icon: <Mail className="w-5 h-5" />,
            title: "Transactional Emails",
            description:
                "API-driven email delivery with template support and variable substitution for automated notifications.",
        },
        {
            icon: <BarChart3 className="w-5 h-5" />,
            title: "Campaign Automation",
            description:
                "Newsletter and product update delivery to segmented audiences with open and click tracking.",
        },
        {
            icon: <Zap className="w-5 h-5" />,
            title: "Background Job Processing",
            description:
                "Redis-backed job queue with configurable concurrency, rate limiting, and automatic retries.",
        },
        {
            icon: <Globe className="w-5 h-5" />,
            title: "Custom Domain Support",
            description:
                "Verified sending domains with DKIM and SPF configuration for deliverability.",
        },
        {
            icon: <Lock className="w-5 h-5" />,
            title: "Security Scanning",
            description:
                "Automated phishing detection via LLM integration with configurable sample rates and thresholds.",
        },
        {
            icon: <MessageSquare className="w-5 h-5" />,
            title: "Workflow Automation",
            description:
                "Multi-step automations with triggers, delays, and conditional logic for complex email sequences.",
        },
    ];

    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                    Key Features
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((f) => (
                        <div
                            key={f.title}
                            className="rounded-2xl border border-gray-100 bg-white/60 p-5 hover:border-indigo-100 hover:bg-indigo-50/30 transition"
                        >
                            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                                {f.icon}
                            </div>
                            <h3 className="text-sm font-semibold text-foreground mb-1">
                                {f.title}
                            </h3>
                            <p className="text-xs text-foreground/60 leading-relaxed">
                                {f.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function TechnicalDecisions() {
    const decisions = [
        {
            title: "Fork over Build from Scratch",
            context:
                "Building a production email platform from scratch would have taken months. An open-source alternative provided a solid foundation with active community maintenance.",
            outcome:
                "Forked an existing platform and added custom integrations while maintaining upstream sync. This reduced initial development time significantly.",
            icon: <GitBranch className="w-5 h-5" />,
        },
        {
            title: "BullMQ for Background Jobs",
            context:
                "Email delivery, campaign processing, and workflow execution are I/O-bound operations that shouldn't block API responses.",
            outcome:
                "Separate worker process processes jobs asynchronously with configurable concurrency and rate limiting. Workers can scale independently from the API server.",
            icon: <RefreshCw className="w-5 h-5" />,
        },
        {
            title: "AWS SES as Delivery Provider",
            context:
                "Needed a cost-effective, reliable email delivery service with built-in analytics and bounce handling.",
            outcome:
                "SES provides sub-cent per email pricing, automatic bounce and complaint tracking, and configurable sending quotas. Rate limits are dynamically adjusted based on SES account health.",
            icon: <Server className="w-5 h-5" />,
        },
        {
            title: "Separate Worker Process",
            context:
                "Background job processing can be resource-intensive and should not degrade API response times.",
            outcome:
                "Worker process runs independently, enabling independent scaling and fault isolation. If the worker crashes, the API server remains unaffected.",
            icon: <Shield className="w-5 h-5" />,
        },
    ];

    return (
        <section className="w-full bg-linear-to-b from-sky-50/60 via-white to-indigo-50/60 py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                    Technical Decisions
                </h2>
                <div className="space-y-4">
                    {decisions.map((d) => (
                        <div
                            key={d.title}
                            className="rounded-2xl border border-gray-100 bg-white/80 p-6 backdrop-blur-sm"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                    {d.icon}
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-foreground mb-1">
                                        {d.title}
                                    </h3>
                                    <p className="text-sm text-foreground/70 mb-2">
                                        {d.context}
                                    </p>
                                    <p className="text-sm text-indigo-600/80">
                                        {d.outcome}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function MetricsSection() {
    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                    Metrics
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <MetricCard label="Peak Daily Volume" value="100,000" />
                    <MetricCard label="Internal Products" value="Multiple" />
                    <MetricCard label="Delivery Provider" value="AWS SES" />
                    <MetricCard label="Status" value="Production" />
                </div>
            </div>
        </section>
    );
}

function MetricCard({
    label,
    value,
}: {
    label: string;
    value: string;
}) {
    return (
        <div className="rounded-2xl border border-gray-100 bg-white/60 p-5 text-center">
            <div className="text-lg font-bold text-indigo-600">{value}</div>
            <div className="text-xs text-foreground/60">{label}</div>
        </div>
    );
}

function IncidentStory() {
    return (
        <section className="w-full bg-linear-to-b from-amber-50/60 via-white to-amber-50/60 py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <div className="flex items-center gap-3 mb-8">
                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                    <h2 className="text-2xl font-bold text-foreground">
                        Incident Story — Password Reset Failure
                    </h2>
                </div>

                <div className="space-y-4">
                    <IncidentBlock
                        title="What Happened"
                        content="The 'Forgot Password' functionality stopped working because the SMTP server was not configured. Users were unable to receive password reset emails, blocking their ability to regain account access."
                    />
                    <IncidentBlock
                        title="How It Was Resolved"
                        content="To unblock users immediately, I queried the reset token directly from the Redis server, manually constructed the password reset URL, and shared it with the team. This allowed affected users to reset their passwords while the SMTP configuration was being fixed."
                    />
                    <IncidentBlock
                        title="Root Cause"
                        content="The SMTP server configuration was missing from the deployment environment. The email system was successfully queuing messages but failing to deliver them because no outbound mail server was configured."
                    />
                    <IncidentBlock
                        title="What Was Learned"
                        content="This incident highlighted the need for delivery monitoring — without it, queued emails can silently fail. Added health checks for outbound integrations and configured delivery failure alerts."
                    />
                </div>
            </div>
        </section>
    );
}

function IncidentBlock({
    title,
    content,
}: {
    title: string;
    content: string;
}) {
    return (
        <div className="rounded-2xl border border-amber-100 bg-white/80 p-5 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-amber-800 mb-1">
                {title}
            </h3>
            <p className="text-sm text-foreground/70 leading-relaxed">
                {content}
            </p>
        </div>
    );
}

function TradeOffs() {
    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                    Trade-offs
                </h2>
                <div className="space-y-4">
                    <TradeOffCard
                        decision="Fork maintenance vs. building from scratch"
                        pro="Rapid initial development, community support, upstream features"
                        con="Monthly merge conflicts, upstream API changes, fork synchronization overhead"
                    />
                    <TradeOffCard
                        decision="Single worker concurrency vs. dynamic rate limiting"
                        pro="Optimal throughput based on provider quota, adaptive to account health"
                        con="Quota fetch on startup adds latency, worker count changes require restart"
                    />
                    <TradeOffCard
                        decision="Background job processing vs. synchronous delivery"
                        pro="API stays responsive, retries are automatic, queue provides backpressure"
                        con="Eventual delivery, queue management overhead, dead letter handling"
                    />
                </div>
            </div>
        </section>
    );
}

function TradeOffCard({
    decision,
    pro,
    con,
}: {
    decision: string;
    pro: string;
    con: string;
}) {
    return (
        <div className="rounded-2xl border border-gray-100 bg-white/60 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3">
                {decision}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <span className="text-xs font-medium text-emerald-600">Benefit</span>
                    <p className="text-xs text-foreground/70 mt-0.5">{pro}</p>
                </div>
                <div>
                    <span className="text-xs font-medium text-red-500">Cost</span>
                    <p className="text-xs text-foreground/70 mt-0.5">{con}</p>
                </div>
            </div>
        </div>
    );
}

function LessonsLearned() {
    return (
        <section className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                    What I Learned
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <LessonCard
                        icon={<Server className="w-5 h-5" />}
                        title="Monitor Outbound Integrations"
                        description="Silent failures in email delivery are invisible without proper monitoring. Every outbound integration needs health checks."
                    />
                    <LessonCard
                        icon={<RefreshCw className="w-5 h-5" />}
                        title="Queue Backpressure Is Essential"
                        description="Without a queue, email volume spikes would degrade API performance. BullMQ provides natural backpressure and retry logic."
                    />
                    <LessonCard
                        icon={<GitBranch className="w-5 h-5" />}
                        title="Fork Hygiene Matters"
                        description="Maintaining a fork requires discipline — isolating custom code in separate files reduces merge conflicts during upstream sync."
                    />
                    <LessonCard
                        icon={<Shield className="w-5 h-5" />}
                        title="Fail Open, Investigate Later"
                        description="Using Redis data directly to unblock users was faster than fixing the SMTP config. Sometimes operational workarounds are the right call."
                    />
                </div>
            </div>
        </section>
    );
}

function LessonCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
}) {
    return (
        <div className="rounded-2xl border border-gray-100 bg-white/80 p-5 backdrop-blur-sm">
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                {icon}
            </div>
            <h3 className="text-sm font-semibold text-foreground mb-1">{title}</h3>
            <p className="text-xs text-foreground/60 leading-relaxed">{description}</p>
        </div>
    );
}

function BackButton() {
    return (
        <section className="w-full bg-white py-12 px-4">
            <div className="mx-auto w-full max-w-4xl text-center">
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-foreground text-background hover:bg-foreground/90 transition"
                >
                    ← Back to all projects
                </Link>
            </div>
        </section>
    );
}
