import { StaticImageData } from "next/image";

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
