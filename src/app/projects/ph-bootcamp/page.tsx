import {
    BookOpen,
    Bug,
    CreditCard,
    Database,
    HardDrive,
    MessageSquare,
    QrCode,
    Shield,
    Users,
    Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbsJsonLd from "@/components/Breadcrumbs";
import CodeSnippet from "@/components/ui/CodeSnippet";
import EvidenceImage from "@/components/ui/EvidenceImage";
import MermaidDiagram from "@/components/ui/MermaidDiagram";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.samiulalimsaad.com";

const pageTitle = "PH Bootcamp Platform: Full-Stack LMS | Case Study";
const pageDescription =
    "Full-stack learning management system with DRM video, bKash payments, QR attendance, ABAC authorization, and 85 automated tests.";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: "/projects/ph-bootcamp",
    },
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: "/projects/ph-bootcamp",
        siteName: "Samiul Alim",
        images: [
            {
                url: "/evidence/bootcamp-statistics.png",
                width: 1541,
                height: 537,
                alt: "Bootcamp platform statistics dashboard",
            },
        ],
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: pageDescription,
        images: ["/evidence/bootcamp-statistics.png"],
    },
};

export default function PHBootcampCaseStudy() {
    return (
        <>
            <BreadcrumbsJsonLd
                items={[
                    { name: "Home", href: siteUrl },
                    { name: "Projects", href: `${siteUrl}/projects` },
                    { name: "PH Bootcamp", href: `${siteUrl}/projects/ph-bootcamp` },
                ]}
            />
            <HeroSection />
            <ExecutiveSummary />
            <OwnershipSection />
            <ArchitectureDiagram />
            <KeyFeatures />
            <TechnicalDecisions />
            <MetricsSection />
            <PaymentIdempotency />
            <DatabaseDesign />
            <TradeOffs />
            <FailureModes />
            <ObservabilitySection />
            <TestingSection />
            <LessonsLearned />
            <EvidenceSection />
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
                    Production: 13,820+ leads, 898+ active users
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        PH Bootcamp Platform
                    </span>
                </h1>
                <p className="text-lg sm:text-xl text-foreground/70 mb-2">
                    Full-Stack LMS with DRM, Payments & QR
                </p>
                <p className="text-sm text-foreground/50 max-w-2xl mx-auto mb-6">
                    Production learning management system with DRM-protected video delivery, bKash
                    tokenized checkout, QR code attendance tracking, ABAC authorization, and an
                    append-only activity audit log, serving 13,820+ leads and 898+ active users.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {[
                        "TypeScript",
                        "Express",
                        "MongoDB",
                        "Redis",
                        "bKash",
                        "Docker",
                        "React 19",
                        "Vitest",
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
                    <a
                        href="https://bootcamp.programming-hero.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-linear-to-r from-cyan-500 to-indigo-500 text-white hover:from-cyan-600 hover:to-indigo-600 transition"
                    >
                        Live Demo ↗
                    </a>
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
                        icon={<Users className="w-5 h-5" />}
                        value="13,820+"
                        label="Total leads captured"
                    />
                    <SummaryCard
                        icon={<HardDrive className="w-5 h-5" />}
                        value="898+"
                        label="Active users observed"
                    />
                    <SummaryCard
                        icon={<Zap className="w-5 h-5" />}
                        value="85"
                        label="Automated tests (35 + 50)"
                    />
                </div>
                <p className="text-base text-foreground/80 leading-relaxed">
                    A full-stack learning management system handling course delivery, event
                    registration with bKash payments, DRM-protected video streaming, QR code
                    attendance tracking, WhatsApp group management, and bootcamp lead capture. The
                    backend is Express.js + TypeScript with MongoDB, Redis caching (13
                    domain-specific adapters), and ABAC authorization. The frontend is React 19 +
                    TanStack Router + Zustand + shadcn/ui with strict 3-layer architecture (Service
                    → Hook → Component).
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
        subgraph Frontend["Frontend (React 19 + TanStack Router)"]
            A[SPA with Zustand + shadcn/ui]
            B[TanStack Query: Service → Hook → Component]
        end

        subgraph Backend["Backend (Express.js + TypeScript)"]
            C[REST API: 17 Route Groups]
            D[ABAC Middleware: 5 Roles]
            E[Controller → Service → Model]
        end

        subgraph Storage
            F[(MongoDB: 18 Models)]
            G[(Redis: 13 Cache Adapters)]
        end

        subgraph External["External Services"]
            H[bKash Tokenized Checkout]
            I[DRM Video API: IP Restrictions]
            J[Auth Service: Cookie SSO]
            K[Bunny CDN: Video Storage]
        end

        A --> B
        B --> C
        C --> D
        D --> E
        E --> F
        E --> G
        E --> H
        E --> I
        E --> J
        E --> K`;

    const bKashFlow = `sequenceDiagram
        participant U as User
        participant B as Backend
        participant BK as bKash API
        participant R as Redis Cache

        U->>B: Initiate payment
        B->>B: Create EventPayment (status: initiated)
        B->>BK: POST /checkout/payment/create
        BK-->>B: Checkout session URL
        B-->>U: Redirect to bKash

        U->>BK: Approves payment on bKash
        BK->>B: Callback with paymentID
        B->>BK: POST /checkout/payment/execute/{paymentID}
        BK-->>B: Transaction verified
        B->>B: Update status → success, generate ticket
        B-->>U: Redirect to success page

        Note over B,R: Grant token cached in Redis for 55 min`;
    return (
        <section className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">Architecture</h2>
                <MermaidDiagram
                    chart={flowDiagram}
                    caption="Full-stack architecture: React SPA → Express API → MongoDB/Redis → external payment and video services"
                />
                <h3 className="text-lg font-semibold text-foreground mb-4 mt-8">
                    bKash Payment Flow
                </h3>
                <MermaidDiagram
                    chart={bKashFlow}
                    caption="Tokenized checkout flow with idempotency guards and Redis-cached grant tokens"
                />
            </div>
        </section>
    );
}

function KeyFeatures() {
    const features = [
        {
            icon: <BookOpen className="w-5 h-5" />,
            title: "Course Management",
            description:
                "Full course lifecycle: milestones → modules → units (video/assignment/post). Course outlines, backup snapshots, enrollment with level-based restrictions, and per-user progress tracking.",
        },
        {
            icon: <CreditCard className="w-5 h-5" />,
            title: "bKash Tokenized Checkout",
            description:
                "Full bKash integration: grant token (cached 55min), create → execute → query payment flow with idempotency guards, duplicate transaction detection, and admin verification with audit trail.",
        },
        {
            icon: <Shield className="w-5 h-5" />,
            title: "ABAC Authorization",
            description:
                "Attribute-Based Access Control with 5 roles (super_admin, admin, editor, qr, student) across 13 resource types. Hierarchical permissions: super_admin bypasses all checks, admin includes editor + qr.",
        },
        {
            icon: <HardDrive className="w-5 h-5" />,
            title: "DRM-Protected Video",
            description:
                "Token-based video access via external DRM API with IP-based restrictions, video status checking, and DRM token caching to minimize external API calls.",
        },
        {
            icon: <QrCode className="w-5 h-5" />,
            title: "QR Code System",
            description:
                "Nanoid-generated short IDs for QR codes. Contact QRs (vCard-style), scan logging with device/IP/user-agent tracking, and rate limiting (25 scans per 10 minutes per IP).",
        },
        {
            icon: <MessageSquare className="w-5 h-5" />,
            title: "WhatsApp Groups & Events",
            description:
                "WhatsApp group management with rotating invite links and max join counts. Full event lifecycle (hackathons/workshops) with registration, dynamic forms, capacity limits, and CSV export.",
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
            title: "ABAC over RBAC",
            context:
                "Simple role-permission matrices don't scale when you have 5 roles across 13 resource types with inherited permissions (admin includes editor + qr). Adding a new resource requires updating every role.",
            outcome:
                "ABAC with hierarchical grantAccess middleware: each role defines (action, resource) pairs. super_admin bypasses all checks. Admin = mergePermissions(editor, qr, additional grants). Adding a new resource requires one permission definition file.",
            icon: <Shield className="w-5 h-5" />,
            snippet: `// Hierarchical ABAC: each role defines (action, resource) pairs.
// super_admin bypasses all checks.
const rolePermissions: Record<Role, Permission[]> = {
    super_admin: [{ action: "*", resource: "*" }],
    admin: mergePermissions(editorPerms, qrPerms, [
        { action: "manage", resource: "payments" },
    ]),
    editor: [{ action: "create", resource: "course" },
             { action: "update", resource: "content" }],
    qr: [{ action: "scan", resource: "attendance" }],
    student: [{ action: "read", resource: "course" }],
}

function grantAccess(role: Role, action: string, resource: string): boolean {
    const perms = rolePermissions[role]
    if (perms.some(p => p.action === "*")) return true
    return perms.some(p => p.action === action && p.resource === resource)
}`,
            language: "typescript",
        },
        {
            title: "Redis Cache with 13 Domain Adapters",
            context:
                "Read-heavy endpoints (courses, enrollments, dashboard, QR codes, analytics) hit MongoDB repeatedly. Each domain has different access patterns and freshness requirements.",
            outcome:
                "13 domain-specific cache adapters with per-layer TTLs: QR codes (1hr), enrollments (1hr), courses (30min), units (2min), bKash tokens (55min), analytics (5-10min). Versioned key names (v1) for safe schema migrations. Feature flags per layer enable/disable caching independently.",
            icon: <Database className="w-5 h-5" />,
        },
        {
            title: "bKash Tokenized Checkout",
            context:
                "bKash is the dominant payment method in Bangladesh. The tokenized checkout flow requires: grant token → create payment → user approves on bKash → execute payment → query for verification.",
            outcome:
                "Full integration with idempotency guards (prevents double-processing), duplicate transaction ID detection, rate limiting (1 attempt/min/user+event), and admin verification API. Grant token cached in Redis for 55 minutes to avoid re-authentication.",
            icon: <CreditCard className="w-5 h-5" />,
        },
        {
            title: "Activity Audit Log with Non-Blocking Writes",
            context:
                "Audit logging must capture before/after diffs for compliance but cannot block request handling. Writing to MongoDB synchronously adds latency to every mutation.",
            outcome:
                "Append-only immutable audit events written via setImmediate (fire-and-forget). Secret auto-redaction (passwords, tokens, OTPs). Graceful shutdown drain ensures pending logs are flushed before process exit.",
            icon: <Zap className="w-5 h-5" />,
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
                    <MetricCard label="Total Leads" value="13,820+" />
                    <MetricCard label="Active Users" value="898+" />
                    <MetricCard label="Backend Tests" value="35" />
                    <MetricCard label="Frontend Tests" value="50" />
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

function PaymentIdempotency() {
    return (
        <section className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                    Payment Idempotency: bKash Tokenized Checkout
                </h2>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                    Money flows must never double-charge a student, even when a user double-submits,
                    a network request retries, or bKash's server behaves non-deterministically. The
                    bKash tokenized flow has four hops grant token, create payment, execute, query
                    each of which can fail or be retried. The design below is how the system stays
                    consistent across retries.
                </p>

                <div className="rounded-2xl border border-gray-100 bg-white/80 p-6 backdrop-blur-sm mb-6">
                    <h3 className="text-base font-semibold text-foreground mb-4">
                        The four state transitions and their failure points
                    </h3>
                    <MermaidDiagram
                        chart={`graph LR
                            A[Grant token] -->|1| B[Create payment]
                            B -->|2| C[User approves on bKash]
                            C -->|3| D[Execute payment]
                            D -->|4| E[Query verification]
                            A -.fail.-> A2[Redis: token cached 55min]
                            B -.retry-safe.-> B2[Idempotency: same merchantInvoiceNumber]
                            D -.retry-safe.-> D2[Execute is idempotent by txn ID]
                            E -.result.-> F[Mark enrollment paid]`}
                        caption="Four-hop tokenized flow; retry-safety is guaranteed at create and execute steps"
                    />
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white/80 p-6 backdrop-blur-sm mb-6">
                    <h3 className="text-base font-semibold text-foreground mb-4">
                        Idempotency guards
                    </h3>
                    <div className="space-y-3">
                        <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-4">
                            <div className="text-sm font-semibold text-indigo-700 mb-1">
                                Unique merchantInvoiceNumber per payment
                            </div>
                            <p className="text-xs text-foreground/70">
                                Generated once per enrollment, persisted, and reused on every retry
                                of the same checkout. If the create step is retried, bKash sees the
                                same invoice number and returns the existing payment instead of
                                creating a duplicate.
                            </p>
                        </div>
                        <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-4">
                            <div className="text-sm font-semibold text-indigo-700 mb-1">
                                Duplicate transaction ID detection
                            </div>
                            <p className="text-xs text-foreground/70">
                                On webhook and query responses, the transaction ID is checked
                                against already-processed payments before any state mutation. A
                                repeat notification for an already-marked-paid enrollment is a
                                no-op, not a second charge.
                            </p>
                        </div>
                        <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-4">
                            <div className="text-sm font-semibold text-indigo-700 mb-1">
                                Rate limit: 1 attempt/min/user+event
                            </div>
                            <p className="text-xs text-foreground/70">
                                A per-user, per-event attempt limiter stops automated double-submits
                                and brute-force retries at the boundary before they reach bKash.
                            </p>
                        </div>
                        <div className="rounded-xl border border-indigo-100 bg-indigo-50/50 p-4">
                            <div className="text-sm font-semibold text-indigo-700 mb-1">
                                Grant token cached in Redis (55 min TTL)
                            </div>
                            <p className="text-xs text-foreground/70">
                                Re-uses a valid bKash token across payments instead of
                                re-authenticating on every checkout, cutting latency and avoiding
                                rate-limit friction with the provider.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="rounded-2xl border border-amber-100 bg-amber-50/50 p-6">
                    <h3 className="text-base font-semibold text-amber-800 mb-2">Trade-off</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                        Tokenized checkout is slower than one-step payment links (extra
                        user-approval hop) but keeps cards/accounts off our servers and is the
                        standard bKash integration. The cost is more states to manage which is
                        exactly why the idempotency layer exists. A distributed lock or unique DB
                        index would add a second guard at the data layer; we rely on the
                        application-level guard plus the rate limiter today.
                    </p>
                </div>
            </div>
        </section>
    );
}

function DatabaseDesign() {
    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">Database Design</h2>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                    MongoDB is the primary store. The non-obvious decisions are about write
                    patterns, freshness, and how read-heavy paths avoid expensive queries.
                </p>

                <div className="rounded-2xl border border-gray-100 bg-white/80 p-6 backdrop-blur-sm mb-6">
                    <h3 className="text-base font-semibold text-foreground mb-2">
                        Read-heavy hot paths are materialized or cached, not aggregated per request
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                        Analytics dashboards, leaderboards, and enrollment counts are the hottest
                        reads. Recomputing them from source documents on every request burns CPU and
                        creates locking contention. The platform instead maintains denormalized
                        counters and snapshots that are updated on write and served on read, with
                        the per-domain Redis adapters (30min courses, 5-10min analytics) absorbing
                        the rest. This keeps p95 read latency flat as the lead volume grows.
                    </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white/80 p-6 backdrop-blur-sm mb-6">
                    <h3 className="text-base font-semibold text-foreground mb-2">
                        Append-only audit log, secret auto-redaction
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                        The activity log is immutable by design: events are inserted, never updated,
                        and carry a before/after diff. Passwords, tokens, and OTPs are redacted
                        before write so secrets never land in the log. Writes are fire-and-forget
                        (non-blocking) with a graceful-shutdown drain so the last few events survive
                        process restarts.
                    </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white/80 p-6">
                    <h3 className="text-base font-semibold text-foreground mb-2">
                        Versioned cache keys for safe schema evolution
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                        Every cache adapter namespaces its keys with a version (v1) so a schema
                        change or cache-payload change can invalidate cleanly by bumping the version
                        no cross-version deserialization bugs, no manual flush choreography.
                    </p>
                </div>
            </div>
        </section>
    );
}

function TradeOffs() {
    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">Trade-offs</h2>
                <div className="space-y-4">
                    <TradeOffCard
                        decision="ABAC vs simple RBAC"
                        pro="Granular permission checks scale with resources. Adding a new resource requires one permission definition."
                        con="More complex to reason about. Hierarchical grants can produce unexpected permission combinations."
                    />
                    <TradeOffCard
                        decision="13 Redis cache adapters vs single cache layer"
                        pro="Per-domain TTLs match access patterns. QR codes cached for 1hr, units for 2min. Feature flags enable/disable independently."
                        con="More code to maintain. Cache invalidation logic duplicated across adapters. Risk of stale data if TTLs are wrong."
                    />
                    <TradeOffCard
                        decision="DRM video protection vs direct streaming"
                        pro="Prevents unauthorized video sharing. IP-based access control adds a second auth layer."
                        con="Adds latency to video start. DRM token caching is required but creates a window for unauthorized access."
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
                        scenario="bKash payment timeout"
                        impact="Payment initiated but callback never arrives. User charged but registration incomplete."
                        mitigation="Idempotency key prevents double-processing on retry. Query API checks transaction status. Admin verification endpoint for manual reconciliation."
                    />
                    <FailureModeCard
                        scenario="DRM token expiry"
                        impact="Video playback fails mid-session. Student loses access to content they paid for."
                        mitigation="DRM tokens cached with shorter TTL than expiry window. Re-request with cached credentials on first playback error. Fallback: manual token refresh via admin."
                    />
                    <FailureModeCard
                        scenario="Redis cache stampede"
                        impact="Popular course details hit MongoDB simultaneously when TTL expires. Database overload."
                        mitigation="TTL jitter (±10% randomness) prevents synchronized expiry. Feature flags can disable caching per domain instantly."
                    />
                    <FailureModeCard
                        scenario="QR scan abuse"
                        impact="Automated scripts scanning QR codes to harvest attendance data or generate fake check-ins."
                        mitigation="Rate limiting: 25 scans per 10 minutes per IP. Scan lock mechanism prevents concurrent scans. Device/IP/user-agent logging for audit trail."
                    />
                    <FailureModeCard
                        scenario="Activity log write failure"
                        impact="Audit trail loses events. Compliance gap for production mutations."
                        mitigation="Non-blocking writes via setImmediate: log failures don't affect request handling. Graceful shutdown drain ensures pending logs are flushed before process exit."
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
                            "Pino structured JSON logs with request IDs (x-request-id header)",
                            "Automatic secret redaction: passwords, tokens, OTPs stripped from logs",
                            "HTTP request logging with status-based log levels (error ≥500, warn ≥400)",
                        ]}
                    />
                    <ObservabilityCard
                        title="Cache & Performance"
                        items={[
                            "13 domain-specific Redis cache adapters with per-layer feature flags",
                            "Cache hit/miss tracking per route for TTL tuning",
                            "Health endpoint: GET /health → { status: 'ok', version: '...' }",
                        ]}
                    />
                    <ObservabilityCard
                        title="Alerting"
                        items={[
                            "Discord webhook alerts via Uptime Kuma for service downtime",
                            "Rate limit violations logged with IP and user context",
                            "bKash payment failure tracking with admin notification",
                        ]}
                    />
                    <ObservabilityCard
                        title="Audit Trail"
                        items={[
                            "Append-only activity log with actor tracking (id, name, email, role)",
                            "Before/after diffs for all mutations via microdiff",
                            "Correlation IDs for request tracing across API → service → model layers",
                        ]}
                    />
                </div>
                <EvidenceImage
                    src="/evidence/monitoring-alert.png"
                    alt="Discord monitoring alert showing service downtime detection"
                    caption="Real-time monitoring: Uptime Kuma Discord integration for service health alerts"
                    width={468}
                    height={388}
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
                        level="Backend Unit Tests: 35 Vitest tests"
                        scope="Services and utils: enrollment, analytics (5 sub-services), bKash payment, activity log, QR codes, sessions, courses, forms, assignments, WhatsApp groups"
                        approach="Vitest with mocked Mongoose queries and Redis stubs. External APIs (bKash, video DRM, auth service) mocked via vi.mock('axios'). Fake timers for date-dependent logic. No database connections in tests."
                    />
                    <TestingCard
                        level="Frontend Tests: 50 Vitest tests"
                        scope="7 integration tests (auth/RBAC, enrollment, course management, course player, assignment review, bootcamp leads, QR management), 15 hook tests, 12 service tests, 3 store tests, 4 utility tests, 3 component tests, 2 permission tests"
                        approach="Vitest + MSW (Mock Service Worker) for HTTP mocking. Testing Library for React component rendering. Test factories and auth helpers for consistent test data. CI runs on every push via GitHub Actions."
                    />
                    <TestingCard
                        level="CI/CD Pipeline"
                        scope="Push/PR to staging → lint → typecheck → test → build. Release-please for automated versioning."
                        approach="GitHub Actions with pnpm, Node.js 24. Docker multi-stage build for backend (production replicas with health checks). Cloudflare Pages for frontend deployment."
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

function LessonsLearned() {
    return (
        <section className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">What I Learned</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <LessonCard
                        icon={<Shield className="w-5 h-5" />}
                        title="ABAC Prevents Permission Sprawl"
                        description="Attribute-based checks scale better than role-permission matrices. Adding a new resource requires one permission definition, not updating every role."
                    />
                    <LessonCard
                        icon={<Zap className="w-5 h-5" />}
                        title="Non-Blocking Audit Logs"
                        description="setImmediate prevents activity logging from blocking request handling. Fire-and-forget with graceful shutdown drain is the right pattern for audit trails."
                    />
                    <LessonCard
                        icon={<CreditCard className="w-5 h-5" />}
                        title="bKash Needs Idempotency"
                        description="Duplicate transactions happen. State machines with idempotency keys prevent double-processing. Redis-cached grant tokens avoid re-authentication on every request."
                    />
                    <LessonCard
                        icon={<Database className="w-5 h-5" />}
                        title="Cache Adapters > Global Cache"
                        description="13 domain-specific cache adapters with per-layer TTLs outperform a single global cache. Each domain has different freshness requirements. Units need 2min, courses need 30min."
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

function EvidenceSection() {
    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">Evidence</h2>
                <EvidenceImage
                    src="/evidence/bootcamp-statistics.png"
                    alt="Bootcamp admin dashboard showing 13,820 total leads filtered by bootcamp-course category"
                    caption="Admin dashboard: 13,820 total leads captured across multiple courses with lead-per-day trend visualization"
                    width={1541}
                    height={537}
                />
                <EvidenceImage
                    src="/evidence/bootcamp-active-users.png"
                    alt="Bootcamp admin dashboard showing 898 active users with session data"
                    caption="Active users panel: 898 active users with session tracking and unique-users-per-day chart (263 days of data)"
                    width={501}
                    height={202}
                />
            </div>
        </section>
    );
}

function OwnershipSection() {
    const ownership = [
        {
            title: "Backend ownership",
            description:
                "Designed and built the Express + TypeScript API: ABAC authorization, bKash tokenized checkout with idempotency, DRM video delivery, QR attendance, and the audit log.",
        },
        {
            title: "Full-stack delivery",
            description:
                "Built the React 19 frontend with a strict Service → Hook → Component architecture, plus the 50-test MSW-based frontend suite.",
        },
        {
            title: "Testing & reliability",
            description:
                "Owned the 85-test suite and production monitoring: rate limiting abuse control, cache-adaptor design, non-blocking audit writes, and failure-mode planning.",
        },
        {
            title: "Operations",
            description:
                "Deployment and runtime maintenance through a versioned CI/CD pipeline, with 24/7 alerting on service health and payment failures.",
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
                        This is an open-source production system. The details above reflect actual
                        development work. Evidence available:
                    </p>
                    <ul className="space-y-2 text-sm text-foreground/70">
                        <li className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                            Live platform:{" "}
                            <a
                                href="https://bootcamp.programming-hero.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-indigo-600 hover:text-indigo-800"
                            >
                                bootcamp.programming-hero.com
                            </a>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                            OpenAPI 3.0 specification (3,163 lines) with Redocly-generated docs
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                            85 automated tests: 35 Vitest backend + 50 Vitest frontend
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                            GitHub CI/CD pipeline with automated releases via release-please
                        </li>
                    </ul>
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
