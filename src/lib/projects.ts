export type Project = {
    name: string;
    image: string;
    description: string;
    stack: string[];
    github: string;
    live: string;
};

export const projects: Project[] = [
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
