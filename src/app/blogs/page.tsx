import { fetchMediumFeed } from "@/lib/medium";

function formatDate(dateStr: string) {
    const date = new Date(dateStr);
    if (Number.isNaN(date.getTime())) return "";
    return date.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

export default async function AllBlogsPage() {
    const feed = await fetchMediumFeed();
    const posts = feed?.items ?? [];

    if (!feed || posts.length === 0) {
        return (
            <section className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-20 px-4">
                <div className="mx-auto w-full max-w-6xl text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
                        <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                            All Blogs
                        </span>
                    </h1>
                    <p className="text-sm sm:text-base text-zinc-600">
                        Couldn&apos;t load blog posts from Medium right now.
                        Please try again later or visit my Medium profile
                        directly.
                    </p>
                    {feed?.link && (
                        <div className="mt-4">
                            <a
                                href={feed.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-full border border-cyan-100 bg-white/80 px-4 py-1 text-xs font-medium text-cyan-700 hover:border-cyan-300 hover:bg-cyan-50/60"
                            >
                                Open Medium profile
                            </a>
                        </div>
                    )}
                </div>
            </section>
        );
    }

    return (
        <section className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-20 px-4">
            <div className="mx-auto w-full max-w-6xl">
                <h1 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        All Blogs
                    </span>
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-center text-sm sm:text-base text-zinc-600">
                    All of my recent writing from Medium, in one place.
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.title}
                            className="flex h-full flex-col rounded-3xl border border-white/70 bg-white/80 p-6 backdrop-blur-sm shadow-sm transition hover:-translate-y-2"
                        >
                            <h2 className="mb-2 line-clamp-2 text-lg sm:text-xl font-semibold text-indigo-700">
                                {post.title}
                            </h2>
                            <p className="mb-2 text-xs text-zinc-500">
                                {formatDate(post.published)}
                            </p>
                            {post.category && post.category.length > 0 && (
                                <div className="mb-3 flex flex-wrap gap-2">
                                    {post.category.slice(0, 4).map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center rounded-full bg-cyan-50 px-2 py-0.5 text-[11px] font-medium text-cyan-700 ring-1 ring-cyan-100"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                            <p className="mb-4 line-clamp-4 text-sm text-zinc-700">
                                {post.content
                                    ?.replace(/<[^>]*>/g, " ")
                                    .replace(/\s+/g, " ")
                                    .trim()
                                    .slice(0, 220) || ""}
                                {post.content && post.content.length > 0
                                    ? "…"
                                    : ""}
                            </p>
                            <div className="mt-auto flex justify-between items-center">
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
            </div>
        </section>
    );
}
