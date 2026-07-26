import {
    BookOpen,
    Bug,
    Database,
    GitBranch,
    Key,
    Lock,
    Search,
    Server,
    Shield,
    UserCheck,
    Users,
    Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import MermaidDiagram from "@/components/ui/MermaidDiagram";

export const metadata: Metadata = {
    title: "PH Auth Service — Multi-Tenant Identity Provider | Case Study",
    description:
        "Multi-tenant OIDC auth platform with ZITADEL and custom Go layer. MFA, device limits, rate limiting, CSP/CSRF hardening, and defense-in-depth security.",
};

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
                    A production-grade OpenID Connect identity provider with multi-tenant isolation,
                    TOTP-based MFA, device limit enforcement, and defense-in-depth security.
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
                    A custom identity provider implementing the OpenID Connect protocol to serve as
                    the centralized authentication layer for an educational platform ecosystem. The
                    system supports multiple tenants with isolated user bases, TOTP-based
                    multi-factor authentication, configurable device limits, and comprehensive audit
                    logging — all behind a defense-in-depth security middleware chain.
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
            A[Web Apps]
            B[Mobile Apps]
        end

        subgraph Security
            C[Rate Limiter]
            D[CSP Nonce Injector]
            E[CSRF Protection]
            F[ReCAPTCHA]
        end

        subgraph Auth
            G[Authentication Layer]
            H[Password Auth]
            I[MFA - TOTP]
            J[Device Limiter]
            K[Session Manager]
        end

        subgraph Identity
            L[ZITADEL OIDC Provider]
            M[Token Issuance]
            N[JWKS Endpoint]
            O[PKCE Flow]
        end

        subgraph Storage
            P[(PostgreSQL - Users)]
            Q[(Redis - Tokens)]
            R[(Columnar DB - Audit)]
        end

        A --> C
        B --> C
        C --> D
        D --> E
        E --> F
        F --> G
        G --> H
        G --> I
        G --> J
        J --> K
        K --> L
        L --> M
        L --> N
        L --> O
        M --> P
        M --> Q
        K --> R`;

    const mfaDiagram = `sequenceDiagram
        participant U as User
        participant A as Auth Service
        participant M as MFA Handler
        participant T as TOTP Library
        participant D as Database

        U->>A: Login Request
        A->>M: Check MFA Enabled
        M-->>A: MFA Required
        A-->>U: Challenge: TOTP Code
        U->>A: Submit TOTP Code
        A->>M: Verify Code
        M->>T: Validate TOTP
        T-->>M: Valid/Invalid
        M->>D: Log Attempt
        M-->>A: Result
        A-->>U: Token / Error`;

    return (
        <section className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">Architecture</h2>
                <MermaidDiagram
                    chart={flowDiagram}
                    caption="System architecture showing security middleware chain, authentication layer, and OIDC identity provider"
                />
                <h3 className="text-lg font-semibold text-foreground mb-4 mt-8">
                    MFA Authentication Flow
                </h3>
                <MermaidDiagram
                    chart={mfaDiagram}
                    caption="TOTP-based multi-factor authentication sequence with challenge-response and audit logging"
                />
            </div>
        </section>
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
                    <MetricCard label="Tenant Architecture" value="Multi-Tenant" />
                    <MetricCard label="Security Layers" value="7" />
                    <MetricCard label="Products Served" value="4" />
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
                        scenario="Redis Outage (Session Store)"
                        impact="Session validation fails, users cannot authenticate"
                        mitigation="Redis Sentinel for automatic failover. Session validation returns 503 during outage — clients retry with backoff. Grace period for existing sessions via cookie cache."
                    />
                    <FailureModeCard
                        scenario="ZITADEL Library API Change"
                        impact="OIDC protocol handling may break after upgrade"
                        mitigation="Integration tests cover all OIDC flows. Staged rollouts with UAT validation. Pinned dependency version with planned upgrade cycles."
                    />
                    <FailureModeCard
                        scenario="Rate Limiter False Positive"
                        impact="Legitimate user blocked after exceeding threshold"
                        mitigation="Rate limit headers expose remaining capacity. Users see Retry-After header with clear messaging. Admin override API for unblocking. Per-user whitelist for known IPs."
                    />
                    <FailureModeCard
                        scenario="MFA Enrollment Failure"
                        impact="User cannot complete MFA setup, blocked from account"
                        mitigation="MFA enrollment is transactional — failure rolls back to previous state. Support override for manual MFA reset. Audit trail of all enrollment attempts."
                    />
                    <FailureModeCard
                        scenario="Token Revocation Race Condition"
                        impact="Revoked token used briefly before propagation"
                        mitigation="Redis-based token blacklist with TTL matching token expiry. Eventual consistency accepted — worst case: token valid for < 1s after revocation. Audit log captures all revocation events."
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
                            "Structured JSON logs with correlation IDs across auth flows",
                            "Authentication events logged: login success, login failure, MFA challenge, token refresh, token revocation",
                            "Security events logged at WARN: rate limit exceeded, failed MFA, suspicious IP patterns",
                        ]}
                    />
                    <ObservabilityCard
                        title="Metrics"
                        items={[
                            "Auth request volume and success/failure rate per tenant",
                            "Rate limiter metrics: requests blocked, current capacity per tenant",
                            "Token operations: issued, refreshed, revoked per minute",
                        ]}
                    />
                    <ObservabilityCard
                        title="Alerting"
                        items={[
                            "Failed login rate spike (potential brute force attack)",
                            "Rate limiter blocking > 5% of legitimate traffic",
                            "MFA enrollment failure rate increase",
                            "Redis connectivity loss",
                            "Token revocation backlog",
                        ]}
                    />
                    <ObservabilityCard
                        title="Monitoring"
                        items={[
                            "Discord webhook alerts for service downtime via Uptime Kuma",
                            "Per-tenant authentication breakdown",
                            "Rate limiter effectiveness: requests allowed vs blocked",
                            "Security event timeline: failed attempts, rate limit hits, MFA challenges",
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
                        scope="Middleware functions, token operations, MFA validation, device limit enforcement"
                        approach="Vitest with mocked Redis and PostgreSQL. Tests cover: rate limiter edge cases (overflow, refill timing), TOTP validation with known test vectors, device limit enforcement across concurrent sessions."
                    />
                    <TestingCard
                        level="Integration Tests"
                        scope="Full auth flows with real database, OIDC protocol compliance"
                        approach="Testcontainers for PostgreSQL and Redis in CI. Tests verify: complete OIDC authorization code flow, MFA enrollment and challenge, device limit enforcement, token refresh and revocation."
                    />
                    <TestingCard
                        level="E2E Tests"
                        scope="10 Cypress E2E tests covering: login, registration, profile management, tenant management, tenant projects, user management, forget password, OTP verification, health checks, and application flows"
                        approach="Cypress with cypress.env.json for environment configuration. Test files in cypress/e2e/*.cy.ts. CI integration via GitHub Actions pipeline."
                    />
                    <TestingCard
                        level="Frontend Test Suite"
                        scope="50 Vitest tests across the Bootcamp platform: 7 integration tests, 15 hook tests, 12 service tests, 3 store tests, 4 utility tests, 3 component tests, 2 permission tests, 1 constant test"
                        approach="Vitest with MSW (Mock Service Worker) for API mocking. Test factories and auth helpers for consistent test data. CI runs on every push."
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
    const patterns = [
        {
            slug: "totp-mfa-service",
            title: "TOTP MFA Service Pattern",
            description:
                "A deep dive into the TOTP-based multi-factor authentication implementation used in this project.",
        },
        {
            slug: "csp-nonce-middleware",
            title: "CSP Nonce Middleware Pattern",
            description:
                "The CSP nonce injection middleware that generates per-request cryptographic nonces for inline script/style security.",
        },
        {
            slug: "rate-limiter-pattern",
            title: "Rate Limiter Pattern",
            description:
                "The per-IP token bucket rate limiter protecting authentication endpoints from brute force attacks.",
        },
    ];

    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">Related Patterns</h2>
                <div className="space-y-4">
                    {patterns.map((p) => (
                        <div
                            key={p.slug}
                            className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-6 backdrop-blur-sm"
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                    <BookOpen className="w-5 h-5" />
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-foreground mb-1">
                                        {p.title}
                                    </h3>
                                    <p className="text-sm text-foreground/70 mb-3">
                                        {p.description}
                                    </p>
                                    <Link
                                        href={`/gists/${p.slug}`}
                                        className="inline-flex items-center text-sm font-semibold text-cyan-700 hover:text-indigo-700"
                                    >
                                        Read the full gist →
                                    </Link>
                                </div>
                            </div>
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
                            Security audit reports and penetration test results
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
