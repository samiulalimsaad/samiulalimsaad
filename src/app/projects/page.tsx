import { projects } from "@/lib/projects";
import Image from "next/image";

export default function AllProjectsPage() {
    return (
        <section className="w-full bg-linear-to-b from-sky-50/60 via-white to-indigo-50/60 py-20 px-4">
            <div className="mx-auto w-full max-w-6xl">
                <h1 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        All Projects
                    </span>
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-center text-sm sm:text-base text-zinc-600">
                    A complete list of my personal and client projects across
                    web apps, tools, and experiments.
                </p>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p) => (
                        <ProjectCard key={p._id ?? p.name} project={p} />
                    ))}
                </div>
            </div>
        </section>
    );
}

type Project = (typeof projects)[number];

type ProjectCardProps = {
    project: Project;
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
                <h2 className="mb-1 text-xl sm:text-2xl font-bold text-indigo-700">
                    {project.name}
                </h2>
                {project.time && (
                    <p className="mb-1 text-[11px] font-medium uppercase tracking-wide text-zinc-500">
                        {project.time}
                    </p>
                )}
                <p className="mb-2 text-sm text-zinc-700">
                    {project.shortDescription}
                </p>
                {project.description && project.description.length > 0 && (
                    <ul className="mb-3 list-disc space-y-1 pl-5 text-xs text-zinc-600">
                        {project.description.map((line) => (
                            <li key={line}>{line}</li>
                        ))}
                    </ul>
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
                    {project.githubFrontEnd && (
                        <a
                            href={project.githubFrontEnd}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-3 py-1 text-sm font-medium rounded-lg bg-zinc-900 text-white hover:bg-zinc-700 transition"
                        >
                            GitHub
                        </a>
                    )}
                    {project.githubBackEnd && (
                        <a
                            href={project.githubBackEnd}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-3 py-1 text-sm font-medium rounded-lg bg-zinc-800 text-white hover:bg-zinc-600 transition"
                        >
                            Backend
                        </a>
                    )}
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
