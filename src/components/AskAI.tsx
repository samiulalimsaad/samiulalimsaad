"use client";

import { useState } from "react";
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
    const [status, setStatus] = useState("");
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
        <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 p-4 text-left">
            <p className="text-sm font-semibold text-indigo-900">Ask AI about my work</p>
            <p className="mt-1 text-xs text-indigo-900/70">
                Use public context page. No phone or private data included.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
                {platforms.map((platform) => (
                    <a
                        key={platform.name}
                        className={`rounded-full px-3 py-1.5 text-xs font-semibold ${platform.className}`}
                        href={platform.href}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Open {platform.name}
                    </a>
                ))}
                <button
                    type="button"
                    onClick={copyPrompt}
                    className="rounded-full border border-indigo-200 bg-white px-3 py-1.5 text-xs font-semibold text-indigo-700"
                >
                    Copy prompt
                </button>
            </div>
            <p className="mt-2 min-h-4 text-xs text-indigo-700" role="status" aria-live="polite">
                {status}
            </p>
            <p className="text-[11px] leading-5 text-indigo-900/60">
                URL retrieval depends on platform settings. Copy prompt is reliable fallback.
            </p>
        </div>
    );
}
