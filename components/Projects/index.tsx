import { projects } from "./projects";
import Temp from "./Temp";

const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-fit hero bg-[url('/project.png')] "
        >
            <div className="w-full h-full py-20 mx-auto bg-slate-900/60">
                <h2 className="my-8 text-6xl font-black text-center">
                    Projects
                </h2>
                <div className="divider"></div>
                <div className="grid justify-between w-11/12 grid-cols-3 gap-4 mx-auto">
                    {projects.slice(0, 6).map((v) => (
                        <Temp key={Date.now()} project={v} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
