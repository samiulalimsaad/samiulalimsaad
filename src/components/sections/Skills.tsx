import Image from "next/image";
const skillSet = [
    {
        title: "🛠 Advanced",
        skills: [
            {
                src: "https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge",
                alt: "JavaScript",
            },
            {
                src: "https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white&style=for-the-badge",
                alt: "TypeScript",
            },
            {
                src: "https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white&style=for-the-badge",
                alt: "NodeJS",
            },
            {
                src: "https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge",
                alt: "React",
            },
            {
                src: "https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white&style=for-the-badge",
                alt: "NextJS",
            },
            {
                src: "https://img.shields.io/badge/Tailwind CSS-06B6D4?logo=tailwindcss&logoColor=black&style=for-the-badge",
                alt: "Tailwind CSS",
            },
            {
                src: "https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white&style=for-the-badge",
                alt: "Redux",
            },
            {
                src: "https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white&style=for-the-badge",
                alt: "MongoDB",
            },
            {
                src: "https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black&style=for-the-badge",
                alt: "Firebase",
            },
            {
                src: "https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white&style=for-the-badge",
                alt: "GitHub",
            },
            {
                src: "https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white&style=for-the-badge",
                alt: "Docker",
            },
        ],
    },
    {
        title: "🛠 Proficient",
        skills: [
            {
                src: "https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white&style=for-the-badge",
                alt: "Bootstrap",
            },
            {
                src: "https://img.shields.io/badge/Django-092E20?logo=django&logoColor=white&style=for-the-badge",
                alt: "Django",
            },
            {
                src: "https://img.shields.io/badge/Go-00ADD8?logo=go&logoColor=white&style=for-the-badge",
                alt: "Go",
            },
            {
                src: "https://img.shields.io/badge/Flask-000000?logo=flask&logoColor=white&style=for-the-badge",
                alt: "Flask",
            },
            {
                src: "https://img.shields.io/badge/C++-00599C?logo=cplusplus&logoColor=white&style=for-the-badge",
                alt: "C++",
            },
        ],
    },
    {
        title: "🛠 Familiar",
        skills: [
            {
                src: "https://img.shields.io/badge/Flutter-02569B?logo=flutter&logoColor=white&style=for-the-badge",
                alt: "Flutter",
            },
            {
                src: "https://img.shields.io/badge/GraphQL-E10098?logo=graphql&logoColor=white&style=for-the-badge",
                alt: "GraphQL",
            },
            {
                src: "https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white&style=for-the-badge",
                alt: "Jest",
            },
            {
                src: "https://img.shields.io/badge/NestJS-E0234E?logo=nestjs&logoColor=white&style=for-the-badge",
                alt: "NestJS",
            },
        ],
    },
];
export default function Skills() {
    return (
        <section
            id="skills"
            className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-20 px-4"
        >
            <div className="mx-auto w-full max-w-5xl">
                <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        Skills
                    </span>
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-center text-sm sm:text-base text-zinc-600">
                    Technologies and tools I use to design, build, and ship
                    modern web applications.
                </p>
                <div className="grid gap-8 md:grid-cols-3">
                    {skillSet.map((set, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col gap-4 rounded-2xl border border-white/70 bg-white/80 p-5 shadow-md backdrop-blur-sm transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <h3 className="text-lg sm:text-xl font-semibold text-cyan-700">
                                {set.title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {set.skills.map((skill) => (
                                    <div
                                        key={skill.alt}
                                        className="overflow-hidden rounded-xl bg-linear-to-br from-zinc-50 via-cyan-50/60 to-indigo-50/70 p-0.5 shadow-sm"
                                    >
                                        <Image
                                            src={skill.src}
                                            alt={skill.alt}
                                            width={120}
                                            height={42}
                                            title={skill.alt}
                                            className="h-10 w-full rounded-lg bg-white object-contain transition-transform duration-200 hover:scale-105"
                                            unoptimized
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
