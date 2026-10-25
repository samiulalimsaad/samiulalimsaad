import { Award, BadgeCheck, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/certifications";

export default function Certifications() {
    return (
        <section
            id="certifications"
            className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-20 px-4 animate-section-in"
        >
            <div className="mx-auto w-full max-w-6xl">
                <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        Certifications
                    </span>
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-center text-sm sm:text-base text-foreground/70">
                    Verified Coursera specializations across cloud, architecture, security, and
                    DevOps.
                </p>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((certification) => (
                        <article
                            key={certification.id}
                            className="flex flex-col gap-3 rounded-2xl border border-gray-200 bg-white/80 p-5 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md animate-card-in"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-linear-to-br from-cyan-500 to-indigo-500 text-white shadow-sm">
                                    <Award size={18} />
                                </span>
                                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-100 bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
                                    <BadgeCheck size={11} /> Verified
                                </span>
                            </div>

                            <div>
                                <h3 className="text-base font-semibold leading-snug text-cyan-700">
                                    {certification.name}
                                </h3>
                                <p className="mt-1 text-xs text-foreground/60">
                                    {certification.issuer}
                                </p>
                            </div>

                            <p className="text-[11px] leading-relaxed text-foreground/70">
                                {certification.focus}
                            </p>

                            <div className="mt-auto flex items-center justify-between gap-2 border-t border-gray-100 pt-3">
                                <span className="text-[11px] text-foreground/50">
                                    {certification.completed}
                                </span>
                                <a
                                    href={certification.verifyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Verify ${certification.name} on Coursera`}
                                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-600 transition hover:text-cyan-600"
                                >
                                    Verify <ExternalLink size={11} />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
