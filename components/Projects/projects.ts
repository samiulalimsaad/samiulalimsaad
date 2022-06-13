import { StaticImageData } from "next/image";
import ec360 from "../../images/sites/Home-EC-360.png";
import warehouse from "../../images/sites/Home-Smartphone-Warehouse.png";
import liteMedia from "../../images/sites/Lite-Media.png";
import { skills } from "../Skill/skills";

export const projects: projectInterface[] = [
    {
        name: "Lite Media",
        time: "(January 22)",
        shortDescription: "Python with Docker",
        description: [
            "Nextjs with typescript",
            "Context-API",
            "Mongoose ORM for MongoDB",
            "Firebase for storing images, authentication, and real-time database, FireStore",
            "Python with Docker",
        ],
        image: liteMedia,
        tools: [
            "Nextjs",
            "typescript",
            "Context-API",
            "Mongoose ORM",
            "Firebase Authentication",
            "MongoDB",
            "Firebase",
            "FireStore",
            "Firebase Database",
            "Python",
            "Docker",
            "Docker-Compose",
            "TailwindCSS",
        ],
        githubFrontEnd: "https://github.com/samiulalimsaad/final-project",
        githubBackEnd: "https://github.com/samiulalimsaad/final-project",
        live: "https://light-media.vercel.app",
    },
    {
        name: "EC-360",
        time: "(May 22)",
        shortDescription: "Python with Docker",
        description: [
            "ReactJS with React-Router-Dom",
            "daisyui, tailwindCSS",
            "Firebase authentication",
            "Mongoose ORM, MongoDB with ExpressJS",
            "Stripe for payment",
        ],
        image: ec360,
        tools: skills.slice(0, 6),
        githubFrontEnd: "https://github.com/samiulalimsaad/ec-360",
        githubBackEnd: "https://github.com/samiulalimsaad/ec-360-backend",
        live: "https://ec-360.web.app",
    },
    {
        name: "SmartPhone-Warehouse",
        time: "(May 22)",
        shortDescription: "Python with Docker",
        description: [
            "ReactJS with React-Router-Dom",
            "daisyui, tailwindCSS",
            "Firebase authentication",
            "Mongoose ORM for MongoDB with ExpressJS",
        ],
        image: warehouse,
        tools: skills.slice(0, 6),
        githubFrontEnd:
            "https://github.com/samiulalimsaad/smartphone-warehouse",
        githubBackEnd:
            "https://github.com/samiulalimsaad/smartphone-warehouse-backend",
        live: "https://smartphone-warehouse-saad.web.app",
    },
];

export interface projectInterface {
    shortDescription: string;
    name: string;
    time: string;
    description: string[];
    image: StaticImageData;
    tools: string[];
    githubFrontEnd: string;
    githubBackEnd: string;
    live: string;
}
