import { skills } from "@/lib/skills";
import { ChevronDown } from "lucide-react";

export default function Skills() {
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
                <p className="mx-auto mb-10 max-w-2xl text-center text-sm sm:text-base text-foreground/70">
                    Tools I use in production systems. Familiar items from
                    learning and competitive programming are marked differently.
                </p>
                <div className="grid gap-8 md:grid-cols-2">
                    {skills.map((group) => (
                        <SkillCard key={group.category} group={group} />
                    ))}
                </div>
            </div>
        </section>
    );
}

type SkillCardProps = {
    group: (typeof skills)[number];
};

function SkillCard({ group }: SkillCardProps) {
    const productionItems = group.items.filter(
        (i) => i.level === "production",
    );
    const previewItemLimit = 6;

    return (
        <details className="group flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white/80 p-5 backdrop-blur-sm transition hover:-translate-y-1 animate-card-in">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-2 [&::-webkit-details-marker]:hidden">
                <div className="space-y-1">
                    <h3 className="text-lg sm:text-xl font-semibold text-cyan-700">
                        {group.category}
                    </h3>
                    <p className="text-[11px] font-medium text-foreground/60 max-w-md">
                        {group.context}
                    </p>
                </div>
                <ChevronDown className="mt-1 h-4 w-4 shrink-0 text-cyan-500 transition-transform duration-200 group-open:rotate-180" />
            </summary>

            <div className="mt-3 flex flex-wrap gap-2 group-open:hidden">
                {productionItems.slice(0, previewItemLimit).map((item) => (
                    <span
                        key={item.name}
                        className="rounded-full border border-cyan-100 bg-linear-to-r from-cyan-50 via-white to-indigo-50 px-3 py-1 text-[11px] sm:text-xs font-medium text-foreground hover:border-cyan-200"
                    >
                        {item.name}
                    </span>
                ))}
                {group.items.length > previewItemLimit && (
                    <span className="rounded-full border border-cyan-100/70 bg-white/80 px-3 py-1 text-[11px] sm:text-xs font-medium text-foreground/60">
                        +{group.items.length - previewItemLimit} more
                    </span>
                )}
            </div>

            <div className="mt-3 max-h-0 overflow-hidden opacity-0 translate-y-1 transition-all duration-300 ease-out group-open:max-h-[1000px] group-open:opacity-100 group-open:translate-y-0 group-open:overflow-visible">
                <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                        <span
                            key={item.name}
                            className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] sm:text-xs font-medium ${
                                item.level === "production"
                                    ? "border border-cyan-100 bg-linear-to-r from-cyan-50 via-white to-indigo-50 text-foreground hover:border-cyan-200"
                                    : "border border-dashed border-gray-200 bg-white/60 text-foreground/50 hover:border-gray-300"
                            }`}
                        >
                            {item.name}
                            {item.level === "familiar" && (
                                <span className="ml-1.5 text-[9px] text-foreground/40 font-normal">
                                    familiar
                                </span>
                            )}
                        </span>
                    ))}
                </div>
            </div>
        </details>
    );
}
