import Image from "next/image";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaServer } from "react-icons/fa";
import { projectInterface } from "../../interfaces/Project.interface";

const Temp = ({ project }: { project: projectInterface }) => (
    <div className="shadow-xl card lg:card-sides bg-base-100 glass">
        <figure className="h-[15rem] glass">
            <Image src={project.image} alt="Album" width={800} height={600} />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{project.name}</h2>
            <div className="prose prose-stone">
                {project.description.join(", ")}
            </div>
            <div className="flex flex-wrap justify-between prose cursor-vertical-text prose-stone">
                {project.tools.slice(0, 6).map((v) => (
                    <p
                        key={v}
                        className="flex justify-center p-2 m-1 text-xs rounded-xl bg-slate-900/60 hover:bg-slate-900/90 "
                    >
                        {v}
                    </p>
                ))}
            </div>
            <div className="items-center justify-between card-actions">
                <div className="flex items-center justify-between gap-2">
                    <a
                        href={project.githubFrontEnd}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <BsGithub className="w-6 h-6 text-green-500 duration-500 hover:text-green-600" />
                    </a>
                    {project.githubBackEnd && (
                        <a
                            href={project.githubBackEnd}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FaServer className="w-6 h-6 duration-500 text-sky-500 hover:text-sky-600" />
                        </a>
                    )}
                    <a href={project.live} target="_blank" rel="noreferrer">
                        <BiLinkExternal className="w-6 h-6 text-blue-500 duration-500 hover:text-blue-600" />
                    </a>
                </div>
                <Link
                    href={`/projects/${project._id}/details`}
                    className="btn btn-primary"
                >
                    Details
                </Link>
            </div>
        </div>
    </div>
);

export default Temp;
