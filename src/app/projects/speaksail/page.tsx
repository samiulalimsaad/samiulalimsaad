import {
    Bug,
    CreditCard,
    Database,
    Globe,
    HardDrive,
    MessageSquare,
    RefreshCw,
    Server,
    Shield,
    Video,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import MermaidDiagram from "@/components/ui/MermaidDiagram";

export const metadata: Metadata = {
    title: "SpeakSail / Enlightall — Language Learning Marketplace | Case Study",
    description:
        "Full-stack language-learning marketplace with live video tutoring, Socket.IO real-time messaging, multi-gateway payments, and an evolution story from Next.js monolith to Laravel + TanStack Start.",
};

export default function SpeakSailCaseStudy() {
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
            <EvolutionStory />
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
                    Production — Real students, paying customers
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        SpeakSail / Enlightall
                    </span>
                </h1>
                <p className="text-lg sm:text-xl text-foreground/70 mb-2">
                    Language Learning Marketplace
                </p>
                <p className="text-sm text-foreground/50 max-w-2xl mx-auto mb-6">
                    Full-stack language-learning marketplace with live video tutoring via Whereby
                    API, Socket.IO real-time messaging, multi-gateway payments (Stripe, Iyzipay,
                    Paymax), and 7 user roles. Now evolving from a Next.js 14 monolith into a
                    Laravel + TanStack Start architecture with AI-powered chat.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {[
                        "Next.js 14",
                        "TypeScript",
                        "MongoDB",
                        "Firebase",
                        "Socket.IO",
                        "Stripe",
                        "Laravel 11",
                        "TanStack Start",
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
                        href="https://speaksail.com"
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
                        icon={<Database className="w-5 h-5" />}
                        value="27"
                        label="Mongoose models"
                    />
                    <SummaryCard
                        icon={<Server className="w-5 h-5" />}
                        value="90+"
                        label="API routes"
                    />
                    <SummaryCard
                        icon={<Globe className="w-5 h-5" />}
                        value="7 roles, 2 langs"
                        label="RBAC & i18n (EN/TR)"
                    />
                </div>
                <p className="text-base text-foreground/80 leading-relaxed">
                    A full-stack language-learning marketplace serving real students with
                    instructor-led live lessons, Socket.IO real-time messaging, and multi-gateway
                    payment processing. Built as a Next.js 14 monolith with 90+ API routes, 27
                    Mongoose models, and Firebase integration for auth, push notifications, and
                    analytics. Now evolving into SpeakSail — a complete rewrite using Laravel 11 +
                    TanStack Start (React 19) with AI-powered chat.
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
    const originalDiagram = `graph TD
        subgraph Frontend["Next.js 14 — Pages Router"]
            A[React 18 + DaisyUI + Tailwind]
            B[Redux Toolkit + RTK Query + SWR]
            C[Preact Signals — Real-time State]
        end

        subgraph Backend["API Routes — 90+ Endpoints"]
            D[next-connect Middleware Chains]
            E[Mongoose ODM — 27 Models]
        end

        subgraph Auth["Authentication"]
            F[Firebase Auth — Identity]
            G[JWT jose — API Auth]
        end

        subgraph RealTime["Real-time"]
            H[Socket.IO — Messaging]
            I[FCM — Push Notifications]
        end

        subgraph External["External Services"]
            J[Stripe — USD Payments]
            K[Iyzipay — TRY Payments]
            L[Whereby — Video Sessions]
            M[Firebase Firestore — Notifications]
        end

        A --> B
        B --> D
        D --> E
        F --> G
        D --> H
        D --> I
        D --> J
        D --> K
        D --> L
        E --> M`;

    const evolutionDiagram = `graph LR
        A["Enlightall v1.7.8 (Live)"] --> B["Enlightall v3 (App Router)"]
        B --> C["Enlightall v2.10.1 (Supabase)"]
        C --> D["SpeakSail (Laravel + TanStack Start)"]

        A1["Next.js Pages Router<br/>MongoDB + Firebase"] -.-> A
        B1["Next.js App Router<br/>Better separation"] -.-> B
        C1["Supabase + NextAuth<br/>Headless architecture"] -.-> C
        D1["Laravel 11 + Filament<br/>TanStack Start + AI Chat"] -.-> D`;

    return (
        <section className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">Architecture</h2>
                <MermaidDiagram
                    chart={originalDiagram}
                    caption="Original Enlightall v1.7.8 architecture — Next.js 14 monolith with Firebase, Socket.IO, and multi-gateway payments"
                />
                <h3 className="text-lg font-semibold text-foreground mb-4 mt-8">
                    Architecture Evolution
                </h3>
                <MermaidDiagram
                    chart={evolutionDiagram}
                    caption="Four-generation evolution: Pages Router monolith → App Router → Supabase headless → Laravel + TanStack Start"
                />
            </div>
        </section>
    );
}

function KeyFeatures() {
    const features = [
        {
            icon: <Video className="w-5 h-5" />,
            title: "Live Video Tutoring",
            description:
                "Whereby API integration for 1-on-1 and group tutoring sessions. Teachers set available time slots, students book appointments, and sessions are tracked with start/end times and feedback from both sides.",
        },
        {
            icon: <MessageSquare className="w-5 h-5" />,
            title: "Real-time Messaging & Notifications",
            description:
                "Socket.IO for in-app conversations with room-based message delivery. Firebase Cloud Messaging for push notifications when users are offline. Dual notification system ensures messages always reach users.",
        },
        {
            icon: <CreditCard className="w-5 h-5" />,
            title: "Multi-gateway Payments",
            description:
                "Stripe for USD payments (primary), Iyzipay for Turkish Lira, Paymax as alternative. Full payment lifecycle: checkout → session → status tracking → order history. Coupon system for teacher and platform discounts.",
        },
        {
            icon: <Shield className="w-5 h-5" />,
            title: "7-role RBAC with Firebase Auth",
            description:
                "Firebase Auth for identity (email/password + Google OAuth), JWT (jose) for API authorization. 7 roles: USER, STUDENT, INSTRUCTOR, MENTOR, ADMIN, SUPER_ADMIN, TESTER. Client-side route guards with PrivateRoute/PublicRoute.",
        },
        {
            icon: <Globe className="w-5 h-5" />,
            title: "i18n — English & Turkish",
            description:
                "Full internationalization support for English and Turkish. Locale-aware routing, translated UI strings, and region-specific payment methods (Stripe for USD, Iyzipay for TRY).",
        },
        {
            icon: <HardDrive className="w-5 h-5" />,
            title: "Course Pipeline & Certificates",
            description:
                "Full course lifecycle: instructor creates → admin reviews → published. Modules, lessons with video content, quizzes, and course completion certificates generated via jsPDF.",
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
            title: "Firebase Auth + JWT Hybrid",
            context:
                "Firebase handles identity management (email/password, Google OAuth, email verification) with minimal setup. But Firebase tokens have limited server-side control and can't be used as API authorization tokens.",
            outcome:
                "Firebase Auth on the client-side for identity. On login, Firebase user data is POSTed to /api/token which upserts the user in MongoDB and issues a JWT (jose, HS256, 1-hour expiry). JWT is stored in HTTP-only cookie and injected into every API request via RTK Query interceptor.",
            icon: <Shield className="w-5 h-5" />,
        },
        {
            title: "Socket.IO + FCM Dual Notification System",
            context:
                "In-app messaging needs real-time delivery when users are online. But push notifications are needed for offline users and background scenarios. Neither system alone covers all cases.",
            outcome:
                "Socket.IO handles in-app conversations with room-based delivery (joinRoom/leaveRoom). Firebase Cloud Messaging handles push notifications with a service worker for background delivery. Notifications are saved to both MongoDB and Firebase Firestore. Preact Signals provide reactive conversation state updates.",
            icon: <MessageSquare className="w-5 h-5" />,
        },
        {
            title: "Monolithic Next.js with 90+ API Routes",
            context:
                "A small team (1-2 engineers) building a marketplace with courses, bookings, messaging, payments, and dashboards. Microservices would be over-engineering for this team size.",
            outcome:
                "Single Next.js 14 app with Pages Router API routes. Business logic in server/Services/ (29 controllers/services). Mongoose ODM for MongoDB with 27 models. next-connect for Express-like middleware chains. Deployed via PM2 with Firebase Hosting as alternative.",
            icon: <Server className="w-5 h-5" />,
        },
        {
            title: "Multi-gateway Payment Architecture",
            context:
                "The platform serves students in different regions: USD for international students (Stripe) and TRY for Turkish students (Iyzipay). A single payment gateway can't handle both currencies efficiently.",
            outcome:
                "Stripe for USD payments with checkout sessions and webhook handling. Iyzipay for TRY payments with 3D secure support. Paymax as alternative gateway. Payment controller routes to the correct gateway based on currency. Separate live/dev keys based on NODE_ENV.",
            icon: <CreditCard className="w-5 h-5" />,
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
                    <MetricCard label="Database Models" value="27" />
                    <MetricCard label="API Routes" value="90+" />
                    <MetricCard label="User Roles" value="7" />
                    <MetricCard label="Languages" value="2 (EN/TR)" />
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
                        decision="Monolith vs microservices"
                        pro="Single deployment, shared types, simpler debugging. One codebase to maintain for a small team."
                        con="90+ API routes in one app is approaching the limit. Scaling individual features (e.g., messaging) independently is not possible."
                    />
                    <TradeOffCard
                        decision="Firebase Auth + JWT hybrid"
                        pro="Firebase handles identity (Google OAuth, email verification) with minimal setup. JWT gives server-side control over API auth."
                        con="Two auth systems to maintain. Edge cases around Firebase token expiry vs JWT expiry. Token refresh logic duplicated."
                    />
                    <TradeOffCard
                        decision="Socket.IO + FCM dual notifications"
                        pro="Covers online (Socket.IO) and offline (FCM) scenarios. Notifications reach users regardless of app state."
                        con="Two notification infrastructures to manage. Firestore + MongoDB double-storage. Socket.IO server needs scaling consideration."
                    />
                    <TradeOffCard
                        decision="Monolithic MongoDB vs PostgreSQL"
                        pro="Schema flexibility for rapid iteration. Mongoose ODM with 27 models covers the domain well. No migration complexity."
                        con="No relational joins. Cross-document queries are limited. Referential integrity enforced at application level only."
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
                        scenario="Video session failure (Whereby API)"
                        impact="Students and teachers can't join scheduled sessions. Booking is wasted."
                        mitigation="Retry on Whereby API failure. Fallback to manual Google Meet/Zoom links stored in teacher profile. Session feedback captures failure for reconciliation."
                    />
                    <FailureModeCard
                        scenario="Payment processing error (Stripe/Iyzipay)"
                        impact="Student charged but enrollment not created. Revenue collected without service delivery."
                        mitigation="Stripe webhooks for async status confirmation. Payment model tracks status (OK/FAILED/PENDING). Admin dashboard for manual payment reconciliation."
                    />
                    <FailureModeCard
                        scenario="Socket.IO disconnect"
                        impact="Real-time messages lost during connection drop. Users see stale conversation state."
                        mitigation="Room-based reconnection with automatic room rejoin. Messages persisted to MongoDB before broadcast. Preact Signals for reactive state recovery on reconnect."
                    />
                    <FailureModeCard
                        scenario="Multi-timezone booking conflict"
                        impact="Double-booked instructor. Two students scheduled for the same time slot."
                        mitigation="Server-side availability validation on booking creation. Available model tracks booked slots with year/week/day/time granularity. Booking model enforces status transitions."
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

function EvolutionStory() {
    return (
        <section className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">Evolution Story</h2>
                <div className="space-y-4">
                    <EvolutionCard
                        version="Enlightall v1.7.8"
                        status="Live on speaksail.com"
                        statusColor="emerald"
                        description="Original production monolith. Next.js 14 Pages Router with MongoDB, Firebase Auth, Socket.IO, Stripe/Iyzipay, Redux Toolkit. 90+ API routes, 27 models."
                        tech={["Next.js 14", "MongoDB", "Firebase", "Socket.IO", "Redux Toolkit"]}
                    />
                    <EvolutionCard
                        version="Enlightall v3"
                        status="In development"
                        statusColor="amber"
                        description="Ground-up rewrite to Next.js App Router with better separation of concerns (server/ vs client/). Same MongoDB backend, same feature set, cleaner architecture."
                        tech={["Next.js App Router", "MongoDB", "Firebase", "Preact Signals"]}
                    />
                    <EvolutionCard
                        version="Enlightall New"
                        status="Exploration"
                        statusColor="gray"
                        description="Headless architecture pivot: Strapi CMS (PostgreSQL) for content + Supabase for auth + NextUI frontend. Decouples content management from application logic."
                        tech={["Supabase", "Strapi", "NextAuth", "NextUI", "TanStack Query"]}
                    />
                    <EvolutionCard
                        version="SpeakSail"
                        status="Future direction"
                        statusColor="indigo"
                        description="Complete platform rebuild: Laravel 11 backend with Filament admin panel + TanStack Start (React 19) frontend. AI-powered chat via Anthropic SDK. Proper API/SPA separation."
                        tech={[
                            "Laravel 11",
                            "Filament",
                            "TanStack Start",
                            "Anthropic AI",
                            "SQLite",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
}

function EvolutionCard({
    version,
    status,
    statusColor,
    description,
    tech,
}: {
    version: string;
    status: string;
    statusColor: string;
    description: string;
    tech: string[];
}) {
    const colorMap: Record<string, string> = {
        emerald: "bg-emerald-50 text-emerald-600 ring-emerald-100",
        amber: "bg-amber-50 text-amber-600 ring-amber-100",
        gray: "bg-gray-50 text-gray-600 ring-gray-100",
        indigo: "bg-indigo-50 text-indigo-600 ring-indigo-100",
    };

    return (
        <div className="rounded-2xl border border-gray-100 bg-white/80 p-6 backdrop-blur-sm">
            <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="text-base font-semibold text-foreground">{version}</h3>
                <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-medium ring-1 ${colorMap[statusColor]}`}
                >
                    {status}
                </span>
            </div>
            <p className="text-sm text-foreground/70 mb-3">{description}</p>
            <div className="flex flex-wrap gap-1.5">
                {tech.map((t) => (
                    <span
                        key={t}
                        className="inline-flex items-center rounded-full bg-cyan-50 px-2 py-0.5 text-[10px] font-medium text-cyan-700 ring-1 ring-cyan-100"
                    >
                        {t}
                    </span>
                ))}
            </div>
        </div>
    );
}

function LessonsLearned() {
    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">What I Learned</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <LessonCard
                        icon={<Server className="w-5 h-5" />}
                        title="Monoliths Work Until They Don't"
                        description="90+ API routes in one app is manageable for a small team but approaching the limit. Scaling individual features independently requires a rewrite."
                    />
                    <LessonCard
                        icon={<Shield className="w-5 h-5" />}
                        title="Dual Auth Systems Add Complexity"
                        description="Firebase + JWT works but creates edge cases around token expiry and refresh. The next iteration should pick one auth system and commit to it."
                    />
                    <LessonCard
                        icon={<MessageSquare className="w-5 h-5" />}
                        title="Real-Time Is a Feature, Not Architecture"
                        description="Socket.IO for messaging + FCM for push covers the use case. Event-driven infrastructure would be over-engineering for this team size and product stage."
                    />
                    <LessonCard
                        icon={<RefreshCw className="w-5 h-5" />}
                        title="Rewrites Are Worth It at the Right Time"
                        description="The evolution from Pages Router → App Router → Supabase → Laravel shows that rewriting is justified when the architecture no longer supports the product direction."
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

function ReferencesSection() {
    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                    References & Verification
                </h2>
                <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-6 backdrop-blur-sm">
                    <p className="text-sm text-foreground/70 mb-4">
                        This is a production system serving real students and paying customers.
                        Additional context:
                    </p>
                    <ul className="space-y-2 text-sm text-foreground/70">
                        <li className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                            Live platform:{" "}
                            <a
                                href="https://speaksail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-indigo-600 hover:text-indigo-800"
                            >
                                speaksail.com
                            </a>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                            Freelance engagement: Aug 2022 – Aug 2025 (3 years)
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                            Client relationship maintained through 4 architecture iterations
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                            No automated tests — known weakness, addressed in the next rewrite
                            (SpeakSail)
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
