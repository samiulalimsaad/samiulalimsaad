"use client";

import { projects } from "@/lib/projects";
import Image from "next/image";
import { useState } from "react";

export default function Projects() {
    const [showAll, setShowAll] = useState(false);
    const featured = projects.slice(0, 3);
    const more = projects.slice(3);

    return (
        <section
            id="projects"
            className="w-full bg-linear-to-b from-sky-50/60 via-white to-indigo-50/60 py-20 px-4"
        >
            <div className="mx-auto w-full max-w-6xl">
                <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        Projects
                    </span>
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-center text-sm sm:text-base text-zinc-600">
                    A selection of recent work showcasing fullstack development,
                    integrations, and modern UI.
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {featured.map((p) => (
                        <ProjectCard key={p.name} project={p} />
                    ))}
                </div>

                {more.length > 0 && (
                    <div className="mt-10 space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm font-semibold uppercase tracking-wide text-cyan-600">
                                More projects
                            </h3>
                            <button
                                type="button"
                                onClick={() => setShowAll((v) => !v)}
                                className="text-xs font-medium text-cyan-700 underline-offset-2 hover:underline"
                            >
                                {showAll ? "Show less" : "Show all"}
                            </button>
                        </div>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {(showAll ? more : more.slice(0, 3)).map((p) => (
                                <ProjectCard key={p.name} project={p} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

type ProjectCardProps = {
    project: (typeof projects)[number];
};

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="group flex flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/80 backdrop-blur-sm transition hover:-translate-y-2">
            <div className="overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.name}
                    width={360}
                    height={216}
                    className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-1 text-xl sm:text-2xl font-bold text-indigo-700">
                    {project.name}
                </h3>
                <p className="mb-3 text-sm text-zinc-700">
                    {project.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                        <span
                            key={s}
                            className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 ring-1 ring-cyan-100"
                        >
                            {s}
                        </span>
                    ))}
                </div>
                <div className="mt-auto flex gap-3">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-3 py-1 text-sm font-medium rounded-lg bg-zinc-900 text-white hover:bg-zinc-700 transition"
                    >
                        GitHub
                    </a>
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-3 py-1 text-sm font-medium rounded-lg bg-cyan-600 text-white hover:bg-cyan-900 transition"
                    >
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
}
