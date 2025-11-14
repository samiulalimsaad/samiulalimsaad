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
        <section id="projects" className="w-full py-20 bg-zinc-50">
            <div className="max-w-6xl mx-auto px-6 sm:px-0">
                <h2 className="text-3xl sm:text-4xl mb-10 font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-600 to-indigo-400 text-center py-4">
                    Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <div
                            key={i}
                            className="rounded-xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden"
                        >
                            <Image
                                src={p.image}
                                alt={p.name}
                                width={360}
                                height={216}
                                className="h-56 w-full object-cover"
                            />
                            <div className="flex-1 flex flex-col p-6">
                                <h3 className="text-2xl font-bold mb-1 text-indigo-700">
                                    {p.name}
                                </h3>
                                <p className="text-sm text-zinc-700 mb-3">
                                    {p.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {p.stack.map((s, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs px-3 py-1 rounded-full font-medium bg-cyan-100 text-cyan-700 border border-cyan-200"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-auto flex gap-4">
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
