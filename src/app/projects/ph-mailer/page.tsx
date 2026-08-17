import {
    AlertTriangle,
    BarChart3,
    Bug,
    GitBranch,
    Globe,
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
import CodeSnippet from "@/components/ui/CodeSnippet";
import EvidenceImage from "@/components/ui/EvidenceImage";
import MermaidDiagram from "@/components/ui/MermaidDiagram";

export const metadata: Metadata = {
    title: "PH Mailer: Centralized Email Platform | Case Study",
    description:
        "Production email platform: forked Plunk with custom BullMQ worker + Redis queue, delivery via AWS SES. 197K+ emails/week across 5 internal product teams.",
};

export default function PHMailerCaseStudy() {
    return (
        <>
            <HeroSection />
            <ExecutiveSummary />
            <OwnershipSection />
            <ArchitectureDiagram />
            <KeyFeatures />
            <TechnicalDecisions />
            <MetricsSection />
            <OperationsDeepDive />
            <IncidentStory />
            <TradeOffs />
            <FailureModes />
            <ObservabilitySection />
            <TestingSection />
            <LessonsLearned />
            <ReferencesSection />
            <BackButton />
        </>
    );
}

function HeroSection() {
    return (
        <section className="w-full bg-linear-to-b from-sky-50/60 via-white to-indigo-50/60 py-20 px-4 animate-section-in">
            <div className="mx-auto w-full max-w-4xl text-center">
                <span className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600 ring-1 ring-indigo-100 mb-4">
                    Production: 197K+ emails sent (7-day window)
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
                    Production email platform forked from open-source Plunk, extended with a custom
                    BullMQ worker and Redis-backed queue, with delivery routed through AWS SES.
                    Replaced Mailgun for transactional emails, campaigns, and workflow automation.
                    Significant cost reduction vs Mailgun with comparable delivery performance.
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
                        value="197K+"
                        label="Emails sent (7-day window)"
                    />
                    <SummaryCard
                        icon={<Server className="w-5 h-5" />}
                        value="Multiple"
                        label="Internal products served"
                    />
                    <SummaryCard
                        icon={<Shield className="w-5 h-5" />}
                        value="Production"
                        label="Status: Live"
                    />
                </div>
                <p className="text-base text-foreground/80 leading-relaxed">
                    A centralized email platform built on an open-source core to eliminate
                    per-provider costs and unify delivery across multiple product teams. The system
                    handles transactional emails, marketing campaigns, and automated workflows
                    through a queue-based architecture with real-time delivery tracking.
                </p>
                <EvidenceImage
                    src="/evidence/ph-mailer-statistics.png"
                    alt="PH Mailer Plunk dashboard showing 15,496 contacts, 197K+ emails sent, 44.7% open rate"
                    caption="Plunk dashboard: real-time email delivery metrics across product teams (15,496 contacts, 197,294 emails sent, 44.7% open rate)"
                />
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
                <h2 className="text-2xl font-bold text-foreground mb-8">Architecture</h2>
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
                <h2 className="text-2xl font-bold text-foreground mb-8">Key Features</h2>
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
            snippet: `// BullMQ worker with configurable concurrency and rate limiting.
// Workers scale independently from the API server.
const emailQueue = new Queue("email-delivery", {
    connection: redisConfig,
    defaultJobOptions: {
        attempts: 5,
        backoff: { type: "exponential", delay: 1000 },
        removeOnComplete: { count: 1000 },
        removeOnFail: { count: 5000 },
    },
})

const worker = new Worker("email-delivery", processEmailJob, {
    connection: redisConfig,
    concurrency: 10,
    limiter: { max: 100, duration: 1000 },
})

worker.on("failed", (job, err) => {
    logger.error("Email delivery failed", {
        jobId: job.id,
        attempt: job.attemptsMade,
        error: err.message,
    })
})`,
            language: "typescript",
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
        {
            title: "Exponential Backoff with Jitter",
            context:
                "Transient failures (rate limits, provider outages, network blips) are common in email delivery. Naive retries cause thundering herd problems on recovery.",
            outcome:
                "Exponential backoff with random jitter spreads retries across time, preventing thundering herd. Maximum delay capped at 30 seconds with 5 retry attempts.",
            icon: <RefreshCw className="w-5 h-5" />,
            snippet: `// Exponential backoff with jitter: prevents thundering herd on recovery.
async function retryWithBackoff<T>(
    fn: () => Promise<T>,
    opts: { maxAttempts: number; baseDelay: number; maxDelay: number },
): Promise<T> {
    for (let attempt = 0; attempt < opts.maxAttempts; attempt++) {
        try {
            return await fn()
        } catch (err) {
            if (attempt === opts.maxAttempts - 1) throw err
            const delay = Math.min(
                opts.baseDelay * Math.pow(2, attempt) + Math.random() * 1000,
                opts.maxDelay,
            )
            logger.warn("retry after failure", {
                attempt,
                delay,
                error: (err as Error).message,
            })
            await new Promise(r => setTimeout(r, delay))
        }
    }
    throw new Error("unreachable")
}`,
            language: "typescript",
        },
    ];

    return (
        <section className="w-full bg-linear-to-b from-sky-50/60 via-white to-indigo-50/60 py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">Technical Decisions</h2>
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
                                    <p className="text-sm text-foreground/70 mb-2">{d.context}</p>
                                    <p className="text-sm text-indigo-600/80">{d.outcome}</p>
                                    {d.snippet && (
                                        <div className="mt-4">
                                            <CodeSnippet code={d.snippet} language={d.language} />
                                        </div>
                                    )}
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
                <h2 className="text-2xl font-bold text-foreground mb-8">Metrics</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <MetricCard label="Emails Sent (7-day)" value="197,294" />
                    <MetricCard label="Open Rate" value="44.7%" />
                    <MetricCard label="Click Rate" value="8.5%" />
                    <MetricCard label="Send Cost vs Mailgun" value="~50–60% less" />
                </div>
                <div className="mt-6 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
                    <h3 className="text-sm font-semibold text-emerald-800 mb-1">
                        Business impact: delivery cost reduction
                    </h3>
                    <p className="text-xs text-foreground/70 leading-relaxed">
                        Moving transactional, campaign, and workflow email off Mailgun and onto PH
                        Mailer cut email-sending cost by roughly 50–60% at comparable delivery
                        performance. Exact figures are confidential to the organization.
                    </p>
                </div>
            </div>
        </section>
    );
}

function MetricCard({ label, value }: { label: string; value: string }) {
    return (
        <div className="rounded-2xl border border-gray-100 bg-white/60 p-5 text-center">
            <div className="text-lg font-bold text-indigo-600">{value}</div>
            <div className="text-xs text-foreground/60">{label}</div>
        </div>
    );
}

function OperationsDeepDive() {
    const batchStats = [
        { label: "Items processed", value: "48,978" },
        { label: "Sent", value: "48,965" },
        { label: "Exceptions", value: "112" },
        { label: "Bounced", value: "26" },
        { label: "Batch runtime", value: "5m 35s" },
        { label: "Effective throughput", value: "~146 emails/s" },
    ];

    return (
        <section className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">Operations Deep-Dive</h2>

                <div className="rounded-2xl border border-gray-100 bg-white/80 p-6 backdrop-blur-sm mb-6">
                    <h3 className="text-base font-semibold text-foreground mb-2">
                        Throughput from a real batch run
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed mb-4">
                        A monitored batch run processed 48,978 queued items in 5 minutes 35 seconds
                        — roughly 146 emails per second sustained, with 48,965 delivered, 112
                        transient exceptions handled by retry, and 26 bounces routed to the
                        suppression list. These numbers come from the monitoring alert on this page:
                        real production run, not a synthetic load test.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {batchStats.map((s) => (
                            <div
                                key={s.label}
                                className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-3 text-center"
                            >
                                <div className="text-lg font-bold text-indigo-700">{s.value}</div>
                                <div className="text-[11px] text-foreground/60">{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white/80 p-6 backdrop-blur-sm mb-6">
                    <h3 className="text-base font-semibold text-foreground mb-2">
                        Deployment & rollout
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                        Each service runs as a Docker container, deployed through a versioned
                        pipeline: build → test → push image → staged rollout on UAT → health check →
                        rolling update on production, with the previous image retained for instant
                        rollback. UAT validates upstream Plunk syncs before they reach production,
                        which matters because we maintain a fork.
                    </p>
                    <MermaidDiagram
                        chart={`graph LR
                            A[Commit] --> B[CI: lint + test]
                            B --> C[Build image]
                            C --> D[Push to registry]
                            D --> E[Deploy to UAT]
                            E --> F[Health check]
                            F --> G[Rolling update: prod]
                            G -->|fail| H[Rollback to last image]
                            G -->|pass| I[Monitor delivery]`}
                        caption="Versioned deploy pipeline: build → test → image → UAT → health check → rolling update with rollback"
                    />
                </div>

                <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-6 backdrop-blur-sm">
                    <h3 className="text-base font-semibold text-amber-800 mb-2">
                        How batch metrics are captured
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                        The worker logs processed/sent/exception/bounce counters per batch run, and
                        Uptime Kuma surfaces a Discord alert with the summary (shown in the
                        Observability section). This gives a delivery health check on every batch —
                        a spike in exceptions or bounces trips an alert before users notice.
                    </p>
                </div>
            </div>
        </section>
    );
}

function IncidentStory() {
    return (
        <section className="w-full bg-linear-to-b from-amber-50/60 via-white to-amber-50/60 py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <div className="flex items-center gap-3 mb-8">
                    <AlertTriangle className="w-6 h-6 text-amber-600" />
                    <h2 className="text-2xl font-bold text-foreground">
                        Incident Story: Password Reset Failure
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
                        content="This incident highlighted the need for delivery monitoring. Without it, queued emails can silently fail. Added health checks for outbound integrations and configured delivery failure alerts."
                    />
                </div>
            </div>
        </section>
    );
}

function IncidentBlock({ title, content }: { title: string; content: string }) {
    return (
        <div className="rounded-2xl border border-amber-100 bg-white/80 p-5 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-amber-800 mb-1">{title}</h3>
            <p className="text-sm text-foreground/70 leading-relaxed">{content}</p>
        </div>
    );
}

function TradeOffs() {
    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">Trade-offs</h2>
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

function TradeOffCard({ decision, pro, con }: { decision: string; pro: string; con: string }) {
    return (
        <div className="rounded-2xl border border-gray-100 bg-white/60 p-5">
            <h3 className="text-sm font-semibold text-foreground mb-3">{decision}</h3>
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
                <h2 className="text-2xl font-bold text-foreground mb-8">What I Learned</h2>
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
                        description="Maintaining a fork requires discipline: isolating custom code in separate files reduces merge conflicts during upstream sync."
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
                    <h2 className="text-2xl font-bold text-foreground">Failure Modes & Recovery</h2>
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
                            "Log levels: debug, info, warn, error (configurable per environment)",
                            "Centralized log aggregation for search and alerting",
                        ]}
                    />
                    <ObservabilityCard
                        title="Metrics"
                        items={[
                            "Plunk dashboard: delivery rate, open rate, click rate, bounce rate",
                            "Business metrics: emails sent, delivered, bounced, complained per hour",
                            "Worker health: jobs processed, failure rate, retry count",
                        ]}
                    />
                    <ObservabilityCard
                        title="Alerting"
                        items={[
                            "Discord webhook alerts via Uptime Kuma for service downtime",
                            "Delivery failure rate spike notifications",
                            "Worker process disappearance alerts",
                            "Database connectivity loss notifications",
                            "Bounce rate exceeding threshold alerts",
                        ]}
                    />
                    <ObservabilityCard
                        title="Dashboards"
                        items={[
                            "Plunk real-time email activity dashboard",
                            "Hourly / daily / weekly delivery trends",
                            "Per-team email volume breakdown",
                            "Open rate and click rate analytics",
                        ]}
                    />
                </div>
                <EvidenceImage
                    src="/evidence/monitoring-alert.png"
                    alt="Discord monitoring alert showing 48,978 items processed with delivery metrics"
                    caption="Real-time monitoring alert: Uptime Kuma Discord integration showing 48,978 items processed, 48,965 sent, 112 exceptions, 26 bounced (5m 35s batch runtime)"
                />
            </div>
        </section>
    );
}

function ObservabilityCard({ title, items }: { title: string; items: string[] }) {
    return (
        <div className="rounded-2xl border border-gray-100 bg-white/80 p-5 backdrop-blur-sm">
            <h3 className="text-sm font-semibold text-foreground mb-3">{title}</h3>
            <ul className="space-y-2">
                {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-foreground/70">
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
                <h2 className="text-2xl font-bold text-foreground mb-8">Testing Strategy</h2>
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
                    <TestingCard
                        level="Backend Test Suite"
                        scope="Bootcamp platform backend: 35 Vitest unit/service tests covering analytics, enrollment, bKash payments, course management, user services, and activity logging"
                        approach="Vitest with mocked database queries. CI runs on every push via GitHub Actions. Test files: src/services/__tests__/*.test.ts, src/utils/__tests__/*.test.ts"
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

function OwnershipSection() {
    const ownership = [
        {
            title: "Production maintenance",
            description:
                "Run the platform for 5+ product teams: monitoring, delivery health, incident response, and release coordination across services.",
        },
        {
            title: "Feature development",
            description:
                "Extend the Plunk fork with custom capabilities: BullMQ worker, rate limiting, bounce/complaint processing, and delivery failure handling.",
        },
        {
            title: "Cross-team coordination",
            description:
                "Own template management and delivery changes that touch multiple product teams with independent release schedules. Handle upstream sync of the fork.",
        },
        {
            title: "Reliability",
            description:
                "Simplicity, observability, and dependable delivery first — the queue absorbs spikes, retries with backoff, and every failure mode has a defined recovery path.",
        },
    ];

    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">What I Own</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {ownership.map((o) => (
                        <div
                            key={o.title}
                            className="rounded-2xl border border-gray-100 bg-white/60 p-5 hover:border-indigo-100 hover:bg-indigo-50/30 transition"
                        >
                            <h3 className="text-sm font-semibold text-foreground mb-1">
                                {o.title}
                            </h3>
                            <p className="text-xs text-foreground/60 leading-relaxed">
                                {o.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ReferencesSection() {
    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                    References & Verification
                </h2>
                <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-6 backdrop-blur-sm">
                    <p className="text-sm text-foreground/70 mb-4">
                        This is a proprietary production system. The details above reflect my actual
                        work. Additional evidence available upon request:
                    </p>
                    <ul className="space-y-2 text-sm text-foreground/70">
                        <li className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                            Anonymized architecture diagrams and code samples
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                            Dashboard screenshots showing delivery metrics
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                            Manager and teammate references (with consent)
                        </li>
                    </ul>
                    <p className="mt-4 text-xs text-foreground/50">
                        Contact me to arrange verification under NDA.
                    </p>
                </div>
            </div>
        </section>
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
