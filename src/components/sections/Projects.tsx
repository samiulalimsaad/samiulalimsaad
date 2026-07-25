import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Projects() {
    const featured = projects.filter((p) => p.tier === "featured").slice(0, 6);

    return (
        <section
            id="projects"
            className="w-full bg-linear-to-b from-sky-50/60 via-white to-indigo-50/60 py-20 px-4 animate-section-in"
        >
            <div className="mx-auto w-full max-w-6xl">
                <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        Projects
                    </span>
                </h2>
                <p className="mx-auto max-w-2xl text-center text-sm sm:text-base text-foreground/70">
                    Production systems I build and maintain. Each entry describes the engineering
                    problem, not just the technology.
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
                    {featured.map((p) => (
                        <ProjectCard key={p.name} project={p} />
                    ))}
                </div>

                <div className="mt-4 mb-10 flex justify-center">
                    <Link
                        href="/projects"
                        className="inline-flex items-center rounded-full border border-cyan-100 bg-white/80 px-4 py-1 text-xs font-medium text-cyan-700 hover:border-cyan-300 hover:bg-cyan-50/60"
                    >
                        View all projects
                    </Link>
                </div>
            </div>
        </section>
    );
}

type ProjectCardProps = {
    project: (typeof projects)[number];
};

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="group flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white/80 backdrop-blur-sm transition hover:-translate-y-2 animate-card-in">
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
                <h3 className="text-lg sm:text-xl font-semibold text-cyan-700">{project.name}</h3>
                <p className="mb-2 text-sm text-foreground/80">{project.shortDescription}</p>
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
                    {project.tools.slice(0, 3).map((tool) => (
                        <span
                            key={tool}
                            className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 ring-1 ring-cyan-100"
                        >
                            {tool}
                        </span>
                    ))}
                    {project.tools.length > 3 && (
                        <span className="inline-flex items-center rounded-full bg-cyan-50/60 px-3 py-1 text-xs font-medium text-cyan-600 ring-1 ring-cyan-100/60">
                            +{project.tools.length - 3} more
                        </span>
                    )}
                </div>
                <div className="mt-auto flex flex-wrap gap-3">
                    {project.proprietary && !project.githubFrontEnd && !project.live ? (
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
                        </>
                    )}
                    {"caseStudyLink" in project && project.caseStudyLink && (
                        <Link
                            href={project.caseStudyLink}
                            className="inline-block px-3 py-1 text-sm font-medium rounded-lg border border-indigo-200 text-indigo-700 hover:bg-indigo-50 transition"
                        >
                            Case Study →
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
