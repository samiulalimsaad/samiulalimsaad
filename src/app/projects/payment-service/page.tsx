import {
    BookOpen,
    Bug,
    CreditCard,
    Database,
    GitBranch,
    HardDrive,
    RefreshCw,
    Server,
    Shield,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbsJsonLd from "@/components/Breadcrumbs";
import CodeSnippet from "@/components/ui/CodeSnippet";
import MermaidDiagram from "@/components/ui/MermaidDiagram";
import { SITE_URL as siteUrl } from "@/lib/site";

const pageTitle = "Payment Service: Multi-Gateway Payment Platform | Case Study";
const pageDescription =
    "Centralized payment service for Stripe, bKash, and SSLCommerz. OpenAPI-defined Go API with checkout, payment tracking, orders, refunds, and an admin dashboard.";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: "/projects/payment-service",
    },
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: "/projects/payment-service",
        siteName: "Samiul Alim",
        images: [
            {
                url: "/avatars/samiul-alim-og.png",
                width: 600,
                height: 600,
                alt: "Samiul Alim, backend-focused full-stack software engineer",
            },
        ],
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: pageDescription,
        images: ["/avatars/samiul-alim-og.png"],
    },
};

export default function PaymentServiceCaseStudy() {
    return (
        <>
            <BreadcrumbsJsonLd
                items={[
                    { name: "Home", href: siteUrl },
                    { name: "Projects", href: `${siteUrl}/projects` },
                    { name: "Payment Service", href: `${siteUrl}/projects/payment-service` },
                ]}
            />
            <HeroSection />
            <ExecutiveSummary />
            <ArchitectureDiagram />
            <KeyFeatures />
            <TechnicalDecisions />
            <MetricsSection />
            <TradeOffs />
            <FailureModes />
            <ObservabilitySection />
            <TestingSection />
            <LessonsLearned />
            <RelatedPatterns />
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
                    A centralized payment service for checkout, payment tracking, order management,
                    and refund operations across multiple gateways.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {[
                        "Go",
                        "PostgreSQL",
                        "Redis",
                        "ClickHouse",
                        "Stripe",
                        "bKash",
                        "SSLCommerz",
                    ].map((t) => (
                        <span
                            key={t}
                            className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 ring-1 ring-cyan-100"
                        >
                            {t}
                        </span>
                    ))}
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
                        value="Go API"
                        label="Service layer"
                    />
                    <SummaryCard
                        icon={<Server className="w-5 h-5" />}
                        value="In Development"
                        label="Status"
                    />
                </div>
                <p className="text-base text-foreground/80 leading-relaxed">
                    A centralized payment service that gives education products one checkout and
                    payment-management surface across Stripe, bKash, and SSLCommerz. The service
                    exposes OpenAPI-defined Go endpoints for payments, orders, products, users,
                    organizations, and refunds, backed by PostgreSQL with Redis integration and a
                    Nuxt administration dashboard.
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
        subgraph API
            A[Unified Payment API - Go]
        end

        subgraph Adapters
            B[Stripe Adapter]
            C[bKash Adapter]
            D[SSLCommerz Adapter]
        end

        subgraph Core
            E[Payment Lifecycle]
            F[Gateway Callback Handling]
            G[Refund Records]
        end

        subgraph Storage
            H[(PostgreSQL - Transactions)]
            I[(ClickHouse - Analytics)]
            J[(Redis - Cache)]
        end

        A --> B
        A --> C
        A --> D
        B --> E
        C --> E
        D --> E
        E --> F
        E --> G
        E --> H
        E --> I
        E --> J`;

    const callbackDiagram = `sequenceDiagram
         participant G as Payment Gateway
         participant W as Callback Handler
         participant V as Payment Service
         participant D as Database

         G->>W: Payment callback
         W->>V: Validate transaction
         V->>D: Update payment status
         D-->>V: Persisted
         W-->>G: 200 OK`;

    return (
        <section className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">Architecture</h2>
                <MermaidDiagram
                    chart={flowDiagram}
                    caption="System architecture showing adapter pattern with three payment gateway integrations"
                />
                <h3 className="text-lg font-semibold text-foreground mb-4 mt-8">
                    Gateway Callback Flow
                </h3>
                <MermaidDiagram
                    chart={callbackDiagram}
                    caption="Gateway callback flow validating and persisting payment status"
                />
            </div>
        </section>
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
            title: "Gateway Integration Boundaries",
            description:
                "Gateway-specific checkout and callback code is kept separate from payment persistence, allowing provider behavior to evolve without spreading gateway details through the dashboard and API layers.",
        },
        {
            icon: <RefreshCw className="w-5 h-5" />,
            title: "Gateway Callback Processing",
            description:
                "Gateway callbacks are validated and mapped back to local payment records so checkout results update the service's payment status.",
        },
        {
            icon: <Shield className="w-5 h-5" />,
            title: "Payment Lifecycle Tracking",
            description:
                "Payment records track pending, completed, failed, refunded, and cancelled outcomes together with gateway responses and failure reasons.",
        },
        {
            icon: <Database className="w-5 h-5" />,
            title: "Operational Data Separation",
            description:
                "PostgreSQL stores payment and order records, while Redis supports low-latency gateway token access and ClickHouse is available for analytics workloads.",
        },
        {
            icon: <HardDrive className="w-5 h-5" />,
            title: "Refund Management",
            description:
                "Refund records can be created, listed, inspected, updated, and tracked alongside their related payments.",
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
            title: "Adapter Pattern for Gateway Abstraction",
            context:
                "Different payment providers have different APIs, authentication methods, and webhook formats. The system needs to support multiple providers without coupling business logic to any single provider.",
            outcome:
                "Each gateway implements a common adapter interface. Core business logic operates on the interface, not concrete implementations. Adding a new gateway means writing one new adapter.",
            icon: <GitBranch className="w-5 h-5" />,
            snippet: `// PaymentGateway: business logic depends on this interface, never on concrete gateways.
type PaymentGateway interface {
    CreatePayment(ctx context.Context, req PaymentRequest) (*PaymentResult, error)
    VerifyWebhook(payload []byte, signature string) (WebhookEvent, error)
    Refund(ctx context.Context, id string, amount int64) (*RefundResult, error)
}

// StripeAdapter implements PaymentGateway for Stripe.
type StripeAdapter struct {
    client *stripe.Client
}

func (a *StripeAdapter) CreatePayment(ctx context.Context, req PaymentRequest) (*PaymentResult, error) {
    pi, err := a.client.PaymentIntents.New(&stripe.PaymentIntentParams{
        Amount:   stripe.Int64(req.Amount),
        Currency: stripe.String(req.Currency),
    })
    if err != nil {
        return nil, fmt.Errorf("stripe: %w", err)
    }
    return &PaymentResult{
        ExternalID: pi.ID,
        Status:     mapStripeStatus(pi.Status),
    }, nil
}`,
            language: "go",
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
        {
            title: "Payment State Machine",
            context:
                "Payments transition through defined states (pending, completed, failed, refunded). Without guards, invalid transitions can corrupt payment records.",
            outcome:
                "A state machine governs all transitions with guard functions preventing invalid changes. Each transition is logged for audit trail.",
            icon: <GitBranch className="w-5 h-5" />,
            snippet: `// Payment state machine: guards prevent invalid transitions.
var transitions = map[PaymentState][]PaymentState{
    StatePending:   {StateCompleted, StateFailed},
    StateCompleted: {StateRefunded},
    StateFailed:    {},
    StateRefunded:  {},
}

func TransitionPayment(p *Payment, target PaymentState) error {
    for _, s := range transitions[p.Status] {
        if s == target {
            p.Status = target
            p.UpdatedAt = time.Now()
            return nil
        }
    }
    return fmt.Errorf("invalid transition: %s -> %s", p.Status, target)
}`,
            language: "go",
        },
        {
            title: "Idempotent Webhook Processing",
            context:
                "Payment gateways can deliver duplicate webhooks. Processing the same event twice (e.g., charging a user twice) must be prevented.",
            outcome:
                "Idempotency keys with Redis-backed deduplication (24-hour TTL) ensure each event is processed exactly once, with automatic retry for transient failures.",
            icon: <RefreshCw className="w-5 h-5" />,
            snippet: `// WebhookHandler processes gateway callbacks with idempotency protection.
func (h *WebhookHandler) Handle(w http.ResponseWriter, r *http.Request) {
    event, err := h.gateway.VerifyWebhook(r.Body, r.Header.Get("X-Signature"))
    if err != nil {
        http.Error(w, "invalid signature", http.StatusBadRequest)
        return
    }

    // Idempotency check: skip if already processed
    key := "webhook:" + event.ID
    if exists, _ := h.redis.Exists(r.Context(), key).Result(); exists == 1 {
        w.WriteHeader(http.StatusOK)
        return
    }

    if err := h.processEvent(r.Context(), event); err != nil {
        http.Error(w, "processing failed", http.StatusInternalServerError)
        return
    }

    // Mark as processed (TTL matches provider retry window)
    h.redis.Set(r.Context(), key, "1", 24*time.Hour)
    w.WriteHeader(http.StatusOK)
}`,
            language: "go",
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
                    <MetricCard label="Supported Gateways" value="3" />
                    <MetricCard label="Architecture Pattern" value="Adapter" />
                    <MetricCard label="API Spec" value="OpenAPI" />
                    <MetricCard label="Status" value="In Development" />
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

function TradeOffs() {
    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">Trade-offs</h2>
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
                        icon={<GitBranch className="w-5 h-5" />}
                        title="Adapters Decouple Everything"
                        description="The adapter pattern makes adding a new payment gateway a contained task: implement the interface, write tests, and deploy."
                    />
                    <LessonCard
                        icon={<Shield className="w-5 h-5" />}
                        title="Payment Idempotency Is Non-Negotiable"
                        description="Webhook handlers must be idempotent: duplicate events happen and processing them twice means charging customers twice."
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
                        scenario="Gateway Timeout / Unreachable"
                        impact="Payment processing fails, user sees error"
                        mitigation="Retry with exponential backoff for transient failures. Circuit breaker pattern prevents cascading retries to unhealthy gateways. Alert on persistent gateway unavailability."
                    />
                    <FailureModeCard
                        scenario="Webhook Signature Mismatch"
                        impact="Legitimate payment event not processed"
                        mitigation="Failed signature verification logs full payload for manual review. Automatic retry from gateway (most gateways retry webhooks for 24-72 hours). Dashboard for manual reconciliation."
                    />
                    <FailureModeCard
                        scenario="Duplicate Webhook Delivery"
                        impact="Same event processed twice, potential double charge"
                        mitigation="Idempotency keys with idempotency store in Redis. Duplicate events return cached response. State machine prevents invalid transitions (e.g., completing an already-completed payment)."
                    />
                    <FailureModeCard
                        scenario="Database Transaction Failure"
                        impact="Payment state inconsistent between gateway and local storage"
                        mitigation="Write-ahead logging for payment events. Reconciliation job periodically compares local state with gateway state. Manual override API for edge cases."
                    />
                    <FailureModeCard
                        scenario="Refund Race Condition"
                        impact="Refund initiated twice for same transaction"
                        mitigation="Refund idempotency via refund IDempotency key. State machine guards prevent double refund. Gateway-side deduplication as last resort."
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
                            "Structured JSON logs with correlation IDs across API, webhook handler, and workers",
                            "Payment lifecycle events logged at INFO: created, completed, failed, refunded",
                            "Webhook payloads logged at DEBUG for troubleshooting signature mismatches",
                        ]}
                    />
                    <ObservabilityCard
                        title="Metrics"
                        items={[
                            "Payment volume, success rate, and gateway latency per provider",
                            "Per-gateway breakdown: transaction count, error rate, p50/p95 latency",
                            "Business metrics: revenue processed, refund rate, dispute rate",
                        ]}
                    />
                    <ObservabilityCard
                        title="Alerting"
                        items={[
                            "Payment success rate drop below threshold",
                            "Gateway latency exceeding p99 SLA",
                            "Webhook processing backlog growing",
                            "Refund rate spike (potential fraud indicator)",
                            "Reconciliation job detects state mismatch",
                        ]}
                    />
                    <ObservabilityCard
                        title="Monitoring"
                        items={[
                            "Discord webhook alerts for service downtime via Uptime Kuma",
                            "Per-gateway health and latency overview",
                            "Transaction trends: hourly, daily, weekly aggregates",
                            "Refund and dispute tracking",
                        ]}
                    />
                </div>
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
                        scope="Individual adapters, state machine transitions, webhook signature verification"
                        approach="Vitest with mocked gateway HTTP clients. Tests cover: adapter interface compliance, invalid state transitions, malformed webhook payloads, signature verification edge cases."
                    />
                    <TestingCard
                        level="Integration Tests"
                        scope="API endpoints with real database, webhook processing pipeline"
                        approach="Testcontainers for PostgreSQL and Redis in CI. Tests verify: payment lifecycle through all states, webhook delivery with real signature verification, idempotency across duplicate events."
                    />
                    <TestingCard
                        level="E2E Tests"
                        scope="Full payment flow: initiate → gateway redirect → webhook → completion"
                        approach="Gateway sandbox environments for Stripe, bKash, and SSLCommerz. Tests cover: successful payment, failed payment, refund flow, dispute handling."
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

function RelatedPatterns() {
    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">Related Patterns</h2>
                <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-6 backdrop-blur-sm">
                    <div className="flex items-start gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                            <BookOpen className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="text-base font-semibold text-foreground mb-1">
                                Payment Gateway Adapter Pattern
                            </h3>
                            <p className="text-sm text-foreground/70 mb-3">
                                A deep dive into the adapter pattern used for this project.
                                abstracting multiple payment gateways behind a unified interface.
                            </p>
                            <Link
                                href="/gists/payment-gateway-adapter"
                                className="inline-flex items-center text-sm font-semibold text-cyan-700 hover:text-indigo-700"
                            >
                                Read the full gist →
                            </Link>
                        </div>
                    </div>
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
                            Transaction volume reports and gateway integration docs
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
