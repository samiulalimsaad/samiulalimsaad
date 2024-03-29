import Image from "next/image";
import { projectInterface } from "../../interfaces/Project.interface";

const Project = ({
    project,
    index,
}: {
    project: projectInterface;
    index: number;
}) => {
    const previous = index - 1 === 0 ? 6 : index - 1;
    const next = index + 1 === 7 ? 1 : index + 1;
    return (
        <>
            <div
                id={`slide${index}`}
                className="relative w-full mt-20 carousel-item"
            >
                <div className="shadow-xl card lg:card-sides bg-base-100 glass">
                    <figure>
                        <Image src={project.image} alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {project.name} - {index}
                        </h2>
                        <div className="text-justify">
                            {project.shortDescription}
                        </div>
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
                <div className="absolute flex justify-between transform -translate-y-1/4 left-5 right-5 top-1/4">
                    <a
                        href={`#slide${previous}`}
                        className="btn btn-circle bg-slate-900/20 border-slate-900/20 "
                        // onClick={() => console.log({ previous, index })}
                    >
                        ❮
                    </a>
                    <a
                        href={`#slide${next}`}
                        className="btn btn-circle bg-slate-900/20 border-slate-900/20 "
                        // onClick={() => console.log({ next, index })}
                    >
                        ❯
                    </a>
                </div>
            </div>
        </>
    );
};

export default Project;
