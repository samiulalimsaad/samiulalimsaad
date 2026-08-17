import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbsJsonLd from "@/components/Breadcrumbs";
import { getAllGistMeta } from "@/lib/gists";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://samiulalimsaad.vercel.app";

const pageTitle = "Technical Gists | Samiul Alim — Go & TypeScript Patterns";
const pageDescription =
    "Deep-dive code patterns and architectures: CSP/CORS middleware, payment gateway adapters, rate limiters, and TOTP MFA services in Go and TypeScript.";

export const metadata: Metadata = {
    title: pageTitle,
    description: pageDescription,
    alternates: {
        canonical: "/gists",
    },
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: "/gists",
        siteName: "Samiul Alim",
        images: [
            {
                url: "/avatars/samiul-alim-og.png",
                width: 600,
                height: 600,
                alt: "Samiul Alim, backend-focused full-stack software engineer",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: pageDescription,
        images: ["/avatars/samiul-alim-og.png"],
    },
};

const tagColors: Record<string, string> = {
    Go: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    Security: "bg-rose-50 text-rose-700 ring-rose-200",
    Middleware: "bg-amber-50 text-amber-700 ring-amber-200",
    Architecture: "bg-violet-50 text-violet-700 ring-violet-200",
    Payments: "bg-blue-50 text-blue-700 ring-blue-200",
    Authentication: "bg-indigo-50 text-indigo-700 ring-indigo-200",
    MFA: "bg-purple-50 text-purple-700 ring-purple-200",
};

function tagStyle(tag: string) {
    for (const [key, cls] of Object.entries(tagColors)) {
        if (tag.toLowerCase().includes(key.toLowerCase())) return cls;
    }
    return "bg-cyan-50 text-cyan-700 ring-cyan-100";
}

export default function GistsPage() {
    const gists = getAllGistMeta();

    return (
        <section className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-20 px-4 animate-section-in">
            <BreadcrumbsJsonLd
                items={[
                    { name: "Home", href: siteUrl },
                    { name: "Technical Gists", href: `${siteUrl}/gists` },
                ]}
            />
            <div className="mx-auto w-full max-w-6xl animate-soft-in">
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
                        <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                            Technical Gists
                        </span>
                    </h1>
                    <p className="mx-auto max-w-2xl text-base text-foreground/70">
                        Deep-dive code patterns, architectural blueprints, and implementation guides
                        for the tools and systems I build.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {gists.map((gist) => (
                        <Link key={gist.slug} href={`/gists/${gist.slug}`}>
                            <article className="group relative flex h-full flex-col rounded-3xl border border-white/70 bg-white/80 p-7 backdrop-blur-sm shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg animate-card-in">
                                <div className="mb-4 flex flex-wrap gap-1.5">
                                    {gist.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium ring-1 ${tagStyle(tag)}`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h2 className="mb-3 text-xl font-bold text-foreground group-hover:text-cyan-700 transition-colors">
                                    {gist.title}
                                </h2>

                                <p className="text-sm text-foreground/70 leading-relaxed mb-5">
                                    {gist.description}
                                </p>

                                {gist.relatedProject && (
                                    <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50/60 px-3 py-1 text-[11px] font-medium text-indigo-600 self-start">
                                        <svg
                                            className="w-3 h-3"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                                            />
                                        </svg>
                                        {gist.relatedProject.name}
                                    </span>
                                )}

                                <div className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-cyan-700 group-hover:text-indigo-700 transition-colors">
                                    Read full gist
                                    <svg
                                        className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
