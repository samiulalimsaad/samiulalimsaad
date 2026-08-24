import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import type { Components } from "react-markdown";
import ReactMarkdown from "react-markdown";
import rehypePrism from "rehype-prism-plus";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import BreadcrumbsJsonLd from "@/components/Breadcrumbs";
import { getAllGistSlugs, getGistBySlug } from "@/lib/gists";
import { SITE_URL as siteUrl } from "@/lib/site";

export async function generateStaticParams() {
    return getAllGistSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const gist = getGistBySlug(slug);
    if (!gist) return { title: "Not Found" };

    const title = `${gist.meta.title} | Technical Gists`;
    const description = gist.meta.description;

    return {
        title,
        description,
        alternates: {
            canonical: `/gists/${slug}`,
        },
        openGraph: {
            title,
            description,
            url: `/gists/${slug}`,
            siteName: "Samiul Alim",
            images: [
                {
                    url: "/avatars/samiul-alim-og.png",
                    width: 600,
                    height: 600,
                    alt: "Samiul Alim, backend-focused full-stack software engineer",
                },
            ],
            type: "article",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/avatars/samiul-alim-og.png"],
        },
    };
}

export default async function GistPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const gist = getGistBySlug(slug);
    if (!gist) notFound();

    const { meta, content } = gist;

    return (
        <section className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-20 px-4 animate-section-in">
            <BreadcrumbsJsonLd
                items={[
                    { name: "Home", href: siteUrl },
                    { name: "Technical Gists", href: `${siteUrl}/gists` },
                    { name: meta.title, href: `${siteUrl}/gists/${slug}` },
                ]}
            />
            <div className="mx-auto w-full max-w-4xl animate-soft-in">
                <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-foreground/60">
                    <Link
                        href="/gists"
                        className="hover:text-cyan-700 transition-colors font-medium"
                    >
                        ← All gists
                    </Link>
                    <span className="text-foreground/30 mx-1">/</span>
                    <span className="text-foreground/80 truncate">{meta.title}</span>
                </div>

                <div className="mb-2 flex flex-wrap gap-2">
                    {meta.tags.map((tag: string) => (
                        <span
                            key={tag}
                            className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-0.5 text-xs font-medium text-cyan-700 ring-1 ring-cyan-100"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <article className="mt-6 rounded-3xl border border-white/70 bg-white/80 p-6 sm:p-10 backdrop-blur-sm shadow-sm">
                    <div className="prose prose-slate max-w-none prose-headings:font-bold prose-h1:text-3xl prose-h1:text-cyan-700 prose-h1:mb-6 prose-h2:text-xl prose-h2:text-indigo-700 prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-lg prose-h3:text-foreground prose-h3:mt-8 prose-h3:mb-3 prose-p:text-foreground/80 prose-p:leading-7 prose-a:text-cyan-700 prose-a:font-medium prose-a:no-underline hover:prose-a:text-indigo-700 prose-strong:text-foreground prose-ul:text-foreground/80 prose-li:marker:text-cyan-500 prose-pre:bg-transparent prose-hr:border-gray-200 prose-blockquote:border-l-cyan-400 prose-blockquote:text-foreground/70">
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw, rehypePrism]}
                            components={markdownComponents}
                        >
                            {content}
                        </ReactMarkdown>
                    </div>
                </article>

                {meta.relatedProject && (
                    <div className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50/70 p-6 backdrop-blur-sm">
                        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500 mb-1">
                            Related Project
                        </p>
                        <Link
                            href={meta.relatedProject.href}
                            className="text-lg font-bold text-indigo-700 hover:text-cyan-700 transition-colors"
                        >
                            {meta.relatedProject.name} →
                        </Link>
                        <p className="text-sm text-indigo-600/70 mt-1">
                            This pattern is used in production in the{" "}
                            {meta.relatedProject.name.toLowerCase()}.
                        </p>
                    </div>
                )}

                <div className="mt-10 text-center">
                    <Link
                        href="/gists"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-all hover:-translate-y-0.5"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10 19l-7-7m0 0l7-7m-7 7h18"
                            />
                        </svg>
                        Back to all gists
                    </Link>
                </div>
            </div>
        </section>
    );
}

function CodeBlock({
    className,
    children,
    inline,
}: {
    className?: string;
    children?: React.ReactNode;
    inline?: boolean;
}) {
    const match = /language-(\w+)/.exec(className ?? "");
    const language = match ? match[1] : "";

    if (!language && !inline) {
        return (
            <code className="diagram-block whitespace-pre text-sm leading-relaxed">{children}</code>
        );
    }

    if (inline) {
        return (
            <code className="text-cyan-800 bg-cyan-50 px-1.5 py-0.5 rounded border border-cyan-100 text-sm font-normal">
                {children}
            </code>
        );
    }

    return (
        <div className="relative group">
            <div className="absolute top-0 right-0 rounded-bl-xl rounded-tr-xl bg-[#334155] px-3 py-1 text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                {language}
            </div>
            <div className="overflow-x-auto">
                <code className="text-sm leading-6 font-mono bg-transparent border-0 p-0">
                    {children}
                </code>
            </div>
        </div>
    );
}

function PreBlock({ children }: { children?: React.ReactNode }) {
    const childArr = React.Children.toArray(children);
    const isDiagram = childArr.some(
        (child) =>
            React.isValidElement(child) &&
            typeof (child.props as Record<string, unknown>)?.className === "string" &&
            ((child.props as Record<string, unknown>).className as string).includes(
                "diagram-block",
            ),
    );

    if (isDiagram) {
        return (
            <div className="overflow-x-auto whitespace-pre text-sm !text-foreground leading-relaxed p-4 border border-gray-200 !rounded-xl !bg-transparent my-4 not-prose">
                {children}
            </div>
        );
    }

    return (
        <pre className="!bg-[#1e293b] !text-[#e2e8f0] !rounded-xl !shadow-lg overflow-x-auto p-5 text-sm leading-6 font-mono">
            {children}
        </pre>
    );
}

function TableWrapper({ children }: { children?: React.ReactNode }) {
    return (
        <div className="overflow-x-auto my-6 rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full border-collapse">{children}</table>
        </div>
    );
}

function TableHead({ children }: { children?: React.ReactNode }) {
    return <thead className="bg-gradient-to-r from-indigo-50 to-cyan-50">{children}</thead>;
}

function TableHeader({ children }: { children?: React.ReactNode }) {
    return (
        <th className="px-4 py-3 text-left text-sm font-semibold text-indigo-700 border-b border-indigo-100">
            {children}
        </th>
    );
}

function TableCell({ children }: { children?: React.ReactNode }) {
    return (
        <td className="px-4 py-3 text-sm text-foreground/80 border-b border-gray-100 bg-white/50">
            {children}
        </td>
    );
}

function Heading1({ children, ...props }: React.ComponentPropsWithoutRef<"h1">) {
    return (
        <h1 className="text-3xl font-bold text-cyan-700 mb-6" {...props}>
            {children}
        </h1>
    );
}

function Heading2({ children, ...props }: React.ComponentPropsWithoutRef<"h2">) {
    return (
        <h2
            className="text-xl font-bold text-indigo-700 mt-10 mb-4 flex items-center gap-2"
            {...props}
        >
            <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-indigo-500 rounded-full inline-block" />
            {children}
        </h2>
    );
}

function Heading3({ children, ...props }: React.ComponentPropsWithoutRef<"h3">) {
    return (
        <h3 className="text-lg font-bold text-foreground mt-8 mb-3" {...props}>
            {children}
        </h3>
    );
}

function CustomLink({ children, href, ...props }: React.ComponentPropsWithoutRef<"a">) {
    const isExternal = typeof href === "string" && href.startsWith("http");
    return (
        <a
            href={href}
            className="text-cyan-700 font-medium no-underline hover:text-indigo-700 transition-colors border-b border-cyan-200 hover:border-indigo-300"
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            {...props}
        >
            {children}
            {isExternal && (
                <svg
                    className="w-3.5 h-3.5 inline ml-0.5 -mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                </svg>
            )}
        </a>
    );
}

function Hr() {
    return <hr className="my-8 border-gray-200" />;
}

function BlockQuote({ children, ...props }: React.ComponentPropsWithoutRef<"blockquote">) {
    return (
        <blockquote
            className="border-l-4 border-l-cyan-400 pl-4 py-1 my-6 text-foreground/70 italic bg-cyan-50/30 rounded-r-lg"
            {...props}
        >
            {children}
        </blockquote>
    );
}

function UnorderedList({ children, ...props }: React.ComponentPropsWithoutRef<"ul">) {
    return (
        <ul className="list-disc pl-6 space-y-1.5 text-foreground/80" {...props}>
            {children}
        </ul>
    );
}

function OrderedList({ children, ...props }: React.ComponentPropsWithoutRef<"ol">) {
    return (
        <ol className="list-decimal pl-6 space-y-1.5 text-foreground/80" {...props}>
            {children}
        </ol>
    );
}

function ListItem({ children, ...props }: React.ComponentPropsWithoutRef<"li">) {
    return (
        <li className="leading-7" {...props}>
            {children}
        </li>
    );
}

const markdownComponents: Components = {
    code: CodeBlock,
    pre: PreBlock,
    table: TableWrapper,
    thead: TableHead,
    th: TableHeader,
    td: TableCell,
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    a: CustomLink,
    hr: Hr,
    blockquote: BlockQuote,
    ul: UnorderedList,
    ol: OrderedList,
    li: ListItem,
};
