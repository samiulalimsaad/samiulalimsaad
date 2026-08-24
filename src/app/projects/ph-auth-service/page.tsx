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
import BreadcrumbsJsonLd from "@/components/Breadcrumbs";
import CodeSnippet from "@/components/ui/CodeSnippet";
import MermaidDiagram from "@/components/ui/MermaidDiagram";
import { SITE_URL as siteUrl } from "@/lib/site";

const pageTitle = "PH Auth Service: Multi-Tenant Identity Provider | Case Study";
const pageDescription =
    "Multi-tenant OIDC auth platform with ZITADEL and custom Go layer. MFA, device limits, rate limiting, CSP/CSRF hardening, and defense-in-depth security.";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: "/projects/ph-auth-service",
    },
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: "/projects/ph-auth-service",
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

export default function AuthServiceCaseStudy() {
    return (
        <>
            <BreadcrumbsJsonLd
                items={[
                    { name: "Home", href: siteUrl },
                    { name: "Projects", href: `${siteUrl}/projects` },
                    { name: "PH Auth Service", href: `${siteUrl}/projects/ph-auth-service` },
                ]}
            />
            <HeroSection />
            <ExecutiveSummary />
            <OwnershipSection />
            <ArchitectureDiagram />
            <KeyFeatures />
            <TechnicalDecisions />
            <MetricsSection />
            <ThreatModel />
            <TradeOffs />
            <FailureModes />
            <ObservabilitySection />
            <TestingSection />
            <ReleaseReadinessSection />
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
                    Complete: Awaiting Production Release
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
                    A production-oriented OpenID Connect identity provider with multi-tenant
                    isolation, TOTP-based MFA, device limit enforcement, and defense-in-depth
                    security. Complete, awaiting production release.
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
                        value="10"
                        label="Cypress E2E suites"
                    />
                    <SummaryCard
                        icon={<Server className="w-5 h-5" />}
                        value="3"
                        label="Backend data stores"
                    />
                </div>
                <p className="text-base text-foreground/80 leading-relaxed">
                    A custom identity provider implementing the OpenID Connect protocol to serve as
                    the centralized authentication layer for an educational platform ecosystem. The
                    system supports tenant-scoped users, projects, OIDC clients, and signing keys,
                    TOTP-based multi-factor authentication, configurable device limits, Redis-backed
                    sessions, and audit-event storage behind a defense-in-depth security middleware
                    chain. The Go IDP and Nuxt administration dashboard are complete and awaiting
                    production release.
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
            L[Go OIDC Provider]
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
        {
            icon: <Users className="w-5 h-5" />,
            title: "Administration Dashboard",
            description:
                "Nuxt 3 dashboard authenticated through OIDC for managing tenants, projects, applications, users, and MFA configuration.",
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
                "Built on a battle-tested OIDC library, reducing protocol implementation risk while allowing customization for business-specific requirements like custom scopes and multi-tenant flows.",
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
            snippet: `// Defense-in-depth middleware chain: each layer rejects early.
// Downstream layers never execute if a prior layer fails.
export function createSecurityMiddleware(config: SecurityConfig) {
    return compose(
        rateLimiter({ windowMs: 60_000, max: 100 }),
        cspNonce({ directives: config.cspDirectives }),
        csrfProtection({ cookie: true }),
        captcha({ score: 0.7, actions: ["login", "register"] }),
        inputSanitizer({ maxLength: 1000, allowedTags: [] }),
        hsts({ maxAge: 31536000, includeSubDomains: true }),
    )
}`,
            language: "typescript",
        },
        {
            title: "Multi-Tenant Data Isolation",
            context:
                "The platform is built to serve three product tenants (bootcamp, skill-mapper, admin tools). Accidental cross-tenant data leaks would be catastrophic for user trust.",
            outcome:
                "Tenant-scoped queries and composite database constraints reinforce isolation between product tenants and make incorrect associations visible at the persistence boundary.",
            icon: <Database className="w-5 h-5" />,
            snippet: `// Tenant-scoped repository: keep tenant boundaries explicit.
// Every query injects tenantId and relies on composite constraints.
export class TenantScopedRepository<T> {
    constructor(
        private prisma: PrismaClient,
        private model: string,
    ) {}

    async findMany(tenantId: string, where: WhereInput<T>): Promise<T[]> {
        return this.prisma[this.model].findMany({
            where: { ...where, tenantId },
        })
    }

    async create(tenantId: string, data: CreateInput<T>): Promise<T> {
        return this.prisma[this.model].create({
            data: { ...data, tenantId },
        })
    }
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
                    <MetricCard label="E2E test suites" value="10" />
                    <MetricCard label="Admin resource domains" value="4" />
                    <MetricCard label="Backend data stores" value="3" />
                    <MetricCard label="Status" value="Pre-production" />
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

function ThreatModel() {
    const threats = [
        {
            threat: "Credential stuffing / brute force",
            mitigation:
                "Per-IP and per-account rate limiting, progressive delay on repeated failures, lockout after threshold, ReCAPTCHA on login/registration",
            layer: "Edge + App",
        },
        {
            threat: "Token theft / replay (XSS-led)",
            mitigation:
                "CSP nonce per request (no unsafe-inline), HttpOnly + Secure + SameSite cookies for sessions, short-lived access tokens, PKCE for public clients",
            layer: "App + Session",
        },
        {
            threat: "Session fixation / hijack",
            mitigation:
                "Session IDs rotated on privilege change, device-limit enforcement, server-side revocation, absolute + sliding expiry",
            layer: "Session",
        },
        {
            threat: "Stolen credentials (user-side)",
            mitigation:
                "Mandatory TOTP MFA enrollment with 1-step skew tolerance, device-limit per user, audit log of auth attempts",
            layer: "MFA",
        },
        {
            threat: "Multi-tenant data leak",
            mitigation:
                "Composite unique constraints at DB level (tenant, project, client), tenant scoping in every query, no cross-tenant identifiers in tokens",
            layer: "Data",
        },
        {
            threat: "CSRF on state-changing flows",
            mitigation:
                "Double-submit cookie CSRF token, SameSite=Lax, origin checks on OAuth redirects",
            layer: "App",
        },
        {
            threat: "Audit tampering / secret leakage",
            mitigation:
                "Append-only audit log to columnar store, secret auto-redaction before write, retention window",
            layer: "Data",
        },
    ];

    return (
        <section className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-4">Threat Model</h2>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                    "7 security layers" is a count; this is the reasoning behind it. For each
                    realistic threat against a multi-tenant identity platform, the table lists the
                    concrete mitigation and the layer that owns it.
                </p>

                <div className="rounded-2xl border border-gray-100 bg-white/80 p-6 backdrop-blur-sm mb-6 overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead>
                            <tr className="border-b border-gray-200 text-left">
                                <th className="pb-2 pr-4 text-xs font-semibold text-foreground/60">
                                    Threat
                                </th>
                                <th className="pb-2 pr-4 text-xs font-semibold text-foreground/60">
                                    Mitigation
                                </th>
                                <th className="pb-2 text-xs font-semibold text-foreground/60">
                                    Layer
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {threats.map((t) => (
                                <tr
                                    key={t.threat}
                                    className="border-b border-gray-100 last:border-0"
                                >
                                    <td className="py-2 pr-4 align-top font-medium text-foreground">
                                        {t.threat}
                                    </td>
                                    <td className="py-2 pr-4 align-top text-xs text-foreground/70">
                                        {t.mitigation}
                                    </td>
                                    <td className="py-2 align-top whitespace-nowrap">
                                        <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-medium text-indigo-700">
                                            {t.layer}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white/80 p-6 backdrop-blur-sm">
                    <h3 className="text-base font-semibold text-foreground mb-2">
                        Authorization code + PKCE flow (native & SPA clients)
                    </h3>
                    <MermaidDiagram
                        chart={`sequenceDiagram
                            participant Client
                            participant App as Go App Layer
                            participant Z as ZITADEL (OIDC)
                            Client->>App: 1. Auth request + code_verifier
                            App->>Z: 2. Authorization request (PKCE)
                            Z-->>Client: 3. Authorization code
                            Client->>App: 4. Code + code_verifier
                            App->>Z: 5. Token exchange (code + verifier)
                            Z-->>App: 6. Access/Refresh token + userinfo
                            App->>App: 7. Enforce MFA + device limit
                            App-->>Client: 8. Session cookie (HttpOnly, Secure, SameSite)`}
                        caption="Authorization code flow with PKCE: the code_verifier binds the token exchange to the original client, defeating interception"
                    />
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
                        decision="Redis SCAN vs. secondary index for token revocation"
                        pro="Simple implementation, no additional write path"
                        con="O(n) scan pattern: acceptable at current scale but needs optimization for millions of tokens"
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
                        description="OIDC is complex. Using a battle-tested library for protocol compliance while customizing business logic separately reduces security risk."
                    />
                    <LessonCard
                        icon={<Database className="w-5 h-5" />}
                        title="Choose Storage for the Access Pattern"
                        description="Tokens need low latency (Redis), users need ACID (PostgreSQL), audit events need analytics (columnar database). One size does not fit all."
                    />
                    <LessonCard
                        icon={<Lock className="w-5 h-5" />}
                        title="Security Layers Should Reject Early"
                        description="Most malicious requests are caught by rate limiting before they reach authentication logic. This keeps the system fast for legitimate users."
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
                        mitigation="Redis is an explicit session dependency. The service reports initialization and connection failures rather than silently accepting unverifiable sessions. High-availability failover remains a deployment concern before production release."
                    />
                    <FailureModeCard
                        scenario="ZITADEL Library API Change"
                        impact="OIDC protocol handling may break after upgrade"
                        mitigation="The dependency is version-pinned in Go modules, with protocol behavior documented through OIDC flow diagrams and server tests. Upgrade validation remains part of release preparation."
                    />
                    <FailureModeCard
                        scenario="Rate Limiter False Positive"
                        impact="Legitimate user blocked after exceeding threshold"
                        mitigation="The current token-bucket limiter applies bounded per-IP limits to mutating requests. Threshold tuning and operational override policy remain pre-production concerns."
                    />
                    <FailureModeCard
                        scenario="MFA Enrollment Failure"
                        impact="User cannot complete MFA setup, blocked from account"
                        mitigation="Enrollment validates the TOTP code before marking MFA active, and the profile flow exposes recovery feedback for invalid or failed setup attempts."
                    />
                    <FailureModeCard
                        scenario="Token Revocation Race Condition"
                        impact="Revoked token used briefly before propagation"
                        mitigation="Server-side Redis session deletion provides immediate control for browser sessions. Exact distributed token-revocation guarantees require production deployment validation."
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
                            "Structured application logging through Go's slog and the service logger",
                            "Authentication, session, MFA, and management operations emit diagnostic events",
                            "Sensitive values are masked or sanitized in user-facing error and logging paths",
                        ]}
                    />
                    <ObservabilityCard
                        title="Metrics"
                        items={[
                            "Health endpoint exposes service availability for deployment checks",
                            "ClickHouse audit repository provides a path for structured auth-event analysis",
                            "Request logging supports troubleshooting during staging validation",
                        ]}
                    />
                    <ObservabilityCard
                        title="Alerting"
                        items={[
                            "Database and Redis initialization failures are surfaced during startup",
                            "Authentication and security failures remain observable in service logs",
                            "Production alert thresholds and on-call policies remain release work",
                        ]}
                    />
                    <ObservabilityCard
                        title="Monitoring"
                        items={[
                            "Health checks can be used by staging and deployment environments",
                            "OIDC flow and management API behavior is covered by Cypress scenarios",
                            "Operational monitoring configuration is not represented as a production claim",
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
                        level="Go Server Tests"
                        scope="6 server test suites covering health, login, registration, OTP, password recovery, and profile flows"
                        approach="Go tests exercise HTTP behavior against the running IDP environment and assert response status and rendered auth UI content."
                    />
                    <TestingCard
                        level="Cypress E2E"
                        scope="10 suites covering login, registration, OTP, password recovery, profile/MFA, tenant, project, user, application, and health flows"
                        approach="Cypress tests use environment-configured base URLs and credentials, with API setup for tenant, project, and OIDC application lifecycle scenarios."
                    />
                    <TestingCard
                        level="Release Validation"
                        scope="IDP Docker packaging and Nuxt dashboard build/deployment workflows"
                        approach="Manual release workflow builds and pushes the Go IDP image; staging dashboard changes trigger a Nuxt build and Vercel deployment workflow."
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

function ReleaseReadinessSection() {
    return (
        <section className="w-full bg-linear-to-b from-sky-50/60 via-white to-indigo-50/60 py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-4">Release Readiness</h2>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                    The implementation is complete and packaged for release, but it has not yet been
                    promoted to production. The repository separates the deployable Go IDP and Nuxt
                    dashboard and includes workflows for building the IDP image and deploying the
                    dashboard.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-gray-100 bg-white/80 p-5">
                        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                            <Server className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm font-semibold text-foreground mb-1">
                            Go IDP Container
                        </h3>
                        <p className="text-xs text-foreground/60 leading-relaxed">
                            Dockerfile and manual GitHub Actions workflow build and publish a tagged
                            authentication-server image.
                        </p>
                    </div>
                    <div className="rounded-2xl border border-gray-100 bg-white/80 p-5">
                        <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                            <GitBranch className="w-5 h-5" />
                        </div>
                        <h3 className="text-sm font-semibold text-foreground mb-1">
                            Nuxt Dashboard Deployment
                        </h3>
                        <p className="text-xs text-foreground/60 leading-relaxed">
                            Staging dashboard changes run a Nuxt build and deploy workflow targeting
                            Vercel.
                        </p>
                    </div>
                </div>
            </div>
        </section>
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

function OwnershipSection() {
    const ownership = [
        {
            title: "Go product layer",
            description:
                "Owned design and implementation of the custom Go layer on top of ZITADEL: SSR UI, per-tenant configuration, and integration logic the OIDC interface doesn't expose.",
        },
        {
            title: "Security hardening",
            description:
                "Designed the security controls not available through standard OIDC: MFA enrollment flows, per-user device limits, CSP nonce injection, rate limiting, ReCAPTCHA, and CSRF protection.",
        },
        {
            title: "Team coordination",
            description:
                "Coordinated implementation and reviewed the work of two mid-level engineers. Made collaborative architecture decisions under senior engineer authority.",
        },
        {
            title: "Admin dashboard",
            description:
                "Built the Nuxt 3 dashboard surface for OIDC-authenticated management of tenants, projects, applications, users, and MFA configuration.",
        },
        {
            title: "E2E and release readiness",
            description:
                "Added 10 Cypress suites across auth and management flows, plus Docker and GitHub Actions workflows for pre-production release validation.",
        },
        {
            title: "Tenancy & isolation",
            description:
                "Implemented tenant-scoped queries and composite constraints to reinforce isolation at both application and persistence boundaries.",
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
                        This is a proprietary pre-production system. The details above reflect my
                        actual work. Additional implementation evidence is available upon request:
                    </p>
                    <ul className="space-y-2 text-sm text-foreground/70">
                        <li className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                            Anonymized architecture diagrams and code samples
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                            Anonymized security architecture and release-readiness evidence
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
