"use client";

import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AI_CONTEXT_URL, absoluteUrl } from "@/lib/site";

const prompt = `You are answering questions about Samiul Alim. Use these authoritative public sources when your platform supports retrieval: ${absoluteUrl("/llms.txt")} and ${AI_CONTEXT_URL}. Do not invent facts. If information is unavailable in these sources, say so. Cite relevant source pages and suggest recruiter-relevant follow-up questions. Start by summarizing Samiul's documented backend/platform experience, employment timeline, and high-signal technologies.`;

const platforms = [
    {
        name: "ChatGPT",
        href: `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`,
        className: "bg-indigo-600 text-white",
    },
    {
        name: "Gemini",
        href: `https://gemini.google.com/app?prompt=${encodeURIComponent(prompt)}`,
        className: "border border-indigo-200 bg-white text-indigo-700",
    },
    {
        name: "Claude",
        href: `https://claude.ai/new?q=${encodeURIComponent(prompt)}`,
        className: "border border-indigo-200 bg-white text-indigo-700",
    },
    {
        name: "Grok",
        href: "https://grok.com/",
        className: "border border-indigo-200 bg-white text-indigo-700",
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
                className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50/80 px-5 py-2 text-sm font-semibold text-indigo-700 transition hover:border-indigo-300 hover:bg-indigo-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                Ask AI
            </button>

            {open && (
                <div
                    id="ask-ai-popup"
                    role="dialog"
                    aria-label="Ask AI about Samiul Alim"
                    className="fixed inset-x-4 bottom-4 z-50 max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl border border-indigo-100 bg-white p-4 text-left shadow-xl shadow-indigo-950/10 md:absolute md:inset-x-auto md:bottom-auto md:right-0 md:top-[calc(100%+0.75rem)] md:w-[22rem]"
                >
                    <div className="flex items-start justify-between gap-4">
                        <p className="text-sm font-semibold text-indigo-900">
                            Ask AI about my work
                        </p>
                        <button
                            type="button"
                            aria-label="Close Ask AI popup"
                            onClick={() => {
                                setOpen(false);
                                triggerRef.current?.focus();
                            }}
                            className="-mr-1 -mt-1 rounded-full p-1 text-indigo-500 transition hover:bg-indigo-50 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <X size={18} aria-hidden="true" />
                        </button>
                    </div>
                    <p className="mt-1 text-xs leading-5 text-indigo-900/70">
                        Public context only. No phone or private data included.
                    </p>
                    <div className="mt-3 grid grid-cols-2 gap-2">
                        {platforms.map((platform) => (
                            <a
                                key={platform.name}
                                className={`rounded-lg px-3 py-2 text-center text-xs font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${platform.className}`}
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
                        className="mt-2 w-full rounded-lg border border-indigo-200 bg-white px-3 py-2 text-xs font-semibold text-indigo-700 transition hover:bg-indigo-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Copy prompt
                    </button>
                    <p
                        className="mt-2 min-h-4 text-xs text-indigo-700"
                        role="status"
                        aria-live="polite"
                    >
                        {status}
                    </p>
                    <p className="text-[11px] leading-5 text-indigo-900/60">
                        URL retrieval depends on platform settings. Copy prompt is reliable
                        fallback.
                    </p>
                </div>
            )}
        </div>
    );
}
