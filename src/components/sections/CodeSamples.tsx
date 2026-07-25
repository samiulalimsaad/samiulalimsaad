import { ExternalLink } from "lucide-react";
import { codeSampleGists } from "@/lib/gists";

export default function CodeSamples() {
    return (
        <section
            id="code-samples"
            className="w-full bg-linear-to-b from-sky-50/60 via-white to-indigo-50/60 py-20 px-4 animate-section-in"
        >
            <div className="mx-auto w-full max-w-6xl">
                <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        Code Samples
                    </span>
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-center text-sm sm:text-base text-foreground/70">
                    Sanitized patterns from production systems. Each gist demonstrates a reusable
                    approach used across multiple projects.
                </p>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {codeSampleGists.map((gist) => (
                        <a
                            key={gist.id}
                            href={gist.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col rounded-2xl border border-gray-200 bg-white/80 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md animate-card-in"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <span className="inline-flex items-center rounded-full border border-cyan-100 bg-cyan-50 px-2.5 py-0.5 text-[10px] font-medium text-cyan-700">
                                    {gist.language}
                                </span>
                                <span className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-2.5 py-0.5 text-[10px] font-medium text-indigo-700">
                                    {gist.pattern}
                                </span>
                            </div>
                            <h3 className="text-base font-semibold text-cyan-700 mb-1.5">
                                {gist.title}
                            </h3>
                            <p className="text-xs text-foreground/70 leading-relaxed mb-3 flex-1">
                                {gist.description}
                            </p>
                            <div className="flex items-center justify-between">
                                <span className="text-[10px] text-foreground/50">
                                    Used in: {gist.usedIn}
                                </span>
                                <ExternalLink
                                    size={14}
                                    className="text-foreground/30 transition group-hover:text-cyan-600"
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
