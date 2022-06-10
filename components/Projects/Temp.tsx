import Image from "next/image";
import { projectInterface } from "./projects";

const Temp = ({ project }: { project: projectInterface }) => {
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
                <h2 className="card-title">{project.name}</h2>
                <div className="text-justify">{project.shortDescription}</div>
                <div className="flex justify-between">
                    {project.tools.map((v) => (
                        <p
                            key={v}
                            className="flex justify-center p-2 m-1 text-xs rounded-xl bg-slate-900/60 hover:bg-slate-900/90"
                        >
                            {v}
                        </p>
                    ))}
                </div>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Temp;
