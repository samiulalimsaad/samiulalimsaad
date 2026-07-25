import {
    CreditCard,
    Database,
    GitBranch,
    HardDrive,
    RefreshCw,
    Server,
    Shield,
    Zap,
} from "lucide-react";
import Link from "next/link";

export default function PaymentServiceCaseStudy() {
    return (
        <>
            <HeroSection />
            <ExecutiveSummary />
            <ArchitectureDiagram />
            <KeyFeatures />
            <TechnicalDecisions />
            <MetricsSection />
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
                    In Development
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        Payment Service
                    </span>
                </h1>
                <p className="text-lg sm:text-xl text-foreground/70 mb-2">
                    Unified Multi-Gateway Payment Platform
                </p>
                <p className="text-sm text-foreground/50 max-w-2xl mx-auto mb-6">
                    A centralized payment service abstracting multiple payment
                    gateways behind a unified API, with webhook processing,
                    refund management, and transaction analytics.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {["Go", "PostgreSQL", "Redis", "ClickHouse", "Stripe", "bKash", "SSLCommerz"].map(
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
                        icon={<CreditCard className="w-5 h-5" />}
                        value="3"
                        label="Payment gateways"
                    />
                    <SummaryCard
                        icon={<GitBranch className="w-5 h-5" />}
                        value="Adapter"
                        label="Architecture pattern"
                    />
                    <SummaryCard
                        icon={<Server className="w-5 h-5" />}
                        value="In Development"
                        label="Status"
                    />
                </div>
                <p className="text-base text-foreground/80 leading-relaxed">
                    A centralized payment service that abstracts multiple payment
                    gateways behind a unified API. Built with an adapter pattern
                    that allows adding new payment providers without changing
                    core business logic. Handles payment creation, webhook
                    processing, refund management, and transaction analytics.
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
                            {/* Unified API */}
                            <div className="rounded-xl border border-indigo-200 bg-indigo-50 px-6 py-3 text-center text-sm font-medium text-indigo-700">
                                <div className="font-semibold">Unified Payment API</div>
                                <div className="text-[10px] text-indigo-500/80">
                                    Common interface for all payment operations
                                </div>
                            </div>

                            <ArrowDown />

                            {/* Gateway Adapters */}
                            <div className="flex items-center gap-3">
                                <GatewayAdapter label="Stripe" color="indigo" />
                                <GatewayAdapter label="bKash" color="emerald" />
                                <GatewayAdapter label="SSLCommerz" color="amber" />
                            </div>

                            <ArrowDown />

                            {/* Core Services */}
                            <div className="flex flex-wrap justify-center gap-3">
                                <div className="rounded-xl border border-cyan-200 bg-cyan-50 px-4 py-2 text-center text-sm font-medium text-cyan-700">
                                    Webhook Processor
                                </div>
                                <div className="rounded-xl border border-violet-200 bg-violet-50 px-4 py-2 text-center text-sm font-medium text-violet-700">
                                    Payment State Machine
                                </div>
                                <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-2 text-center text-sm font-medium text-amber-700">
                                    Refund Engine
                                </div>
                            </div>

                            <ArrowDown />

                            {/* Data Stores */}
                            <div className="flex flex-wrap justify-center gap-3">
                                <DataStore label="Transactions" icon={<Database className="w-3.5 h-3.5" />} />
                                <DataStore label="Analytics" icon={<HardDrive className="w-3.5 h-3.5" />} />
                                <DataStore label="Cache" icon={<Zap className="w-3.5 h-3.5" />} />
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

function GatewayAdapter({ label, color }: { label: string; color: string }) {
    const colors: Record<string, string> = {
        indigo: "border-indigo-200 bg-indigo-50 text-indigo-700",
        emerald: "border-emerald-200 bg-emerald-50 text-emerald-700",
        amber: "border-amber-200 bg-amber-50 text-amber-700",
    };
    return (
        <div
            className={`rounded-xl border px-4 py-2 text-center text-sm font-medium ${colors[color] || colors.indigo}`}
        >
            {label}
        </div>
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
            icon: <CreditCard className="w-5 h-5" />,
            title: "Multi-Gateway Support",
            description:
                "Unified interface for Stripe, bKash, and SSLCommerz. New gateways can be added by implementing the adapter interface.",
        },
        {
            icon: <GitBranch className="w-5 h-5" />,
            title: "Gateway Adapter Pattern",
            description:
                "Each payment provider has an adapter implementing a common interface. Core business logic never depends on gateway-specific code.",
        },
        {
            icon: <RefreshCw className="w-5 h-5" />,
            title: "Webhook Processing",
            description:
                "Idempotent webhook handlers with event deduplication and automatic retry for failed notifications.",
        },
        {
            icon: <Shield className="w-5 h-5" />,
            title: "Payment State Machine",
            description:
                "Payments transition through defined states (pending, completed, failed, refunded) with guards against invalid transitions.",
        },
        {
            icon: <Database className="w-5 h-5" />,
            title: "Transaction Analytics",
            description:
                "Columnar database for payment analytics with aggregations by gateway, currency, and time period.",
        },
        {
            icon: <HardDrive className="w-5 h-5" />,
            title: "Refund Management",
            description:
                "Full and partial refund support with provider-specific refund handling and reconciliation.",
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
            title: "Adapter Pattern for Gateway Abstraction",
            context:
                "Different payment providers have different APIs, authentication methods, and webhook formats. The system needs to support multiple providers without coupling business logic to any single provider.",
            outcome:
                "Each gateway implements a common adapter interface. Core business logic operates on the interface, not concrete implementations. Adding a new gateway means writing one new adapter.",
            icon: <GitBranch className="w-5 h-5" />,
        },
        {
            title: "OpenAPI Code Generation",
            context:
                "Payment APIs have strict contract requirements (idempotency keys, request signing, response validation). Hand-written API code is error-prone.",
            outcome:
                "API specification is defined in OpenAPI format. Server and client code are generated from the spec, ensuring request/response contract compliance.",
            icon: <Shield className="w-5 h-5" />,
        },
        {
            title: "Polyglot Persistence for Payments",
            context:
                "Transaction data needs ACID guarantees, analytics queries need aggregation performance, and gateway tokens need low-latency access.",
            outcome:
                "PostgreSQL for transaction records (ACID), a columnar database for analytics (aggregations), and Redis for gateway token caching (low latency).",
            icon: <Database className="w-5 h-5" />,
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
                    <MetricCard label="Supported Gateways" value="3" />
                    <MetricCard label="Architecture Pattern" value="Adapter" />
                    <MetricCard label="API Spec" value="OpenAPI" />
                    <MetricCard label="Status" value="In Development" />
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

function TradeOffs() {
    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                    Trade-offs
                </h2>
                <div className="space-y-4">
                    <TradeOffCard
                        decision="Adapter pattern vs. gateway-specific code"
                        pro="Loose coupling, easy to add new gateways, centralized error handling"
                        con="Abstraction overhead, loss of gateway-specific optimizations, interface design complexity"
                    />
                    <TradeOffCard
                        decision="OpenAPI code generation vs. manual API code"
                        pro="Contract enforcement, type safety, reduced boilerplate"
                        con="Generated code can be verbose, spec drift risk, build-time dependency"
                    />
                    <TradeOffCard
                        decision="Three data stores vs. single database"
                        pro="Each store optimized for its workload pattern"
                        con="Operational complexity, eventual consistency, more infrastructure to manage"
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
                        icon={<GitBranch className="w-5 h-5" />}
                        title="Adapters Decouple Everything"
                        description="The adapter pattern makes adding a new payment gateway a contained task — implement the interface, write tests, and deploy."
                    />
                    <LessonCard
                        icon={<Shield className="w-5 h-5" />}
                        title="Payment Idempotency Is Non-Negotiable"
                        description="Webhook handlers must be idempotent — duplicate events happen and processing them twice means charging customers twice."
                    />
                    <LessonCard
                        icon={<Database className="w-5 h-5" />}
                        title="Match Storage to Access Patterns"
                        description="Transactions need ACID, analytics need columnar storage, and gateway tokens need caching. Using one database for all would compromise on everything."
                    />
                    <LessonCard
                        icon={<RefreshCw className="w-5 h-5" />}
                        title="State Machines Prevent Payment Bugs"
                        description="A payment state machine prevents invalid transitions like refunding an already-refunded payment or completing a failed transaction."
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
