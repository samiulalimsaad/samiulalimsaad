import {
    BrainCircuit,
    Bug,
    FileJson,
    LayoutPanelTop,
    Medal,
    Puzzle,
    Shield,
    Users,
    Zap,
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbsJsonLd from "@/components/Breadcrumbs";
import CodeSnippet from "@/components/ui/CodeSnippet";
import MermaidDiagram from "@/components/ui/MermaidDiagram";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://samiulalimsaad.vercel.app";

const pageTitle = "AI Game Platform: 19-Engine Gamified Learning | Case Study";
const pageDescription =
    "AI-powered gamified micro-learning platform with 19 game engines, universal envelope architecture, multi-provider AI pipeline, and server-authoritative scoring.";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: "/projects/ai-game-platform",
    },
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: "/projects/ai-game-platform",
        siteName: "Samiul Alim",
        images: [
            {
                url: "/projects/ai-game-platform.png",
                width: 1920,
                height: 911,
                alt: "AI Game Platform educational games interface",
            },
        ],
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: pageDescription,
        images: ["/projects/ai-game-platform.png"],
    },
};

export default function AIGamePlatformCaseStudy() {
    return (
        <>
            <BreadcrumbsJsonLd
                items={[
                    { name: "Home", href: siteUrl },
                    { name: "Projects", href: `${siteUrl}/projects` },
                    { name: "AI Game Platform", href: `${siteUrl}/projects/ai-game-platform` },
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
                    MVP: 19 game engines, 4 AI providers
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        AI Game Platform
                    </span>
                </h1>
                <p className="text-lg sm:text-xl text-foreground/70 mb-2">
                    AI-Powered Gamified Learning Platform
                </p>
                <p className="text-sm text-foreground/50 max-w-2xl mx-auto mb-6">
                    Gamified micro-learning platform where students learn technical topics by
                    playing interactive games. AI generates structured JSON content per engine the
                    app never receives JSX, HTML, or React from the model. 19 game engines ship as
                    frozen React templates, all driven by a shared Zod schema contract.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {[
                        "TypeScript",
                        "React",
                        "Vite",
                        "Tailwind CSS",
                        "Express",
                        "MongoDB",
                        "Redis",
                        "Zod",
                        "Zustand",
                        "SWR",
                        "better-auth",
                        "Anthropic",
                        "OpenAI",
                        "Gemini",
                        "Turborepo",
                        "Docker",
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
                        href="https://github.com/samiulalimsaad/hackathon-team-undefined-eduplay"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-lg bg-linear-to-r from-cyan-500 to-indigo-500 text-white hover:from-cyan-600 hover:to-indigo-600 transition"
                    >
                        Source Code ↗
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
                        icon={<LayoutPanelTop className="w-5 h-5" />}
                        value="19"
                        label="Game engines, data-driven registry"
                    />
                    <SummaryCard
                        icon={<BrainCircuit className="w-5 h-5" />}
                        value="4"
                        label="AI providers (Anthropic, OpenAI, Gemini, OpenRouter)"
                    />
                    <SummaryCard
                        icon={<FileJson className="w-5 h-5" />}
                        value="Zod"
                        label="Schemas as single source of truth"
                    />
                </div>
                <p className="text-base text-foreground/80 leading-relaxed">
                    A gamified micro-learning platform where students learn technical topics (web
                    dev, DSA, programming) by playing interactive games. The architecture separates
                    game engines (fixed React templates) from game content (AI-generated JSON). A
                    shared schemas package consumed by both the Express backend and React frontend
                    validates every piece of content at both seed time and render time, eliminating
                    the "wrong-shape JSON to broken game" failure mode. 19 engines ship through an
                    extensible 6-seam registry; adding a new engine touches exactly 6 files, never
                    shared code.
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
        subgraph Frontend["Frontend (React + Vite + Tailwind)"]
            A[Engine Renderer: 19 game components]
            B[GameShell: shared chrome + HowToPlay]
            C[Zustand Store: phase machine]
        end

        subgraph Contract["Shared @eduplay/schemas Package"]
            D[Per-Engine Zod Content Schemas]
            E[Universal GameEnvelope]
            F[GameProps Contract]
        end

        subgraph Backend["Backend (Express + TypeScript)"]
            G[REST API: play, score, quiz, content, leaderboard]
            H[AI Validated-Retry Pipeline]
            I[Server-Authoritative Scoring]
            J[Gamification: XP, Badges, Leaderboard]
        end

        subgraph Storage["MongoDB + Redis"]
            K[GameMetadata + GameContent]
            L[Profile + UserProgress + Badge]
            M[Redis: Leaderboard ZSET]
        end

        subgraph AI["AI Providers"]
            N[Anthropic Claude]
            O[OpenAI]
            P[Gemini]
            Q[OpenRouter]
        end

        A --> D
        D --> E
        B --> A
        C --> A
        G --> H
        H --> N
        H --> O
        H --> P
        H --> Q
        I --> G
        J --> G
        G --> K
        G --> L
        G --> M
        E --> G`;

    const userFlow = `sequenceDiagram
        participant U as Student
        participant F as Frontend
        participant B as Backend
        participant DB as MongoDB
        participant AI as AI Provider

        U->>F: Select topic
        F->>B: POST /api/play/start
        B->>B: Select engine from preferences
        B->>AI: Generate inner content
        AI-->>B: Inner JSON (validated via Zod)
        B->>B: Wrap in GameEnvelope
        B->>DB: Persist GameSession
        B-->>F: { engine, playId, contentJson }

        F->>F: EngineRenderer resolves component
        U->>F: Play game
        U->>F: Submit result

        F->>B: POST /api/score { playId, rawResult }
        B->>B: Re-validate content, derive score
        B->>DB: Update Profile.xp, UserProgress
        B-->>F: { learnCard, quiz }

        U->>F: Take quiz
        F->>B: POST /api/quiz-result
        B->>DB: Finalize XP, update leaderboard
        B-->>F: { xp, badges, leaderboard }`;

    return (
        <section className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">Architecture</h2>
                <MermaidDiagram
                    chart={flowDiagram}
                    caption="Four-layer architecture: frontend React engine templates, shared Zod schemas, Express API with AI pipeline, and MongoDB/Redis storage"
                />
                <h3 className="text-lg font-semibold text-foreground mb-4 mt-8">Play Loop Flow</h3>
                <MermaidDiagram
                    chart={userFlow}
                    caption="End-to-end play sequence: topic selection to AI generation to gameplay to scoring to leaderboard update"
                />
            </div>
        </section>
    );
}

function KeyFeatures() {
    const features = [
        {
            icon: <LayoutPanelTop className="w-5 h-5" />,
            title: "19 Game Engines",
            description:
                "Layout Match, Code Assembler, Bug Hunter, Memory Match, Match Connect, Sequence Builder, Sort Categorize, Sequence Sort, Swap Pairs, Fill the Blank, Jigsaw Assembly, Path Connect, Treasure Hunt, Maze Explorer, Hidden Object Challenge, Pit Stop Order, Circuit Wire, Banana Split Race, Lane Racer. Each is a frozen React template driven entirely by JSON  adding content means inserting a new JSON document, never touching engine code.",
        },
        {
            icon: <Puzzle className="w-5 h-5" />,
            title: "Universal Envelope",
            description:
                "A discriminated union wrapper (GameEnvelope) lifts cross-cutting concerns out of individual engines: schema versioning, meta/title, multi-level support, rewards (XP/coins/achievements), timers, assets, audio, accessibility (reduced motion, high contrast, captions), localization, and an extensible ext bag for future signals  all shared, all optional, all forward-compatible.",
        },
        {
            icon: <BrainCircuit className="w-5 h-5" />,
            title: "Multi-Provider AI Pipeline",
            description:
                "Supports Anthropic Claude, OpenAI, Gemini, and OpenRouter through a common provider interface. The validated-retry loop: model outputs inner content for one engine, Zod validates it against the engine's schema, and on failure the system re-prompts with exact validation errors until the shape is correct. All content pre-seeded offline to MongoDB  the app runs fully without any LLM at runtime.",
        },
        {
            icon: <Shield className="w-5 h-5" />,
            title: "Server-Authoritative Scoring",
            description:
                "Clients submit raw results only  never a score. The server re-validates the stored content against the engine's Zod schema, re-derives correctness from the raw result, and returns a server-computed score. No client-provided score field is ever trusted. XP, badges, and leaderboard updates all go through the same server-side validation.",
        },
        {
            icon: <Medal className="w-5 h-5" />,
            title: "Gamification System",
            description:
                "XP and levels awarded per game completion + quiz score. Milestone badges unlock on first win, perfect quiz, topic completion. Global leaderboard ranked by XP  backed by Redis sorted sets (ZSET) for fast rank queries, with MongoDB fallback when Redis is unavailable.",
        },
        {
            icon: <Users className="w-5 h-5" />,
            title: "Preference-Based Engine Selection",
            description:
                "A category taxonomy sits above engines: puzzle, action, card, memory, logic. User preferences pick categories; the selectEngine function maps those to a concrete engine. New engines join an existing category with zero UI change. Onboarding collects preferences for personalized first-play experiences.",
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
            title: "Fixed Templates + AI JSON over Generative UI",
            context:
                "AI-generated UI (JSX, React components from the model) is unreliable, hard to validate, and impossible to guarantee correctness for. Every attempt produces different markup.",
            outcome:
                "Each engine is a frozen React template with a typed GameProps interface. The AI emits only structured JSON content matching a per-engine Zod schema. Adding a new engine means writing a React component and a Zod schema  the AI never generates UI. The system is data-driven, not model-driven.",
            icon: <LayoutPanelTop className="w-5 h-5" />,
            snippet: `// Frozen engine contract  every engine is exactly this:
interface GameProps<T> {
  content: T           // typed per-engine content
  onComplete: (result: unknown) => void  // raw result, never score
}

// Registry: engine → Zod schema. Single source of truth.
const ENGINE_SCHEMAS = {
  "layout-match": LayoutMatchSchema,
  "code-assembler": CodeAssemblerSchema,
  "memory-match": MemoryMatchSchema,
  "match-connect": MatchConnectSchema,
  // ... 15 more engines
} as const;

// AI emits inner content only  server wraps it:
const inner = await generateContent(prompt)
const validated = ENGINE_SCHEMAS[engine].parse(inner)
const envelope = makeEnvelope({ engine, content: validated })`,
            language: "typescript",
        },
        {
            title: "Universal Envelope over Per-Engine Features",
            context:
                "Cross-cutting features (XP, timers, localization, accessibility, rewards, audio) were initially handled inside individual engines, leading to duplicated code and inconsistent behavior across the platform.",
            outcome:
                "A universal GameEnvelope wraps every game. Cross-cutting fields are defined once: rewards, timer, assets, audio, accessibility, localization. Each is optional and forward-compatible. Engines remain focused on their specific mechanic; adding a new envelope feature benefits all 19 engines simultaneously.",
            icon: <Puzzle className="w-5 h-5" />,
            snippet: `// Universal envelope  all but 3 fields optional:
interface GameEnvelope {
  schemaVersion: string        // "1.0"  gates migrations
  engine: Engine               // discriminator
  content: EngineContent       // per-engine AI payload

  // Cross-cutting (shared, optional, forward-compatible):
  meta?: { title?; prompt?; objective?; instructions? }
  levels?: Level[]
  rewards?: { xp?; coins?; achievements?: string[] }
  timer?: { seconds: number }
  assets?: { id: string; kind: string; src: string }[]
  audio?: { music?; sfx?: Record<string, string> }
  accessibility?: { reducedMotion?; highContrast?; captions? }
  localization?: { language: string; strings?: ... }
  ext?: Record<string, unknown> // experimental features
}

// AI never emits the envelope  it emits inner content only.
// Server wraps it deterministically:
const envelope = makeEnvelope({ engine, content, rewards: { xp: 10 } })`,
            language: "typescript",
        },
        {
            title: "Zod Schemas Validated at Both Ends",
            context:
                "AI-generated content with wrong shape breaks games silently. Validating only at seed time misses runtime corruption. Validating only at render time catches problems too late for graceful handling.",
            outcome:
                "The same Zod schema package is imported by both the backend seed script and the frontend renderer. Before insert into MongoDB, the seed script validates AI output and rejects/retries on failure. Before render, the frontend validates content and shows an error state instead of a broken game. Single source of truth for validation logic.",
            icon: <FileJson className="w-5 h-5" />,
            snippet: `// Shared schemas package  consumed by both apps:
// packages/schemas/src/engine.ts
export const ENGINE_SCHEMAS = {
  "code-assembler": CodeAssemblerSchema,
  // ...
} as const

// Backend seed script  validate before insert:
import { ENGINE_SCHEMAS } from "@eduplay/schemas"
try {
  const content = ENGINE_SCHEMAS["code-assembler"].parse(aiOutput)
  await db.collection("gameContents").insertOne({ engine, content })
} catch (err) {
  // ZodError with exact field-level issues
  await retryGenerate(prompt, err.issues)  // re-prompt with errors
}

// Frontend renderer  validate before render:
import { ENGINE_SCHEMAS } from "@eduplay/schemas"
try {
  const content = ENGINE_SCHEMAS[engine].parse(raw.content)
  return <CodeAssembler content={content} onComplete={...} />
} catch {
  return <ErrorState message="Content validation failed" />
}`,
            language: "typescript",
        },
        {
            title: "Server-Authoritative Scoring",
            context:
                "Trusting client-provided scores enables cheating. Computing scores on the client is unreliable (network issues, bugs) and non-authoritative. But re-validating game content on every score request adds complexity.",
            outcome:
                "Clients submit only a raw result (e.g., the order the player assembled). The server re-validates the stored GameSession envelope, derives correctness from the raw result against the engine's Zod schema, and returns a server-computed ScoreOutcome. XP, badge grants, and leaderboard updates all flow through this single authoritative path. No client-provided score field is ever read.",
            icon: <Shield className="w-5 h-5" />,
            snippet: `// Client submits raw result only  never a score:
fetch("/api/score", {
  method: "POST",
  body: JSON.stringify({
    playId: "abc123",
    result: ["l3", "l1", "l2"]  // player's line order
  })
})

// Server re-derives everything:
export function scoreResult(
  engine: Engine,
  content: unknown,  // re-validated from stored GameSession
  result: unknown,   // raw client result
): ScoreOutcome {
  const validated = ENGINE_SCHEMAS[engine].parse(content)
  const correct = deriveCorrectness(engine, validated, result)
  return {
    valid: true,
    correct,
    score: correct ? computeXp(engine, validated) : 0,
    userAnswer: formatResult(engine, result),
    correctAnswer: formatCorrectAnswer(engine, validated),
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
                    <MetricCard label="Game Engines" value="19" />
                    <MetricCard label="Schema Files" value="27" />
                    <MetricCard label="API Route Groups" value="15" />
                    <MetricCard label="AI Providers" value="4" />
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
                        decision="Universal envelope vs flat per-engine content"
                        pro="Cross-cutting features (rewards, timers, localization, accessibility) benefit all 19 engines without duplication. Adding a new envelope feature requires zero engine changes."
                        con="Every game includes optional fields most don't use. The envelope adds indirection: content is nested inside, not flat. Schema evolution requires versioning on the envelope level."
                    />
                    <TradeOffCard
                        decision="Offline seed vs runtime AI generation"
                        pro="Zero runtime dependency on LLM availability. Content is deterministic and testable. Faster play-start since no generation latency. All content verified at seed time."
                        con="Content is static until re-seeded. Cannot personalize per player in real-time. Requires a seed script run as a deployment step. New topics need re-seeding before playable."
                    />
                    <TradeOffCard
                        decision="Fixed engine templates vs fully generative"
                        pro="Predictable rendering, testable components, deterministic gameplay. Zod schemas have a known shape to validate against. Six-seam checklist makes adding new engines mechanical."
                        con="Game mechanic is limited to what templates support. Adding a new engine requires writing a React component plus a Zod schema. AI-generated UI could theoretically support more diverse interactions."
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
                        scenario="Wrong-shape AI JSON"
                        impact="Game content fails validation. No game can be generated for the subtopic."
                        mitigation="Per-engine Zod schemas catch shape mismatches at seed time. Validated-retry loop re-prompts the model with exact ZodError issues until the content fits the schema. If retries exhaust, the seed script logs the failure and skips that subtopic  no broken content enters the database."
                    />
                    <FailureModeCard
                        scenario="LLM unavailable at runtime"
                        impact="Play start fails because no content can be generated."
                        mitigation="All content is pre-seeded offline. The API key can be revoked entirely and the app still serves every game from cached MongoDB documents. This is verified by literally deleting the API key during testing  the play loop continues working."
                    />
                    <FailureModeCard
                        scenario="Score cheating via modified client"
                        impact="Users submit inflated scores to manipulate leaderboard rankings."
                        mitigation="Server-authoritative scoring: the server re-validates stored game content, re-derives correctness from the raw result, and computes the score. No client-provided score field is ever read. XP, badges, and leaderboard updates all flow through this single server path."
                    />
                    <FailureModeCard
                        scenario="Engine/content coupling drift"
                        impact="A schema change in one engine breaks content validation for existing seeded games."
                        mitigation="GameEnvelope.schemaVersion gates migrations. Per-engine Zod schemas are versioned independently. The seed script re-validates all existing content on version bumps. The ext bag in the envelope absorbs experimental fields without schema version bumps."
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

function LessonsLearned() {
    return (
        <section className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-16 px-4">
            <div className="mx-auto w-full max-w-4xl">
                <h2 className="text-2xl font-bold text-foreground mb-8">What I Learned</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <LessonCard
                        icon={<FileJson className="w-5 h-5" />}
                        title="Schema-First Contracts Prevent Integration Bugs"
                        description="Shared Zod schemas between backend and frontend eliminated an entire class of bugs. If content validated at seed time, it renders correctly at game time. No more 'works in seed, breaks in render' issues."
                    />
                    <LessonCard
                        icon={<LayoutPanelTop className="w-5 h-5" />}
                        title="Data-Driven Registries Scale Better Than Conditionals"
                        description="Mapping engine strings to schemas, components, prompts, and scoring functions through registries (not if/else chains) makes adding a new engine a mechanical 6-seam checklist instead of a risky cross-file refactor."
                    />
                    <LessonCard
                        icon={<BrainCircuit className="w-5 h-5" />}
                        title="Validated-Retry Is Essential for AI Output Reliability"
                        description="AI models produce wrong-shaped JSON regularly. Passing Zod validation errors back as a re-prompt signal turns an unreliable model output into a reliable data pipeline. The system never stores unvalidated content."
                    />
                    <LessonCard
                        icon={<Zap className="w-5 h-5" />}
                        title="Separating Metadata, Content, and Progress Prevents Tech Debt"
                        description="Three distinct stores with different lifecycles: searchable metadata (cheap queries), heavy content (lazy-loaded), per-user progress (write-heavy). Mixing them makes lists slow, definitions hard to cache, and progress tracking convoluted."
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
                        This is a public open-source project. The details above reflect actual
                        development work:
                    </p>
                    <ul className="space-y-2 text-sm text-foreground/70">
                        <li className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                            Full source code:{" "}
                            <a
                                href="https://github.com/samiulalimsaad/hackathon-team-undefined-eduplay"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-medium text-indigo-600 hover:text-indigo-800"
                            >
                                github.com/samiulalimsaad/hackathon-team-undefined-eduplay
                            </a>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                            Architecture document (ARCHITECTURE.md) covers universal envelope
                            design, 4-layer system architecture, engine registry checklist, MongoDB
                            schema, and future expansion roadmap
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                            Product requirements document (PRD.md) with success metrics, acceptance
                            criteria, anti-cheat specification, risk analysis, and team workflow
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400" />
                            19 playable game engine React components with per-engine Zod content
                            schemas, prompt builders, and scoring logic
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
