import { projects } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

export default function AllProjectsPage() {
    const featured = projects.filter((p) => p.tier === "featured");
    const pastWork = projects.filter((p) => p.tier === "past-work");
    const learning = projects.filter((p) => p.tier === "archive");

    return (
        <section className="w-full bg-linear-to-b from-sky-50/60 via-white to-indigo-50/60 py-20 px-4 animate-section-in">
            <div className="mx-auto w-full max-w-6xl animate-soft-in">
                <h1 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        All Projects
                    </span>
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-center text-sm sm:text-base text-foreground/70">
                    Production platform services followed by past work and
                    learning projects.
                </p>

                {/* Featured projects */}
                <h2 className="mb-6 text-xl font-bold text-cyan-700">
                    Featured Work
                </h2>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
                    {featured.map((p) => (
                        <ProjectCard key={p.name} project={p} />
                    ))}
                </div>

                {/* Past work */}
                <details className="group mb-16 rounded-3xl border border-gray-200 bg-white/80 p-6 backdrop-blur-sm">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 [&::-webkit-details-marker]:hidden">
                        <div>
                            <h2 className="text-lg font-bold text-cyan-700">
                                Past Work
                            </h2>
                            <p className="text-sm text-foreground/60">
                                Projects I contributed to previously
                            </p>
                        </div>
                        <span className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 transition group-open:bg-indigo-50 group-open:border-indigo-200">
                            {pastWork.length} projects
                        </span>
                    </summary>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
                        {pastWork.map((p) => (
                            <PastWorkCard key={p._id ?? p.name} project={p} />
                        ))}
                    </div>
                </details>

                {/* Learning projects */}
                <details className="group rounded-3xl border border-gray-200 bg-white/80 p-6 backdrop-blur-sm">
                    <summary className="flex cursor-pointer items-center justify-between gap-2 [&::-webkit-details-marker]:hidden">
                        <div>
                            <h2 className="text-lg font-bold text-cyan-700">
                                Archive — Early Learning (2021–2022)
                            </h2>
                            <p className="text-sm text-foreground/60">
                                    {learning.length} projects — course
                                assignments and early experiments. Not representative
                                of current engineering level.
                            </p>
                        </div>
                        <span className="rounded-full border border-cyan-100 bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 transition group-open:bg-indigo-50 group-open:border-indigo-200">
                            {learning.length} projects
                        </span>
                    </summary>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
                        {learning.map((p) => (
                            <LearningCard key={p._id ?? p.name} project={p} />
                        ))}
                    </div>
                </details>
            </div>
        </section>
    );
}

type Project = (typeof projects)[number];

function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group flex flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/80 backdrop-blur-sm transition hover:-translate-y-2 animate-card-in">
            <div className="overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.name}
                    width={360}
                    height={216}
                    loading="lazy"
                    className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-1 flex-col p-6">
                <h2 className="mb-1 text-xl sm:text-2xl font-bold text-cyan-700">
                    {project.name}
                </h2>
                {project.time && (
                    <p className="mb-1 text-[11px] font-medium uppercase tracking-wide text-foreground/60">
                        {project.time}
                    </p>
                )}
                <p className="mb-2 text-sm text-foreground/80">
                    {project.shortDescription}
                </p>
                {"metrics" in project && project.metrics && project.metrics.length > 0 && (
                    <div className="mb-3 flex flex-wrap gap-1.5">
                        {project.metrics.slice(0, 3).map((m) => (
                            <span
                                key={m}
                                className="inline-flex items-center rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-medium text-indigo-700 ring-1 ring-indigo-100"
                            >
                                {m}
                            </span>
                        ))}
                    </div>
                )}
                <div className="mb-4 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                        <span
                            key={tool}
                            className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 ring-1 ring-cyan-100"
                        >
                            {tool}
                        </span>
                    ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-3">
                    {"proprietary" in project &&
                    project.proprietary &&
                    !project.githubFrontEnd &&
                    !project.live ? (
                        <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-[11px] font-medium text-amber-700">
                            Proprietary — Programming Hero
                        </span>
                    ) : (
                        <>
                            {project.githubFrontEnd && (
                                <a
                                    href={project.githubFrontEnd}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-3 py-1 text-sm font-medium rounded-lg bg-foreground text-background hover:bg-foreground/90 transition"
                                >
                                    GitHub
                                </a>
                            )}
                            {project.githubBackEnd && (
                                <a
                                    href={project.githubBackEnd}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-3 py-1 text-sm font-medium rounded-lg bg-foreground text-background hover:bg-foreground/90 transition"
                                >
                                    Backend
                                </a>
                            )}
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block px-3 py-1 text-sm font-medium rounded-lg bg-linear-to-r from-cyan-500 to-indigo-500 text-white hover:from-cyan-600 hover:to-indigo-600 transition"
                                >
                                    Live Demo
                                </a>
                            )}
                            {"caseStudyLink" in project &&
                                project.caseStudyLink && (
                                    <Link
                                        href={project.caseStudyLink}
                                        className="inline-block px-3 py-1 text-sm font-medium rounded-lg border border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition"
                                    >
                                        Case Study →
                                    </Link>
                                )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

function PastWorkCard({ project }: { project: Project }) {
    return (
        <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white/60 backdrop-blur-sm transition hover:-translate-y-1 animate-card-in">
            <div className="overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.name}
                    width={360}
                    height={216}
                    loading="lazy"
                    className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-1 flex-col p-4">
                <h3 className="mb-1 text-base font-semibold text-foreground/90">
                    {project.name}
                </h3>
                {project.time && (
                    <p className="mb-1 text-[10px] font-medium uppercase tracking-wide text-foreground/50">
                        {project.time}
                    </p>
                )}
                <p className="mb-3 text-xs text-foreground/70 line-clamp-2">
                    {project.shortDescription}
                </p>
                <div className="mb-3 flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 4).map((tool) => (
                        <span
                            key={tool}
                            className="inline-flex items-center rounded-full bg-gray-50 px-2 py-0.5 text-[10px] font-medium text-foreground/60 ring-1 ring-gray-100"
                        >
                            {tool}
                        </span>
                    ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                    {project.githubFrontEnd && (
                        <a
                            href={project.githubFrontEnd}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-2 py-0.5 text-[11px] font-medium rounded-md bg-foreground text-background hover:bg-foreground/90 transition"
                        >
                            GitHub
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-2 py-0.5 text-[11px] font-medium rounded-md bg-linear-to-r from-cyan-500 to-indigo-500 text-white hover:from-cyan-600 hover:to-indigo-600 transition"
                        >
                            Live Demo
                        </a>
                    )}
                    {"proprietary" in project && project.proprietary && (
                        <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-medium text-amber-700">
                            Proprietary
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

function LearningCard({ project }: { project: Project }) {
    return (
        <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white/60 backdrop-blur-sm transition hover:-translate-y-1 animate-card-in">
            <div className="overflow-hidden">
                <Image
                    src={project.image}
                    alt={project.name}
                    width={360}
                    height={216}
                    loading="lazy"
                    className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-1 flex-col p-4">
                <h3 className="mb-1 text-base font-semibold text-foreground/90">
                    {project.name}
                </h3>
                {project.time && (
                    <p className="mb-1 text-[10px] font-medium uppercase tracking-wide text-foreground/50">
                        {project.time}
                    </p>
                )}
                <p className="mb-3 text-xs text-foreground/70 line-clamp-2">
                    {project.shortDescription}
                </p>
                <div className="mb-3 flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 4).map((tool) => (
                        <span
                            key={tool}
                            className="inline-flex items-center rounded-full bg-gray-50 px-2 py-0.5 text-[10px] font-medium text-foreground/60 ring-1 ring-gray-100"
                        >
                            {tool}
                        </span>
                    ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                    {project.githubFrontEnd && (
                        <a
                            href={project.githubFrontEnd}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-2 py-0.5 text-[11px] font-medium rounded-md bg-foreground text-background hover:bg-foreground/90 transition"
                        >
                            GitHub
                        </a>
                    )}
                    {project.live && (
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-2 py-0.5 text-[11px] font-medium rounded-md bg-linear-to-r from-cyan-500 to-indigo-500 text-white hover:from-cyan-600 hover:to-indigo-600 transition"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
