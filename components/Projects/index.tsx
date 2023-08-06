import Link from "next/link";
import { projectInterface } from "../../interfaces/Project.interface";
import Container from "../utils/Container";
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
            <div className="w-full h-full py-20 mx-auto bg-slate-900/60 backdrop-blur-sm">
                <h2
                    className="my-8 text-6xl font-black text-center drop-shadow-md"
                    data-aos="zoom-in-down"
                    data-aos-duration="2000"
                    data-aos-anchor-placement="center-bottom"
                >
                    Projects
                </h2>
                <div className="divider"></div>
                <Container>
                    <div className="grid gap-4 lg:grid-cols-3">
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
                </Container>
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
