import React from "react";
import Project from "./Project";

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
                    <div className="w-2/3 mx-auto">
                        <Project />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
