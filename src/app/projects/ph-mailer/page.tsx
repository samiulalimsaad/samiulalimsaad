import {
    AlertTriangle,
    BarChart3,
    Bug,
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
import type { Metadata } from "next";
import Link from "next/link";
import MermaidDiagram from "@/components/ui/MermaidDiagram";

export const metadata: Metadata = {
    title: "PH Mailer — Centralized Email Platform | Case Study",
    description:
        "Production email platform serving 100K+ emails/day across 5 internal product teams. Queue-based architecture with BullMQ, Redis, and AWS SES.",
};

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
            <FailureModes />
            <ObservabilitySection />
            <TestingSection />
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
    const flowDiagram = `graph TD
        subgraph Clients
            A[Product Teams]
            B[Internal Services]
        end

        subgraph API
            C[REST API - Node.js]
        end

        subgraph Queue
            D[(Redis - BullMQ)]
            E[Job Queue]
        end

        subgraph Workers
            F[Worker Process]
            G[Rate Limiter]
        end

        subgraph Delivery
            H[AWS SES]
            I[Plunk API]
        end

        subgraph Storage
            J[(PostgreSQL)]
            K[(Redis Cache)]
        end

        A --> C
        B --> C
        C --> E
        E --> D
        D --> F
        F --> G
        G --> H
        G --> I
        F --> J
        F --> K`;

    const retryDiagram = `graph LR
        A[Failed Delivery] --> B{Retry?}
        B -->|Yes| C[Exponential Backoff]
        C --> D[Re-queue]
        D --> A
        B -->|Max Retries| E[Dead Letter Queue]
        E --> F[Manual Review]
        F --> G[Re-process or Discard]`;

    return (
        <section className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                    Architecture
                </h2>
                <MermaidDiagram
                    chart={flowDiagram}
                    caption="High-level system architecture showing request flow from clients through queue to delivery"
                />
                <h3 className="text-lg font-semibold text-foreground mb-4 mt-8">
                    Retry & Recovery Flow
                </h3>
                <MermaidDiagram
                    chart={retryDiagram}
                    caption="Delivery failure retry strategy with exponential backoff and dead letter queue"
                />
            </div>
        </section>
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
            title: "Plunk over Self-Hosted SMTP / Pure SES",
            context:
                "Options evaluated: self-hosted Postfix (operational overhead of SPF/DKIM monitoring, IP reputation management), direct AWS SES (template management complexity, sandbox limitations for a small team), and Plunk as a managed layer on top of SES/Postmark.",
            outcome:
                "Chose Plunk for operational simplicity and built-in analytics. Trade-off: at very high volumes (>1M/day), Plunk's per-email cost may exceed direct SES pricing. Planned migration path: move to direct SES if volume exceeds Plunk cost-efficiency threshold while keeping the platform architecture intact.",
            icon: <Server className="w-5 h-5" />,
        },
        {
            title: "BullMQ for Background Jobs",
            context:
                "Email delivery, campaign processing, and workflow execution are I/O-bound operations that shouldn't block API responses. Needed backpressure handling for volume spikes.",
            outcome:
                "Separate worker process processes jobs asynchronously with configurable concurrency and rate limiting. Workers can scale independently from the API server. Queue provides natural backpressure during spikes.",
            icon: <RefreshCw className="w-5 h-5" />,
        },
        {
            title: "Fork over Build from Scratch",
            context:
                "Building a production email platform from scratch would have taken months. An open-source alternative provided a solid foundation with active community maintenance.",
            outcome:
                "Forked an existing platform and added custom integrations while maintaining upstream sync. Fork maintenance cost: monthly merge conflicts and upstream API changes require dedicated sync cycles.",
            icon: <GitBranch className="w-5 h-5" />,
        },
        {
            title: "Separate Worker Process for Fault Isolation",
            context:
                "Background job processing can be resource-intensive and should not degrade API response times. A crash in the worker should not affect API availability.",
            outcome:
                "Worker process runs independently, enabling independent scaling and fault isolation. If the worker crashes, the API server remains unaffected. Monitoring alerts on worker health.",
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
                    <MetricCard label="Internal Products" value="5+" />
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

function FailureModes() {
    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <div className="flex items-center gap-3 mb-8">
                    <Bug className="w-6 h-6 text-red-500" />
                    <h2 className="text-2xl font-bold text-foreground">
                        Failure Modes & Recovery
                    </h2>
                </div>
                <div className="space-y-4">
                    <FailureModeCard
                        scenario="Delivery Provider Quota Exceeded"
                        impact="Emails fail to send, queue backs up"
                        mitigation="Rate limiter dynamically adjusts throughput based on provider health. Queue provides backpressure instead of dropping requests. Alert triggers when queue depth exceeds threshold."
                    />
                    <FailureModeCard
                        scenario="Worker Process Crash"
                        impact="Email processing stops, API stays responsive"
                        mitigation="Process manager auto-restarts worker. Queue preserves unprocessed jobs. Alert on worker process disappearance."
                    />
                    <FailureModeCard
                        scenario="Redis Outage"
                        impact="Queue unavailable, new jobs cannot be enqueued"
                        mitigation="API returns 503 during Redis unavailability. Jobs already in queue are preserved on restart (persistent Redis config). Alert on Redis connectivity loss."
                    />
                    <FailureModeCard
                        scenario="Bounce / Complaint Spike"
                        impact="SES reputation drops, sending quotas reduced"
                        mitigation="Automated bounce processing suppresses repeated bounces. Complaint feedback loop updates suppression list. Dashboard monitors bounce rate trends."
                    />
                    <FailureModeCard
                        scenario="Upstream API Breaking Change (Fork)"
                        impact="Platform features may break during sync"
                        mitigation="Isolate custom code in separate files to reduce merge conflicts. UAT environment validates sync before production. Staged rollouts for upstream updates."
                    />
                </div>
            </div>
        </section>
    );
}

function FailureModeCard({
    scenario,
    impact,
    mitigation,
}: {
    scenario: string;
    impact: string;
    mitigation: string;
}) {
    return (
        <div className="rounded-2xl border border-red-100 bg-white/80 p-5 backdrop-blur-sm">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                    <span className="text-xs font-medium text-red-600">Scenario</span>
                    <p className="text-sm text-foreground font-medium mt-0.5">{scenario}</p>
                </div>
                <div>
                    <span className="text-xs font-medium text-amber-600">Impact</span>
                    <p className="text-sm text-foreground/70 mt-0.5">{impact}</p>
                </div>
                <div>
                    <span className="text-xs font-medium text-emerald-600">Mitigation</span>
                    <p className="text-sm text-foreground/70 mt-0.5">{mitigation}</p>
                </div>
            </div>
        </div>
    );
}

function ObservabilitySection() {
    return (
        <section className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                    Observability & Monitoring
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ObservabilityCard
                        title="Logging"
                        items={[
                            "Structured JSON logs with correlation IDs across API, worker, and queue",
                            "Log levels: debug, info, warn, error — configurable per environment",
                            "Centralized log aggregation for search and alerting",
                        ]}
                    />
                    <ObservabilityCard
                        title="Metrics"
                        items={[
                            "Prometheus-format metrics: delivery rate, queue depth, latency percentiles",
                            "Business metrics: emails sent, delivered, bounced, complained per hour",
                            "Worker health: jobs processed, failure rate, retry count",
                        ]}
                    />
                    <ObservabilityCard
                        title="Alerting"
                        items={[
                            "Queue depth threshold breach",
                            "Delivery failure rate spike",
                            "Worker process disappearance",
                            "Redis / PostgreSQL connectivity loss",
                            "Bounce rate exceeding 2% threshold",
                        ]}
                    />
                    <ObservabilityCard
                        title="Dashboards"
                        items={[
                            "Grafana dashboard for real-time delivery monitoring",
                            "Hourly / daily / weekly delivery trends",
                            "Provider health and quota utilization",
                            "Per-team email volume breakdown",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}

function ObservabilityCard({
    title,
    items,
}: {
    title: string;
    items: string[];
}) {
    return (
        <div className="rounded-2xl border border-gray-100 bg-white/80 p-5 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-foreground mb-3">{title}</h3>
            <ul className="space-y-2">
                {items.map((item, i) => (
                    <li
                        key={i}
                        className="flex items-start gap-2 text-xs text-foreground/70"
                    >
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

function TestingSection() {
    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                    Testing Strategy
                </h2>
                <div className="space-y-4">
                    <TestingCard
                        level="Unit Tests"
                        scope="Individual modules: template rendering, webhook handlers, queue job processors"
                        approach="Vitest with mocked external dependencies. Tests cover edge cases: malformed templates, webhook signature mismatch, queue job serialization errors."
                    />
                    <TestingCard
                        level="Integration Tests"
                        scope="API endpoints with real database, queue interaction with Redis"
                        approach="Testcontainers for PostgreSQL and Redis in CI. Tests verify: email submission → queue → worker → delivery provider mock. Database migrations are tested in isolation."
                    />
                    <TestingCard
                        level="E2E Tests"
                        scope="Critical user flows: password reset, campaign delivery, bounce handling"
                        approach="Full workflow tests in UAT environment with real delivery provider sandbox. Tests cover: template rendering, delivery tracking, bounce feedback loop."
                    />
                </div>
            </div>
        </section>
    );
}

function TestingCard({
    level,
    scope,
    approach,
}: {
    level: string;
    scope: string;
    approach: string;
}) {
    return (
        <div className="rounded-2xl border border-gray-100 bg-white/60 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-2">{level}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <span className="text-xs font-medium text-cyan-600">Scope</span>
                    <p className="text-xs text-foreground/70 mt-0.5">{scope}</p>
                </div>
                <div>
                    <span className="text-xs font-medium text-cyan-600">Approach</span>
                    <p className="text-xs text-foreground/70 mt-0.5">{approach}</p>
                </div>
            </div>
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
