import type { Metadata } from "next";
import { getAiContext, SITE_URL } from "@/lib/knowledge";

export const metadata: Metadata = {
    title: "AI Context | Samiul Alim",
    description: "Canonical, provenance-aware professional context for Samiul Alim.",
    alternates: { canonical: "/ai-context" },
};

export default function AiContextPage() {
    const context = getAiContext();
    const sections = context.split("\n\n");
    return (
        <article className="mx-auto max-w-4xl px-4 py-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ProfilePage",
                        "@id": `${SITE_URL}/ai-context#profile`,
                        url: `${SITE_URL}/ai-context`,
                        name: "AI context for Samiul Alim",
                        dateModified: "2026-08-24",
                        mainEntity: { "@id": `${SITE_URL}/#person` },
                    }),
                }}
            />
            <p className="mb-4 text-sm text-foreground/60">Canonical context · {SITE_URL}</p>
            <h1 className="mb-6 text-3xl font-bold">AI context for Samiul Alim</h1>
            <p className="mb-8 max-w-2xl text-sm leading-6 text-foreground/70">
                Public, provenance-aware professional information. Missing information is not
                implied.
            </p>
            <div className="space-y-8">
                {sections.slice(1).map((section) => {
                    const [heading, ...body] = section.split("\n");
                    return (
                        <section
                            key={heading}
                            aria-labelledby={heading.replaceAll(" ", "-").toLowerCase()}
                        >
                            <h2
                                id={heading.replaceAll(" ", "-").toLowerCase()}
                                className="mb-3 text-xl font-bold text-indigo-700"
                            >
                                {heading.replace(/^## /, "")}
                            </h2>
                            <div className="whitespace-pre-wrap rounded-2xl border border-zinc-200 bg-zinc-50 p-5 text-sm leading-7 text-foreground/80">
                                {body.join("\n")}
                            </div>
                        </section>
                    );
                })}
            </div>
        </article>
    );
}
