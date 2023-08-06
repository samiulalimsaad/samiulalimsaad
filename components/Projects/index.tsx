import Link from "next/link";
import { projectInterface } from "../../interfaces/Project.interface";
import Temp from "./Temp";

const Projects = ({
    all,
    projects,
}: {
    all?: Boolean;
    projects: projectInterface[];
}) => {
    return (
        <section
            id="projects"
            className="min-h-fit hero bg-[url('/project.png')] overflow-hidden bg-fixed"
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
                    {/* {error ? (
                        <div className="flex items-center justify-center h-full">
                            {error}
                        </div>
                    ) : ( */}
                    <div className="grid gap-4 lg:grid-cols-3">
                        {/* <div className="w-full carousel"> */}
                        {all
                            ? projects?.map((v: projectInterface) => (
                                  <Temp key={v._id} project={v} />
                              ))
                            : projects
                                  ?.slice(0, 6)
                                  ?.map((v: projectInterface) => (
                                      <Temp key={v._id} project={v} />
                                  ))}
                    </div>
                    {/* )} */}
                </div>
                {!all && (
                    <div className="flex items-center justify-center mt-8">
                        <Link
                            href="/projects"
                            passHref
                            className="btn btn-info"
                        >
                            See All Projects
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects;
