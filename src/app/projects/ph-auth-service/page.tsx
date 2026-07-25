import {
    Database,
    GitBranch,
    HardDrive,
    Key,
    Lock,
    RefreshCw,
    Search,
    Server,
    Shield,
    Users,
    UserCheck,
    Zap,
} from "lucide-react";
import Link from "next/link";

export default function AuthServiceCaseStudy() {
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
                    In Development — Awaiting Production Release
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        PH Auth Service
                    </span>
                </h1>
                <p className="text-lg sm:text-xl text-foreground/70 mb-2">
                    Multi-Tenant Identity Provider
                </p>
                <p className="text-sm text-foreground/50 max-w-2xl mx-auto mb-6">
                    A production-grade OpenID Connect identity provider with
                    multi-tenant isolation, TOTP-based MFA, device limit
                    enforcement, and defense-in-depth security.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {["Go", "PostgreSQL", "Redis", "ClickHouse", "ZITADEL OIDC", "Prisma"].map(
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
                        icon={<Users className="w-5 h-5" />}
                        value="Multi-Tenant"
                        label="Isolated by organization"
                    />
                    <SummaryCard
                        icon={<Shield className="w-5 h-5" />}
                        value="7 Layers"
                        label="Defense-in-depth security"
                    />
                    <SummaryCard
                        icon={<Server className="w-5 h-5" />}
                        value="In Development"
                        label="Status"
                    />
                </div>
                <p className="text-base text-foreground/80 leading-relaxed">
                    A custom identity provider implementing the OpenID Connect
                    protocol to serve as the centralized authentication layer for
                    an educational platform ecosystem. The system supports
                    multiple tenants with isolated user bases, TOTP-based
                    multi-factor authentication, configurable device limits, and
                    comprehensive audit logging — all behind a defense-in-depth
                    security middleware chain.
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
                            {/* Client Layer */}
                            <div className="flex items-center gap-4">
                                <div className="rounded-xl border border-cyan-200 bg-cyan-50 px-4 py-2 text-center text-sm font-medium text-cyan-700">
                                    Client Applications
                                </div>
                                <Arrow />
                                <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-2 text-center text-sm font-medium text-amber-700">
                                    Security Layer
                                </div>
                            </div>

                            {/* Security Middleware */}
                            <div className="flex flex-wrap justify-center gap-2">
                                <Badge label="Rate Limiter" color="amber" />
                                <Badge label="CSP Nonces" color="amber" />
                                <Badge label="CSRF" color="amber" />
                                <Badge label="CAPTCHA" color="amber" />
                            </div>

                            <ArrowDown />

                            {/* Auth Layer */}
                            <div className="rounded-xl border border-indigo-200 bg-indigo-50 px-6 py-3 text-center text-sm font-medium text-indigo-700">
                                <div className="font-semibold">Authentication Layer</div>
                                <div className="text-[10px] text-indigo-500/80">
                                    Password · MFA · Device Limits · Sessions
                                </div>
                            </div>

                            <ArrowDown />

                            {/* OIDC / Token Layer */}
                            <div className="rounded-xl border border-violet-200 bg-violet-50 px-6 py-3 text-center text-sm font-medium text-violet-700">
                                <div className="font-semibold">Identity Provider</div>
                                <div className="text-[10px] text-violet-500/80">
                                    OIDC · PKCE · Token Issuance · JWKS
                                </div>
                            </div>

                            <ArrowDown />

                            {/* Data Stores */}
                            <div className="flex flex-wrap justify-center gap-3">
                                <DataStore label="User Store" icon={<Database className="w-3.5 h-3.5" />} />
                                <DataStore label="Token Store" icon={<Zap className="w-3.5 h-3.5" />} />
                                <DataStore label="Audit Store" icon={<HardDrive className="w-3.5 h-3.5" />} />
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

function Badge({ label, color }: { label: string; color: string }) {
    const colors: Record<string, string> = {
        amber: "border-amber-200 bg-amber-50 text-amber-700",
        indigo: "border-indigo-200 bg-indigo-50 text-indigo-700",
        emerald: "border-emerald-200 bg-emerald-50 text-emerald-700",
    };
    return (
        <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-medium ${colors[color] || colors.amber}`}
        >
            {label}
        </span>
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
            icon: <Key className="w-5 h-5" />,
            title: "OpenID Connect Provider",
            description:
                "Full OIDC implementation with authorization code flow, PKCE, refresh tokens, token introspection, and JWKS endpoint.",
        },
        {
            icon: <Users className="w-5 h-5" />,
            title: "Multi-Tenant Architecture",
            description:
                "Three-level hierarchy (tenant, project, client) with database-level isolation via composite unique constraints.",
        },
        {
            icon: <UserCheck className="w-5 h-5" />,
            title: "Multi-Factor Authentication",
            description:
                "TOTP-based MFA with QR code provisioning, enrollment flows, and per-user enable/disable controls.",
        },
        {
            icon: <Shield className="w-5 h-5" />,
            title: "Device Limit Enforcement",
            description:
                "Configurable concurrent session limits per user with device management and remote logout capabilities.",
        },
        {
            icon: <Lock className="w-5 h-5" />,
            title: "Defense-in-Depth Security",
            description:
                "CSP nonces, CSRF tokens, rate limiting, CAPTCHA, input sanitization, HSTS, and session security headers.",
        },
        {
            icon: <Search className="w-5 h-5" />,
            title: "Audit Trail System",
            description:
                "Columnar database for high-volume authentication event analytics with batch inserts and structured metadata.",
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
            title: "Redis for Token Storage",
            context:
                "Token validation happens on every authenticated request and requires sub-millisecond latency. Tokens also need natural TTL support and atomic revocation operations.",
            outcome:
                "Redis provides O(1) lookups, native TTL expiry, and pipeline operations for atomic multi-key operations. The token access pattern (frequent reads, infrequent writes) aligns perfectly with Redis strengths.",
            icon: <Zap className="w-5 h-5" />,
        },
        {
            title: "Battle-Tested OIDC Library over Custom Protocol",
            context:
                "The OIDC protocol is complex with requirements for PKCE, JWKS rotation, token exchange, and introspection. Implementing from scratch introduces security risk.",
            outcome:
                "Built on a production-tested OIDC library, reducing security risk while allowing customization for business-specific requirements like custom scopes and multi-tenant flows.",
            icon: <GitBranch className="w-5 h-5" />,
        },
        {
            title: "Polyglot Persistence Strategy",
            context:
                "Different data types have different access patterns. User profiles need ACID compliance, tokens need low latency, and audit events need analytics-optimized storage.",
            outcome:
                "PostgreSQL for user data (ACID), Redis for tokens (low latency), and a columnar database for audit events (analytics). Each data store is chosen for its workload.",
            icon: <Database className="w-5 h-5" />,
        },
        {
            title: "Defense-in-Depth Middleware Chain",
            context:
                "Educational platforms are targets for credential stuffing, session hijacking, and account takeover. No single security measure is sufficient.",
            outcome:
                "Multi-layer middleware chain rejects most malicious requests at the first layer (rate limiting), keeping the system fast for legitimate users.",
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
                    <MetricCard label="Tenant Architecture" value="Multi-Tenant" />
                    <MetricCard label="Security Layers" value="7" />
                    <MetricCard label="Go Source Files" value="60+" />
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
                        decision="Redis SCAN vs. secondary index for token revocation"
                        pro="Simple implementation, no additional write path"
                        con="O(n) scan pattern — acceptable at current scale but needs optimization for millions of tokens"
                    />
                    <TradeOffCard
                        decision="ZITADEL library vs. implementing OIDC from scratch"
                        pro="Protocol compliance, security, active maintenance, reduced development time"
                        con="Dependency on external library, upstream API changes, customization constraints"
                    />
                    <TradeOffCard
                        decision="Separate analytics database vs. single PostgreSQL"
                        pro="Optimized for time-series queries, columnar storage for aggregations"
                        con="Additional operational overhead, eventual consistency with primary data"
                    />
                    <TradeOffCard
                        decision="Hybrid sessions (cookie + Redis) vs. stateless JWT"
                        pro="Server-side session control, immediate revocation, no token size limits"
                        con="Redis dependency for session validation, stateful authentication"
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
                        icon={<Shield className="w-5 h-5" />}
                        title="Database-Level Isolation Is More Reliable"
                        description="Composite unique constraints prevent cross-tenant data access even if application-level checks have bugs."
                    />
                    <LessonCard
                        icon={<Zap className="w-5 h-5" />}
                        title="Protocol Libraries Reduce Risk"
                        description="OIDC is complex — using a battle-tested library for protocol compliance while customizing business logic separately reduces security risk."
                    />
                    <LessonCard
                        icon={<Database className="w-5 h-5" />}
                        title="Choose Storage for the Access Pattern"
                        description="Tokens need low latency (Redis), users need ACID (PostgreSQL), audit events need analytics (columnar database). One size does not fit all."
                    />
                    <LessonCard
                        icon={<Lock className="w-5 h-5" />}
                        title="Security Layers Should Reject Early"
                        description="Most malicious requests are caught by rate limiting before they reach authentication logic — keeping the system fast for legitimate users."
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
