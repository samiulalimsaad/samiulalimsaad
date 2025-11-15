import { fetchMediumFeed } from "@/lib/medium";
import Link from "next/link";

function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    if (Number.isNaN(date.getTime())) return "";
    return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

export default async function Blog() {
    const feed = await fetchMediumFeed();
    const posts = feed?.items?.slice(0, 3) ?? [];

    if (!feed || posts.length === 0) {
        return null;
    }

    return (
        <section
            id="blogs"
            className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-20 px-4"
        >
            <div className="mx-auto w-full max-w-6xl">
                <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        Latest from Medium
                    </span>
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-center text-sm sm:text-base text-zinc-600">
                    A few recent articles I&apos;ve written on Medium. For more,
                    visit my full profile.
                </p>

                <div className="grid gap-6 md:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="flex h-full flex-col rounded-3xl border border-white/70 bg-white/80 p-5 backdrop-blur-sm shadow-sm transition hover:-translate-y-1"
                        >
                            <h3 className="mb-2 line-clamp-2 text-lg font-semibold text-indigo-700">
                                {post.title}
                            </h3>
                            <p className="mb-3 text-xs text-zinc-500">
                                {formatDate(post.published)}
                            </p>
                            {post.category && post.category.length > 0 && (
                                <div className="mb-3 flex flex-wrap gap-2">
                                    {post.category.slice(0, 3).map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center rounded-full bg-cyan-50 px-2 py-0.5 text-[11px] font-medium text-cyan-700 ring-1 ring-cyan-100"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                            <p className="mb-4 line-clamp-3 text-sm text-zinc-700">
                                {post.content
                                    ?.replace(/<[^>]*>/g, " ")
                                    .replace(/\s+/g, " ")
                                    .trim()
                                    .slice(0, 160) || ""}
                                {post.content && post.content.length > 0
                                    ? "…"
                                    : ""}
                            </p>
                            <div className="mt-auto">
                                <a
                                    href={post.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm font-semibold text-cyan-700 hover:text-indigo-700"
                                >
                                    Read on Medium
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-6 flex justify-center">
                    <Link
                        href="/blogs"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full border border-cyan-100 bg-white/80 px-4 py-1 text-xs font-medium text-cyan-700 hover:border-cyan-300 hover:bg-cyan-50/60"
                    >
                        View all posts
                    </Link>
                </div>
            </div>
        </section>
    );
}
