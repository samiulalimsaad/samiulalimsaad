import { BarChart3, Brain, Bug, GitBranch, Medal, RefreshCw, Users, Zap } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbsJsonLd from "@/components/Breadcrumbs";
import CodeSnippet from "@/components/ui/CodeSnippet";
import MermaidDiagram from "@/components/ui/MermaidDiagram";
import { SITE_URL as siteUrl } from "@/lib/site";

const pageTitle = "Skill Mapper: Technical Assessment Platform | Case Study";
const pageDescription =
    "AI-powered assessment platform with event-driven state machine, dual AI providers (OpenAI + Gemini), and gamified XP ranking for 5,000+ students.";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: "/projects/skill-mapper",
    },
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: "/projects/skill-mapper",
        siteName: "Samiul Alim",
        images: [
            {
                url: "/projects/skill-mapper-programming-hero.png",
                width: 1920,
                height: 911,
                alt: "Skill Mapper assessment platform interface",
            },
        ],
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: pageDescription,
        images: ["/projects/skill-mapper-programming-hero.png"],
    },
};

export default function SkillMapperCaseStudy() {
    return (
        <>
            <BreadcrumbsJsonLd
                items={[
                    { name: "Home", href: siteUrl },
                    { name: "Projects", href: `${siteUrl}/projects` },
                    { name: "Skill Mapper", href: `${siteUrl}/projects/skill-mapper` },
                ]}
            />
            <HeroSection />
            <ExecutiveSummary />
            <ArchitectureDiagram />
            <KeyFeatures />
            <TechnicalDecisions />
            <MetricsSection />
            <ConcurrencyModel />
            <TradeOffs />
            <ChangeStreamOperations />
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
                    Production: 5,000 enrolled students
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
                    Full-lifecycle assessment platform with AI-generated questions, event-driven
                    state machine, and gamified ranking system serving technical skill evaluation at
                    scale.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {[
                        "TypeScript",
                        "Node.js",
                        "MongoDB",
                        "OpenAI",
                        "Gemini",
                        "Redis",
                        "Next.js",
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
                    A technical assessment platform that uses AI to generate questions, evaluate
                    answers, and map student skills to appropriate courses. The system uses an
                    event-driven state machine to govern assessment lifecycles, supports concurrent
                    timed exams with real-time synchronization, and features a gamified XP ranking
                    system across five tiers.
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
        subgraph Frontend
            A[Next.js SSR App]
            B[TanStack Query]
        end

        subgraph API
            C[Express.js API Server]
            D[Zod Validation]
            E[RBAC Middleware]
        end

        subgraph Real-Time
            F[MongoDB Change Streams]
            G[Event Bus]
        end

        subgraph Core Services
            H[State Machine]
            I[AI Question Generator]
            J[Scoring Engine]
            K[Ranking Engine]
        end

        subgraph Storage
            L[(MongoDB)]
            M[(Redis)]
            N[Materialized Leaderboard]
        end

        subgraph AI
            O[OpenAI]
            P[Gemini]
        end

        A --> B
        B --> C
        C --> E
        E --> H
        H --> F
        F --> G
        G --> A
        H --> I
        H --> J
        H --> K
        I --> O
        I --> P
        J --> O
        J --> P
        K --> N
        N --> L
        C --> L
        C --> M
        K --> M`;

    const stateDiagram = `stateDiagram-v2
        [*] --> Draft
        Draft --> Published: Publish event
        Published --> Active: Start event
        Active --> Completed: Time limit / Submit
        Active --> Disqualified: Rule violation
        Completed --> Archived: Archive event
        Disqualified --> Archived: Archive event
        Published --> Draft: Unpublish event`;

    return (
        <section className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">Architecture</h2>
                <MermaidDiagram
                    chart={flowDiagram}
                    caption="System architecture showing frontend, API, real-time sync via change streams, and AI provider integration"
                />
                <h3 className="text-lg font-semibold text-foreground mb-4 mt-8">
                    Assessment Lifecycle State Machine
                </h3>
                <MermaidDiagram
                    chart={stateDiagram}
                    caption="State machine governing assessment lifecycle with guard conditions on each transition"
                />
            </div>
        </section>
    );
}

function KeyFeatures() {
    const features = [
        {
            icon: <GitBranch className="w-5 h-5" />,
            title: "Event-Driven State Machine",
            description:
                "Assessment lifecycle governed by a state machine that prevents invalid state transitions. More reliable than boolean status flags.",
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
                "Pre-computed leaderboard views avoid expensive aggregation queries on every request. They update incrementally on score changes.",
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
            title: "State Machine over Status Flags",
            context:
                "Assessment lifecycles can have invalid transitions (e.g., publishing an incomplete assessment). Boolean flags don't prevent invalid state changes.",
            outcome:
                "An event-driven state machine governs all transitions, preventing invalid state changes and providing a clear audit trail of assessment lifecycle events.",
            icon: <GitBranch className="w-5 h-5" />,
            snippet: `// Event-driven state machine: prevents invalid transitions.
// Guard functions enforce domain rules before allowing changes.
type State = "draft" | "published" | "active" | "graded" | "archived"
type Event = "publish" | "start" | "complete" | "archive"

const machine: Record<State, { event: Event; target: State }[]> = {
    draft:     [{ event: "publish", target: "published" }],
    published: [{ event: "start",   target: "active" }],
    active:    [{ event: "complete", target: "graded" }],
    graded:    [{ event: "archive",  target: "archived" }],
    archived:  [],
}

function transition(current: State, event: Event): State {
    const allowed = machine[current]
    const match = allowed.find(t => t.event === event)
    if (!match) throw new Error(\`Invalid transition: \${current} via \${event}\`)
    return match.target
}`,
            language: "typescript",
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
                "Concurrent timed exams need real-time state synchronization. Polling creates unnecessary load and introduces latency. However, change streams introduce operational complexity: resume token management, oplog size limits, and WebSocket connection scalability.",
            outcome:
                "Change streams provide real-time event notifications without polling overhead. Operational mitigations: resume tokens persisted in a dedicated collection for crash recovery, oplog size monitoring with alerting, WebSocket connections managed via connection pooling with grace period for reconnection. Fallback polling mechanism as safety net if change stream lags beyond threshold.",
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
                    <MetricCard label="Enrolled Students" value="5,000" />
                    <MetricCard label="Daily Active Users" value="500" />
                    <MetricCard label="AI Providers" value="2" />
                    <MetricCard label="Status" value="Production" />
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

function ConcurrencyModel() {
    return (
        <section className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                    Concurrency Model: Timed Exams & Real-Time Sync
                </h2>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                    The hard part of Skill Mapper isn't CRUD it's that hundreds of students take
                    timed exams concurrently, and the system must stay correct under racing
                    submissions, disconnections, and rule violations. Three decisions define the
                    model.
                </p>

                <div className="rounded-2xl border border-gray-100 bg-white/80 p-6 backdrop-blur-sm mb-6">
                    <h3 className="text-base font-semibold text-foreground mb-4">
                        1. Server is the source of truth for the clock
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                        The exam deadline is computed server-side from the moment the assessment
                        becomes active, never from the client's device clock. Client timers are
                        presentation only; every submission carries the server-issued attempt
                        record, so a student who pauses, tabs away, or rewinds their clock gets no
                        advantage. This also means the server can enforce hard cut-off regardless of
                        client state.
                    </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white/80 p-6 backdrop-blur-sm mb-6">
                    <h3 className="text-base font-semibold text-foreground mb-4">
                        2. Single-writer submission via attempt state
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                        Each attempt has an owner and a lifecycle (started → submitted → graded).
                        Submission transitions the attempt state atomically, so two racing "submit"
                        requests can't both win: the state machine accepts the first transition and
                        rejects the second. This gives idempotency a client retry after a network
                        blip is a no-op, not a double grade.
                    </p>
                    <CodeSnippet
                        language="typescript"
                        code={`// Atomic submit: only one transition wins.
// A retried submit sees state already "submitted" -> rejected.
const result = await attempts.collection.findOneAndUpdate(
    { _id: attemptId, status: "active" },
    { $set: { status: "submitted", submittedAt: new Date() } },
    { returnDocument: "after" }
)
if (!result.value) throw new Error("attempt already submitted")`}
                    />
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white/80 p-6 backdrop-blur-sm mb-6">
                    <h3 className="text-base font-semibold text-foreground mb-4">
                        3. Disqualification races resolved by the state machine
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                        Rule violations (e.g., leaving the exam window) can fire close to the submit
                        moment. Instead of a free-floating "disqualify" flag that could race with
                        grading, disqualification is modeled as an event that transitions the
                        attempt state. Whichever event wins the transition, grading logic checks the
                        final state no interleaving where a disqualified attempt gets a grade and a
                        revoked one.
                    </p>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white/80 p-6">
                    <h3 className="text-base font-semibold text-foreground mb-4">
                        What's missing today (honest scope)
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                        At 500 DAU a single MongoDB instance and one app replica are sufficient, so
                        distributed locks aren't needed yet atomic find-and-modify gives
                        single-writer semantics. If this scaled to thousands of concurrent exams,
                        the next step would be moving grading to a queue (reliability +
                        backpressure) and sharding attempts by exam. That's a future trade-off, not
                        one we've needed to make.
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

function ChangeStreamOperations() {
    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <div className="flex items-center gap-3 mb-8">
                    <Zap className="w-6 h-6 text-amber-600" />
                    <h2 className="text-2xl font-bold text-foreground">Change Stream Operations</h2>
                </div>
                <p className="text-sm text-foreground/70 mb-6 leading-relaxed">
                    Change streams power real-time exam synchronization, but they require careful
                    operational management. Here is how each operational concern is addressed:
                </p>
                <div className="space-y-4">
                    <OperationCard
                        concern="Resume Token Management"
                        solution="Resume tokens are persisted to a dedicated MongoDB collection after each batch of events. On restart or crash, the last known token is loaded, ensuring no events are missed. Token staleness is monitored. If a token is too old, the oplog may have cycled, triggering fallback polling."
                    />
                    <OperationCard
                        concern="Oplog Size Monitoring"
                        solution="Oplog size is tracked via MongoDB's rs.status(). Alert triggers when oplog window falls below configured threshold (e.g., 6 hours). Oplog size is sized at deployment to handle peak write volumes during active exam periods."
                    />
                    <OperationCard
                        concern="WebSocket Connection Management"
                        solution="Each client establishes a WebSocket via Socket.IO with heartbeat pings every 30s. Connection pool limits prevent resource exhaustion. On disconnect, clients have a 10s grace window to reconnect and recover their change stream cursor."
                    />
                    <OperationCard
                        concern="Fallback Polling Mechanism"
                        solution="If change stream lag exceeds 5s (detected via timestamp comparison), the system degrades to polling at 2s intervals. This safety net prevents complete synchronization loss if change streams fail or lag significantly."
                    />
                    <OperationCard
                        concern="Connection Scaling"
                        solution="Change streams are multiplexed through a single change stream per collection with fan-out via an internal event bus. This avoids creating individual change streams per connected client, which would not scale."
                    />
                </div>
            </div>
        </section>
    );
}

function OperationCard({ concern, solution }: { concern: string; solution: string }) {
    return (
        <div className="rounded-2xl border border-amber-100 bg-white/80 p-5 backdrop-blur-sm">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
                <div className="sm:col-span-1">
                    <span className="text-xs font-medium text-amber-700">Concern</span>
                    <p className="text-sm text-foreground font-medium mt-0.5">{concern}</p>
                </div>
                <div className="sm:col-span-4">
                    <span className="text-xs font-medium text-emerald-600">Solution</span>
                    <p className="text-sm text-foreground/70 mt-0.5">{solution}</p>
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
                        scenario="Change Stream Resumption Failure"
                        impact="Real-time sync stops, exam state becomes stale"
                        mitigation="Persisted resume tokens enable recovery. Fallback polling activates if lag exceeds threshold. Alert on change stream cursor invalidation."
                    />
                    <FailureModeCard
                        scenario="AI Provider Unavailable"
                        impact="Question generation and scoring fail"
                        mitigation="Automatic failover to secondary AI provider. Queued generation requests with retry. Cached question templates as fallback for common assessment types."
                    />
                    <FailureModeCard
                        scenario="Oplog Window Exceeded"
                        impact="Change stream cannot resume from stored token"
                        mitigation="Oplog size monitoring alerts before window becomes critical. On token expiry, full sync is triggered for affected assessments. Alert triggers manual intervention."
                    />
                    <FailureModeCard
                        scenario="Concurrent Exam Submission Overload"
                        impact="Scoring engine backlog, delayed results"
                        mitigation="Queue-based submission processing with configurable concurrency. Results delivered asynchronously via WebSocket when scoring completes. Exponential backoff for retries."
                    />
                    <FailureModeCard
                        scenario="Leaderboard Materialized View Staleness"
                        impact="Users see outdated rankings"
                        mitigation="Incremental view updates with staleness threshold (max 30s). Forced refresh on high-priority events (assessment completion). Staleness metrics exposed for monitoring."
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
                            "Structured JSON logs with correlation IDs across API, workers, and WebSocket connections",
                            "Assessment lifecycle events logged at INFO: created, started, submitted, scored",
                            "Change stream events logged at DEBUG for troubleshooting sync issues",
                        ]}
                    />
                    <ObservabilityCard
                        title="Metrics"
                        items={[
                            "Active exams, submissions per minute, scoring latency",
                            "AI provider metrics: request count, latency, error rate per provider",
                            "Change stream metrics: lag in ms, events processed, resumption count",
                        ]}
                    />
                    <ObservabilityCard
                        title="Alerting"
                        items={[
                            "Change stream lag exceeding threshold",
                            "AI provider error rate spike",
                            "Scoring queue backlog growing",
                            "Active exam count anomaly (potential DDoS)",
                            "Leaderboard staleness exceeding SLA",
                        ]}
                    />
                    <ObservabilityCard
                        title="Monitoring"
                        items={[
                            "Discord webhook alerts for service downtime via Uptime Kuma",
                            "AI provider health and cost breakdown",
                            "Assessment completion rates and average scores",
                            "System health: change stream status, queue depth, error rates",
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
                        scope="State machine transitions, scoring algorithms, leaderboard calculations"
                        approach="Vitest with exhaustive transition matrix testing. Tests cover: all valid state transitions, all invalid transitions (guard rejection), AI provider response parsing, XP calculation edge cases."
                    />
                    <TestingCard
                        level="Integration Tests"
                        scope="API endpoints with real database, change stream pipeline, AI provider mocks"
                        approach="Testcontainers for MongoDB in CI. Tests verify: full assessment lifecycle, change stream event delivery, concurrent exam submission handling, leaderboard update correctness."
                    />
                    <TestingCard
                        level="E2E Tests"
                        scope="Full assessment flow: login → start exam → submit → view results → leaderboard"
                        approach="Playwright tests in UAT environment. Tests cover: timed exam auto-submission, disqualification on rule violation, AI-generated question rendering, real-time score updates via WebSocket."
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

function ReferencesSection() {
    return (
        <section className="w-full bg-white py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                    References & Verification
                </h2>
                <div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-6 backdrop-blur-sm">
                    <p className="text-sm text-foreground/70 mb-4">
                        This is a production system. The details above reflect my actual work.
                        Additional evidence available upon request:
                    </p>
                    <ul className="space-y-2 text-sm text-foreground/70">
                        <li className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                            Anonymized architecture diagrams and code samples
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                            Platform usage metrics and student engagement data
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
