"use client";

import { skillTiers } from "@/lib/skills";
import { useState } from "react";

export default function Skills() {
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});

    return (
        <section
            id="skills"
            className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-20 px-4 animate-section-in"
        >
            <div className="mx-auto w-full max-w-6xl">
                <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        Skills
                    </span>
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-center text-sm sm:text-base text-zinc-600">
                    Technologies and tools I use to design, build, and ship
                    modern web applications.
                </p>
                <div className="grid gap-8 md:grid-cols-2">
                    {skillTiers.map((tier) => (
                        <SkillCard
                            key={tier.id}
                            tier={tier}
                            isExpanded={!!expanded[tier.id]}
                            onToggle={() =>
                                setExpanded((prev) => ({
                                    ...prev,
                                    [tier.id]: !prev[tier.id],
                                }))
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

type SkillCardProps = {
    tier: (typeof skillTiers)[number];
    isExpanded: boolean;
    onToggle: () => void;
};

function SkillCard({ tier, isExpanded, onToggle }: SkillCardProps) {
    const visibleGroups = isExpanded ? tier.groups : tier.groups.slice(0, 2);

    return (
        <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white/80 p-5 backdrop-blur-sm transition hover:-translate-y-1 animate-card-in">
            <div className="space-y-1">
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-700">
                    {tier.label}
                </h3>
                {tier.description && (
                    <p className="text-xs sm:text-sm text-zinc-600">
                        {tier.description}
                    </p>
                )}
            </div>
            <div className="flex flex-col gap-3">
                {visibleGroups.map((group) => (
                    <div key={group.title} className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-wide text-cyan-500">
                            {group.title}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {group.items.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-cyan-100 bg-linear-to-r from-cyan-50 via-white to-indigo-50 px-3 py-1 text-[11px] sm:text-xs font-medium text-zinc-800 hover:border-cyan-200"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            {tier.groups.length > 2 && (
                <button
                    type="button"
                    onClick={onToggle}
                    className="self-start rounded-full border border-cyan-100 bg-white/80 px-3 py-1 text-[11px] font-medium text-cyan-700 hover:border-cyan-200 hover:bg-cyan-50/80"
                >
                    {isExpanded ? "Show less" : "Show more"}
                </button>
            )}
        </div>
    );
}
