import { projects } from "./projects";
import Temp from "./Temp";

const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-fit hero bg-[url('/project.png')] overflow-hidden"
        >
            <div className="w-full h-full py-20 mx-auto bg-slate-900/60 hover:backdrop-blur-sm">
                <h2
                    className="my-8 text-6xl font-black text-center"
                    data-aos="zoom-in-down"
                    data-aos-duration="2000"
                    data-aos-anchor-placement="center-bottom"
                >
                    Projects
                </h2>
                <div className="divider"></div>
                <div className="w-10/12 min-h-screen mx-auto hero">
                    {/* <div className="flex-col w-11/12 hero-content lg:flex-row">
                        <div
                            className="bg-slate-50 rounded-3xl"
                            data-aos="zoom-out-down"
                            data-aos-duration="2000"
                            data-aos-anchor-placement="center-bottom"
                        >
                            <Image
                                src={project}
                                alt="Exp"
                                className="w-48 sm:w-96"
                            />
                        </div>
                    </div> */}
                    <div className="grid gap-4 lg:grid-cols-3">
                        {/* <div className="w-full carousel"> */}
                        {projects.slice(0, 6).map((v, i) => (
                            <Temp key={i} project={v} index={i + 1} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
