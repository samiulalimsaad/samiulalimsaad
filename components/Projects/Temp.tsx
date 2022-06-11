import Image from "next/image";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { projectInterface } from "./projects";

const Temp = ({
    project,
    index,
}: {
    project: projectInterface;
    index: number;
}) => {
    return (
        <div
            className="shadow-xl card lg:card-sides bg-base-100 glass"
            data-aos="flip-left"
            data-aos-duration="3000"
        >
            <figure>
                <Image src={project.image} alt="Album" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {project.name} - {index}
                </h2>
                <div className="text-justify">{project.shortDescription}</div>
                <div className="flex flex-wrap justify-between cursor-vertical-text">
                    {project.tools.map((v) => (
                        <p
                            key={v}
                            className="flex justify-center p-2 m-1 text-xs rounded-xl bg-slate-900/60 hover:bg-slate-900/90"
                        >
                            {v}
                        </p>
                    ))}
                </div>
                <div className="items-center justify-between card-actions">
                    <div className="flex items-center justify-between gap-2">
                        <a
                            href="https://www.github.com/samiulalimsaad"
                            target="_blank"
                            rel="noreferrer"
                            data-aos="flip-left"
                            data-aos-duration="3000"
                        >
                            <BsGithub className="w-6 h-6 text-green-500 duration-500 hover:text-green-600" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/samiulalimsaad"
                            target="_blank"
                            rel="noreferrer"
                            data-aos="flip-right"
                            data-aos-duration="3000"
                        >
                            <FaServer className="w-6 h-6 duration-500 text-sky-500 hover:text-sky-600" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/samiulalimsaad"
                            target="_blank"
                            rel="noreferrer"
                            data-aos="flip-right"
                            data-aos-duration="3000"
                        >
                            <BiLinkExternal className="w-6 h-6 text-blue-500 duration-500 hover:text-blue-600" />
                        </a>
                    </div>
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Temp;
