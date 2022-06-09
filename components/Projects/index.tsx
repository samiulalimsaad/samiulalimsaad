import React from "react";
import { projects } from "./projects";
import Temp from "./Temp";

const Projects = () => {
    return (
        <section
            id="projects"
            className="min-h-screen hero bg-[url('/project.png')] relative"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-slate-900/50 hero">
                <div>
                    <h2 className="my-8 text-6xl font-black text-center">
                        Projects
                    </h2>
                    <div className="grid justify-between w-11/12 grid-cols-3 gap-4 mx-auto">
                        {projects.slice(0, 3).map((v) => (
                            <Temp key={Date.now()} project={v} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
