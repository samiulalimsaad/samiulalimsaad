"use client";

import { Sparkles, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AI_CONTEXT_URL, absoluteUrl } from "@/lib/site";

const prompt = `You are answering questions about Samiul Alim. Use these authoritative public sources when your platform supports retrieval: ${absoluteUrl("/llms.txt")} and ${AI_CONTEXT_URL}. Do not invent facts. If information is unavailable in these sources, say so. Cite relevant source pages and suggest recruiter-relevant follow-up questions. Start by summarizing Samiul's documented backend/platform experience, employment timeline, and high-signal technologies.`;

const platforms = [
    {
        name: "ChatGPT",
        href: `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`,
        className:
            "bg-linear-to-r from-cyan-500 to-indigo-500 text-white hover:from-cyan-600 hover:to-indigo-600",
    },
    {
        name: "Gemini",
        href: `https://gemini.google.com/app?prompt=${encodeURIComponent(prompt)}`,
        className:
            "border border-cyan-100 bg-white/80 text-cyan-700 hover:border-cyan-300 hover:bg-cyan-50/60",
    },
    {
        name: "Claude",
        href: `https://claude.ai/new?q=${encodeURIComponent(prompt)}`,
        className:
            "border border-cyan-100 bg-white/80 text-cyan-700 hover:border-cyan-300 hover:bg-cyan-50/60",
    },
    {
        name: "Grok",
        href: "https://grok.com/",
        className:
            "border border-cyan-100 bg-white/80 text-cyan-700 hover:border-cyan-300 hover:bg-cyan-50/60",
    },
];

export default function AskAI() {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!open) return;

        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setOpen(false);
                triggerRef.current?.focus();
            }
        }

        function handlePointerDown(event: PointerEvent) {
            if (event.target instanceof Node && !containerRef.current?.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("keydown", handleKeyDown);
        document.addEventListener("pointerdown", handlePointerDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.removeEventListener("pointerdown", handlePointerDown);
        };
    }, [open]);

    async function copyPrompt() {
        try {
            await navigator.clipboard.writeText(prompt);
            setStatus("Prompt copied");
        } catch {
            const area = document.createElement("textarea");
            area.value = prompt;
            area.setAttribute("readonly", "");
            area.style.position = "fixed";
            area.style.opacity = "0";
            document.body.append(area);
            area.select();
            document.execCommand("copy");
            area.remove();
            setStatus("Prompt copied");
        }
    }

    return (
        <div ref={containerRef} className="relative">
            <button
                ref={triggerRef}
                type="button"
                aria-expanded={open}
                aria-haspopup="dialog"
                aria-controls="ask-ai-popup"
                onClick={() => setOpen((value) => !value)}
                className="group inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/90 px-5 py-2 text-sm font-semibold text-cyan-700 transition hover:border-cyan-300 hover:bg-cyan-50/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                <Sparkles
                    size={15}
                    aria-hidden="true"
                    className="motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:rotate-12 motion-safe:group-hover:scale-125 motion-safe:group-focus-visible:rotate-12"
                />
                Ask AI
            </button>

            {open && (
                <div
                    id="ask-ai-popup"
                    role="dialog"
                    aria-label="Ask AI about Samiul Alim"
                    className="fixed inset-x-4 bottom-4 z-50 max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl border border-white/70 bg-linear-to-br from-white via-cyan-50/40 to-indigo-50/40 p-4 text-left shadow-xl shadow-sky-500/15 backdrop-blur-sm md:absolute md:inset-x-auto md:bottom-auto md:right-0 md:top-[calc(100%+0.75rem)] md:w-[22rem]"
                >
                    <div className="flex items-start justify-between gap-4">
                        <p className="text-sm font-semibold text-cyan-700">Ask AI about my work</p>
                        <button
                            type="button"
                            aria-label="Close Ask AI popup"
                            onClick={() => {
                                setOpen(false);
                                triggerRef.current?.focus();
                            }}
                            className="-mr-1 -mt-1 rounded-full p-1 text-cyan-600 transition hover:bg-cyan-50 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <X size={18} aria-hidden="true" />
                        </button>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-foreground/70">
                        Public context only. No phone or private data included.
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                        {platforms.map((platform) => (
                            <a
                                key={platform.name}
                                className={`rounded-lg px-3 py-2 text-center text-xs font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${platform.className}`}
                                href={platform.href}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Open {platform.name}
                            </a>
                        ))}
                    </div>
                    <button
                        type="button"
                        onClick={copyPrompt}
                        className="mt-2 w-full rounded-lg border border-cyan-100 bg-white/80 px-3 py-2 text-xs font-semibold text-cyan-700 transition hover:border-cyan-300 hover:bg-cyan-50/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Copy prompt
                    </button>
                    <p
                        className="mt-2 min-h-4 text-xs text-cyan-700"
                        role="status"
                        aria-live="polite"
                    >
                        {status}
                    </p>
                    <p className="text-[11px] leading-5 text-foreground/60">
                        URL retrieval depends on platform settings. Copy prompt is reliable
                        fallback.
                    </p>
                </div>
            )}
        </div>
    );
}
