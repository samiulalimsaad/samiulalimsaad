/**
 * Generic, type-safe state machine with transition guards, side-effect hooks,
 * and event sourcing support.
 *
 * Prevents invalid transitions by defining the full transition table at
 * construction time. Every transition is logged for audit trail support.
 */

type State = string;
type Event = string;

interface Transition<S extends State, E extends Event> {
    from: S;
    to: S;
    event: E;
    guard?: (context: TransitionContext<S, E>) => boolean;
    onEnter?: (context: TransitionContext<S, E>) => void | Promise<void>;
    onExit?: (context: TransitionContext<S, E>) => void | Promise<void>;
}

interface TransitionContext<S extends State, E extends Event> {
    from: S;
    to: S;
    event: E;
    payload?: unknown;
    timestamp: number;
}

interface StateMachineConfig<S extends State, E extends Event> {
    initial: S;
    transitions: Transition<S, E>[];
    onTransition?: (ctx: TransitionContext<S, E>) => void;
    onError?: (error: Error, ctx: { state: S; event: E }) => void;
}

interface StateMachineSnapshot<S extends State> {
    state: S;
    history: Array<{ state: S; timestamp: number }>;
    transitionCount: number;
}

class StateMachine<S extends State, E extends Event> {
    private current: S;
    private history: Array<{ state: S; timestamp: number }> = [];
    private transitionCount = 0;
    private transitions: Map<string, Transition<S, E>> = new Map();
    private onTransition?: (ctx: TransitionContext<S, E>) => void;
    private onError?: (error: Error, ctx: { state: S; event: E }) => void;

    constructor(config: StateMachineConfig<S, E>) {
        this.current = config.initial;
        this.onTransition = config.onTransition;
        this.onError = config.onError;

        this.history.push({ state: config.initial, timestamp: Date.now() });

        for (const t of config.transitions) {
            const key = `${t.from}::${t.event}`;
            if (this.transitions.has(key)) {
                throw new Error(`Duplicate transition: ${t.from} --${t.event}-->`);
            }
            this.transitions.set(key, t);
        }
    }

    /** Current state (read-only). */
    get state(): S {
        return this.current;
    }

    /** Check if an event can be fired from the current state. */
    canTransition(event: E): boolean {
        const key = `${this.current}::${event}`;
        const t = this.transitions.get(key);
        if (!t) return false;

        if (t.guard) {
            return t.guard({
                from: this.current,
                to: t.to,
                event,
                timestamp: Date.now(),
            });
        }
        return true;
    }

    /** Fire an event. Throws if the transition is invalid. */
    async fire(event: E, payload?: unknown): Promise<S> {
        const key = `${this.current}::${event}`;
        const t = this.transitions.get(key);

        if (!t) {
            const err = new Error(
                `Invalid transition: ${this.current} does not accept event "${event}"`
            );
            this.onError?.(err, { state: this.current, event });
            throw err;
        }

        const ctx: TransitionContext<S, E> = {
            from: this.current,
            to: t.to,
            event,
            payload,
            timestamp: Date.now(),
        };

        // Evaluate guard.
        if (t.guard && !t.guard(ctx)) {
            const err = new Error(
                `Guard rejected: ${this.current} --${event}--> ${t.to}`
            );
            this.onError?.(err, { state: this.current, event });
            throw err;
        }

        // Execute lifecycle hooks.
        await t.onExit?.(ctx);
        this.current = t.to;
        await t.onEnter?.(ctx);

        // Record history and notify.
        this.history.push({ state: t.to, timestamp: ctx.timestamp });
        this.transitionCount++;
        this.onTransition?.(ctx);

        return this.current;
    }

    /** Take a snapshot for event sourcing / audit. */
    snapshot(): StateMachineSnapshot<S> {
        return {
            state: this.current,
            history: [...this.history],
            transitionCount: this.transitionCount,
        };
    }

    /** Restore from a snapshot (event sourcing replay). */
    restore(snapshot: StateMachineSnapshot<S>): void {
        this.current = snapshot.state;
        this.history = [...snapshot.history];
        this.transitionCount = snapshot.transitionCount;
    }
}

// --- Example: Assessment Lifecycle (Skill Mapper) ---

type AssessmentState = "draft" | "published" | "active" | "completed" | "archived";
type AssessmentEvent = "publish" | "start" | "submit" | "complete" | "archive";

const assessmentTransitions: Transition<AssessmentState, AssessmentEvent>[] = [
    { from: "draft", to: "published", event: "publish" },
    {
        from: "published",
        to: "active",
        event: "start",
        onEnter: (ctx) => {
            console.log(`Assessment activated at ${new Date(ctx.timestamp).toISOString()}`);
        },
    },
    {
        from: "active",
        to: "completed",
        event: "submit",
        guard: (ctx) => {
            const submission = ctx.payload as { answers: unknown[] } | undefined;
            return submission !== undefined && submission.answers.length > 0;
        },
    },
    {
        from: "completed",
        to: "archived",
        event: "archive",
        onExit: (ctx) => {
            console.log(`Archiving assessment, transition count: completed`);
        },
    },
];

function createAssessmentStateMachine() {
    return new StateMachine<AssessmentState, AssessmentEvent>({
        initial: "draft",
        transitions: assessmentTransitions,
        onTransition: (ctx) => {
            console.log(`[transition] ${ctx.from} --> ${ctx.to} (event: ${ctx.event})`);
        },
        onError: (err, ctx) => {
            console.error(`[error] state=${ctx.state} event=${ctx.event}: ${err.message}`);
        },
    });
}

export { StateMachine, createAssessmentStateMachine };
export type { State, Event, Transition, TransitionContext, StateMachineConfig, StateMachineSnapshot };
