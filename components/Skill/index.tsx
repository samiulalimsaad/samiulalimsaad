import React from "react";
import { skills } from "./skills";

const Skill = () => {
    return (
        <section
            id="skills"
            className="min-h-screen hero bg-[url('/skill.png')] relative"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-slate-900/50 hero">
                <div>
                    <h2 className="my-8 text-6xl font-black text-center">
                        Skills
                    </h2>
                    <div className="w-2/3 mx-auto">
                        <ul className="flex flex-wrap justify-center">
                            {skills.map((skill, i) => (
                                <li
                                    key={skill}
                                    data-aos="flip-left"
                                    data-aos-easing="ease-out-cubic"
                                    data-aos-duration="3000"
                                >
                                    <h3 className="p-2 m-1 text-3xl rounded-xl bg-slate-900/60">
                                        {skill}
                                    </h3>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
