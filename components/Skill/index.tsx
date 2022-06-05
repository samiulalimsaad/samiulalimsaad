import React from "react";

const skills = [
    "React.JS",
    "Next.JS",
    "VueJS",
    "HTML",
    "CSS",
    "daisyui",
    "Redux",
    "JavaScript",
    "Typescript",
    "TailwindCSS",
    "Context-API",
    "Vuex",
    "Express.Js",
    "JavaScript",
    "TypeScript",
    "Firebase",
    "Python",
    "PHP",
    "Symfony",
    "Flask",
    "Express.Js",
    "JavaScript",
    "TypeScript",
    "Firebase",
    "Python",
    "PHP",
    "Symfony",
    "Flask",
    "NoSQL",
    "SQL",
    "MongoDB",
    "FireStore",
    "Mongoose",
    "Doctrine",
    "Git",
    "GitHub",
    "Docker",
    "Sonata Admin",
    "Stripe",
    "Netlify",
    "Vercel",
    "Authorization",
    "Authentication",
    "Problem Solving",
    "GraphQL",
    "Bootstrap",
    "Material Design Bootstrap",
    "REST-API",
    "Material-UI",
    "node JS",
    "GitHub",
    "Authentication",
    "Authorization",
    "Logic Build",
    "JAVA",
    "C++",
    "C",
    "Artificial Intelligence",
    "Redux",
    "Python",
    "Linux",
    "Deep Learning",
    "Strapi",
    "Stripe",
    "Neural Network",
    "Machine Learning",
];

const Skill = () => {
    return (
        <section
            id="skills"
            className="min-h-screen hero bg-[url('/skill.png')] relative"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-slate-900/50 hero">
                <div>
                    <h2 className="my-8 text-6xl font-black text-center">
                        Skills
                    </h2>
                    <div className="w-2/3 mx-auto">
                        <ul className="flex flex-wrap justify-center">
                            {skills.map((skill) => (
                                <li key={skill}>
                                    <h3 className="p-2 m-1 text-3xl rounded-xl bg-slate-900/60">
                                        {skill}
                                    </h3>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
