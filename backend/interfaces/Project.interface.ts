import { StaticImageData } from "next/image";
import { Key } from "react";

export interface projectInterface {
    _id: Key | null | undefined;
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
