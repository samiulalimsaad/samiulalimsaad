import { ExternalLink } from "lucide-react";

const articles = [
    {
        title: "How JavaScript Runs Your Code — The Event Loop",
        summary:
            "Deep dive into JavaScript's single-threaded event loop, call stack, task queues, and async execution model.",
        url: "https://medium.com/@samiulalimsaad/%E0%A6%9C%E0%A6%BE%E0%A6%AD%E0%A6%BE%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A6%AA%E0%A7%8D%E0%A6%9F-%E0%A6%87%E0%A6%AD%E0%A7%87%E0%A6%A8%E0%A7%8D%E0%A6%9F-%E0%A6%B2%E0%A7%81%E0%A6%AA-d2a43786b242",
        date: "Dec 2023",
        tag: "JavaScript",
    },
    {
        title: "V8 Engine — The Engine Powering Modern JavaScript",
        summary:
            "How V8 compiles and optimizes JavaScript, from parsing to JIT compilation and garbage collection.",
        url: "https://medium.com/@samiulalimsaad/v8-engine-%E0%A6%95%E0%A7%80-%E0%A6%8F%E0%A6%87-%E0%A6%97%E0%A7%8B%E0%A6%AA%E0%A6%A8-%E0%A6%B6%E0%A6%95%E0%A7%8D%E0%A6%A4%E0%A6%BF-%E0%A6%AF%E0%A6%BE-%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%AC-%E0%A6%AA%E0%A7%83%E0%A6%A5%E0%A6%BF%E0%A6%AC%E0%A7%80%E0%A6%95%E0%A7%87-%E0%A6%9A%E0%A6%BE%E0%A6%B2%E0%A6%BE%E0%A6%AF%E0%A6%BC-8b0a31173e69",
        date: "Jan 2024",
        tag: "JavaScript",
    },
    {
        title: "Why React Remains the Dominant UI Library",
        summary:
            "Exploring React's component model, virtual DOM, ecosystem advantages, and why it still leads in 2024.",
        url: "https://medium.com/@samiulalimsaad/react-%E0%A6%95%E0%A7%87%E0%A6%A8-%E0%A6%AC%E0%A6%B0%E0%A7%8D%E0%A6%A4%E0%A6%AE%E0%A6%BE%E0%A6%A8%E0%A7%87-%E0%A6%AC%E0%A7%87%E0%A6%B6%E0%A6%BF-%E0%A6%9C%E0%A6%A8%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%BF%E0%A7%9F-96828e678a6b",
        date: "Nov 2023",
        tag: "React",
    },
    {
        title: "Git and GitHub — Version Control Fundamentals",
        summary:
            "Practical guide to Git workflows, branching strategies, and collaboration patterns for development teams.",
        url: "https://medium.com/@samiulalimsaad/git-%E0%A6%8F%E0%A6%AC%E0%A6%82-github-dace1d5d7a61",
        date: "Jul 2024",
        tag: "Dev Tools",
    },
];

export default function Blog() {
    return (
        <section
            id="writing"
            className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-20 px-4 animate-section-in"
        >
            <div className="mx-auto w-full max-w-6xl">
                <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        Writing
                    </span>
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-center text-sm sm:text-base text-foreground/70">
                    I write about how JavaScript engines work, frontend architecture, and developer
                    workflows.
                </p>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {articles.map((article) => (
                        <a
                            key={article.title}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col rounded-2xl border border-gray-100 bg-white/80 p-6 backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-md animate-card-in"
                        >
                            <div className="flex items-start justify-between mb-3">
                                <span className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-2.5 py-0.5 text-[10px] font-medium text-indigo-700">
                                    {article.tag}
                                </span>
                                <span className="text-[10px] text-foreground/40">
                                    {article.date}
                                </span>
                            </div>
                            <h3 className="text-sm font-semibold text-foreground mb-1.5 flex-1">
                                {article.title}
                            </h3>
                            <p className="text-xs text-foreground/60 leading-relaxed mb-3">
                                {article.summary}
                            </p>
                            <div className="flex items-center gap-1 text-xs font-medium text-cyan-700 group-hover:text-indigo-700 transition-colors">
                                Read on Medium
                                <ExternalLink size={12} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
