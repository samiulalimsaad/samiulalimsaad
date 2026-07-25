import {
    BarChart3,
    Brain,
    Database,
    GitBranch,
    Medal,
    RefreshCw,
    Server,
    Shield,
    Users,
    Zap,
} from "lucide-react";
import Link from "next/link";

export default function SkillMapperCaseStudy() {
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
                    Production — 5,000 enrolled students
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        Skill Mapper
                    </span>
                </h1>
                <p className="text-lg sm:text-xl text-foreground/70 mb-2">
                    AI-Powered Technical Assessment Platform
                </p>
                <p className="text-sm text-foreground/50 max-w-2xl mx-auto mb-6">
                    Full-lifecycle assessment platform with AI-generated
                    questions, event-driven state machine, and gamified ranking
                    system serving technical skill evaluation at scale.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {["TypeScript", "Node.js", "MongoDB", "OpenAI", "Gemini", "Redis", "Next.js"].map(
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
                        value="5,000"
                        label="Enrolled students"
                    />
                    <SummaryCard
                        icon={<BarChart3 className="w-5 h-5" />}
                        value="500"
                        label="Daily active users"
                    />
                    <SummaryCard
                        icon={<Brain className="w-5 h-5" />}
                        value="Dual AI"
                        label="OpenAI + Gemini providers"
                    />
                </div>
                <p className="text-base text-foreground/80 leading-relaxed">
                    A technical assessment platform that uses AI to generate
                    questions, evaluate answers, and map student skills to
                    appropriate courses. The system uses an event-driven state
                    machine to govern assessment lifecycles, supports concurrent
                    timed exams with real-time synchronization, and features a
                    gamified XP ranking system across five tiers.
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
                            {/* Assessment Lifecycle */}
                            <div className="rounded-xl border border-cyan-200 bg-cyan-50 px-6 py-3 text-center text-sm font-medium text-cyan-700">
                                <div className="font-semibold">State Machine</div>
                                <div className="text-[10px] text-cyan-500/80">
                                    Draft → Published → Active → Completed → Archived
                                </div>
                            </div>

                            <ArrowDown />

                            {/* Backend */}
                            <div className="rounded-xl border border-indigo-200 bg-indigo-50 px-6 py-3 text-center text-sm font-medium text-indigo-700">
                                <div className="font-semibold">API Server</div>
                                <div className="text-[10px] text-indigo-500/80">
                                    Express.js · Zod Validation · Role-Based Access
                                </div>
                            </div>

                            {/* Side-by-side services */}
                            <div className="flex items-center gap-4">
                                <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-2 text-center text-sm font-medium text-amber-700">
                                    AI Question Generator
                                </div>
                                <div className="rounded-xl border border-violet-200 bg-violet-50 px-4 py-2 text-center text-sm font-medium text-violet-700">
                                    Scoring Engine
                                </div>
                                <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-2 text-center text-sm font-medium text-emerald-700">
                                    Ranking System
                                </div>
                            </div>

                            <ArrowDown />

                            {/* Data Stores */}
                            <div className="flex flex-wrap justify-center gap-3">
                                <DataStore label="MongoDB" icon={<Database className="w-3.5 h-3.5" />} />
                                <DataStore label="Redis" icon={<RefreshCw className="w-3.5 h-3.5" />} />
                                <DataStore label="AI Providers" icon={<Brain className="w-3.5 h-3.5" />} />
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
            icon: <GitBranch className="w-5 h-5" />,
            title: "Event-Driven State Machine",
            description:
                "Assessment lifecycle governed by a state machine preventing invalid state transitions — more reliable than boolean status flags.",
        },
        {
            icon: <Brain className="w-5 h-5" />,
            title: "Dual AI Provider Integration",
            description:
                "Question generation and scoring powered by both OpenAI and Gemini providers, offering redundancy and cost optimization.",
        },
        {
            icon: <Medal className="w-5 h-5" />,
            title: "Gamified XP Ranking",
            description:
                "Five-tier ranking system with per-assessment score caps and tie-breaking logic to prevent score inflation from repeated attempts.",
        },
        {
            icon: <Zap className="w-5 h-5" />,
            title: "Real-Time Exam Sync",
            description:
                "Concurrent timed exams with real-time synchronization using database change streams instead of polling.",
        },
        {
            icon: <Users className="w-5 h-5" />,
            title: "Role-Based Access Control",
            description:
                "Four-tier role hierarchy (super admin, admin, instructor, student) with attribute-based permission checks.",
        },
        {
            icon: <BarChart3 className="w-5 h-5" />,
            title: "Materialized Leaderboard",
            description:
                "Pre-computed leaderboard views avoid expensive aggregation queries on every request — updated incrementally on score changes.",
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
            title: "State Machine over Status Flags",
            context:
                "Assessment lifecycles can have invalid transitions (e.g., publishing an incomplete assessment). Boolean flags don't prevent invalid state changes.",
            outcome:
                "An event-driven state machine governs all transitions, preventing invalid state changes and providing a clear audit trail of assessment lifecycle events.",
            icon: <GitBranch className="w-5 h-5" />,
        },
        {
            title: "Dual AI Providers for Resilience",
            context:
                "Relying on a single AI provider creates a single point of failure and limits cost optimization opportunities.",
            outcome:
                "Both OpenAI and Gemini are integrated. The system can failover between providers and route different workloads to optimize cost and latency.",
            icon: <Brain className="w-5 h-5" />,
        },
        {
            title: "Database Change Streams over Polling",
            context:
                "Concurrent timed exams need real-time state synchronization. Polling creates unnecessary load and introduces latency.",
            outcome:
                "Database change streams provide real-time event notifications without polling overhead, enabling immediate state updates during active exams.",
            icon: <Zap className="w-5 h-5" />,
        },
        {
            title: "Materialized View for Leaderboard",
            context:
                "The leaderboard is queried on every page load. Computing rankings from raw scores on each request would be expensive.",
            outcome:
                "A materialized view stores pre-computed rankings, updated incrementally on score changes. This keeps leaderboard queries fast regardless of participant count.",
            icon: <BarChart3 className="w-5 h-5" />,
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
                    <MetricCard label="Enrolled Students" value="5,000" />
                    <MetricCard label="Daily Active Users" value="500" />
                    <MetricCard label="AI Providers" value="2" />
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

function TradeOffs() {
    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                    Trade-offs
                </h2>
                <div className="space-y-4">
                    <TradeOffCard
                        decision="State machine vs. simple status flags"
                        pro="Prevents invalid transitions, clear audit trail, deterministic lifecycle"
                        con="More code, steeper learning curve, harder to modify transitions"
                    />
                    <TradeOffCard
                        decision="Dual AI providers vs. single provider"
                        pro="Redundancy, cost optimization, workload routing flexibility"
                        con="Two integrations to maintain, different response formats, higher initial implementation cost"
                    />
                    <TradeOffCard
                        decision="Materialized leaderboard vs. real-time computation"
                        pro="Fast queries regardless of data size, predictable response times"
                        con="Eventual consistency, incremental update logic, additional storage"
                    />
                    <TradeOffCard
                        decision="Database change streams vs. polling"
                        pro="Real-time updates, no polling load, efficient resource usage"
                        con="Database-specific feature, connection management overhead, session tracking"
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
                        title="State Machines Prevent Bugs"
                        description="Boolean status flags allow invalid transitions. A state machine guarantees the assessment lifecycle follows a valid path."
                    />
                    <LessonCard
                        icon={<Brain className="w-5 h-5" />}
                        title="AI Providers Need Fallbacks"
                        description="Using two AI providers provides redundancy when one is unavailable and allows cost optimization by routing different workloads."
                    />
                    <LessonCard
                        icon={<Zap className="w-5 h-5" />}
                        title="Pre-Compute Expensive Queries"
                        description="A materialized leaderboard avoids expensive aggregation queries on every request, keeping the system responsive under load."
                    />
                    <LessonCard
                        icon={<RefreshCw className="w-5 h-5" />}
                        title="Real-Time Sync Without Polling"
                        description="Database change streams provide real-time updates without the overhead of polling, critical for timed exams with many concurrent participants."
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
