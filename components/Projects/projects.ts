import liteMedia from "../../images/sites/Lite-Media.png";
import { skills } from "../Skill/skills";

export const projects: projectInterface[] = new Array(6).fill({
    name: "Lite Media",
    time: "(January 22)",
    shortDescription: "Python with Docker",
    description: [
        "Nextjs with typescript. Context-API, Mongoose ORM for MongoDB",
        "Firebase for storing images, authentication, and real-time database, FireStore",
        "Python with Docker",
    ],
    image: liteMedia,
    tools: skills.slice(0, 6),
    githubFrontEnd: "https://github.com/samiulalimsaad/final-project",
    githubBackEnd: "https://github.com/samiulalimsaad/final-project",
    live: "https://light-media.vercel.app/",
});

export interface projectInterface {
    shortDescription: string;
    name: string;
    time: string;
    description: [string];
    image: string;
    tools: [];
    githubFrontEnd: string;
    githubBackEnd: string;
    live: string;
}
