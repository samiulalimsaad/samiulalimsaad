import Image from "next/image";
const projects = [
    {
        name: "SmartPhone-Warehouse",
        image: "/projects/Home-Smartphone-Warehouse.png",
        description:
            "Python with Docker. ReactJS w/Router, Tailwind, Firebase, Express, MongoDB.",
        stack: ["ReactJS", "NextJS", "VueJS", "HTML", "CSS", "DaisyUI"],
        github: "https://github.com/samiulalimsaad/smartphone-warehouse",
        live: "https://smartphone-warehouse-saad.web.app",
    },
    {
        name: "Todo App (React)",
        image: "/projects/Home-Toto-App.png",
        description: "Docker, React, Stripe, Express, MongoDB, Firebase.",
        stack: ["ReactJS", "DaisyUI", "ExpressJS", "JavaScript", "TailwindCSS"],
        github: "https://github.com/samiulalimsaad/todo-app-react",
        live: "https://todo-app-react-taupe.vercel.app",
    },
    {
        name: "Lite Media",
        image: "/projects/Lite-Media.png",
        description:
            "Next.js, TypeScript, Context API, MongoDB, Firebase, Python, Docker.",
        stack: [
            "NextJS",
            "TypeScript",
            "Context-API",
            "Mongoose ORM",
            "Firebase Auth",
            "MongoDB",
            "FireStore",
            "Docker",
        ],
        github: "https://github.com/samiulalimsaad/final-project",
        live: "https://light-media.vercel.app",
    },
];
export default function Projects() {
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
                    {projects.map((p, i) => (
                        <div
                            key={i}
                            className="group flex flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/80 shadow-md backdrop-blur-sm transition hover:-translate-y-2 hover:shadow-2xl"
                        >
                            <div className="overflow-hidden">
                                <Image
                                    src={p.image}
                                    alt={p.name}
                                    width={360}
                                    height={216}
                                    className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>
                            <div className="flex flex-1 flex-col p-6">
                                <h3 className="mb-1 text-xl sm:text-2xl font-bold text-indigo-700">
                                    {p.name}
                                </h3>
                                <p className="mb-3 text-sm text-zinc-700">
                                    {p.description}
                                </p>
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {p.stack.map((s, idx) => (
                                        <span
                                            key={idx}
                                            className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 ring-1 ring-cyan-100"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-auto flex gap-3">
                                    <a
                                        href={p.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-3 py-1 text-sm font-medium rounded-lg bg-zinc-900 text-white hover:bg-zinc-700 transition"
                                    >
                                        GitHub
                                    </a>
                                    <a
                                        href={p.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block px-3 py-1 text-sm font-medium rounded-lg bg-cyan-600 text-white hover:bg-cyan-900 transition"
                                    >
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
