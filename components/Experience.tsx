import React from "react";

const experiences = [
    {
        designation: "Intern Developer",
        company: "Macroman Solution",
        location: "Rajshahi",
        jobType: "",
        dateFrom: "Feb 2022",
        dateTo: "Now",
    },
    {
        designation: "Internship",
        company: "OpenfabricAI (Transylvanialab)",
        location: "Romania",
        jobType: "Remote",
        dateFrom: "Jul 2021",
        dateTo: "Jan 2022",
    },
];

const Experience = () => {
    return (
        <section
            id="experiences"
            className="min-h-screen hero bg-[url('/exp.png')] relative"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/80 hero">
                <div>
                    <h2 className="my-8 text-6xl font-black text-center">
                        Experience
                    </h2>
                    <div className="divider"></div>
                    <div>
                        <ul className="steps steps-vertical">
                            {experiences.map((experience) => (
                                <li
                                    key={experience.company}
                                    className="step step-primary"
                                >
                                    <div className="my-8 text-left">
                                        <h3 className="text-3xl">
                                            {experience.designation}
                                        </h3>
                                        <p className="text-xl">
                                            at <span>{experience.company}</span>
                                            , <span>{experience.location}</span>{" "}
                                            {experience.jobType && (
                                                <span>
                                                    ({experience.jobType})
                                                </span>
                                            )}
                                        </p>
                                        <p className="my-2">
                                            <span className="p-2 rounded-xl bg-slate-900/60">
                                                {experience.dateFrom}
                                            </span>{" "}
                                            -{" "}
                                            <span className="p-2 rounded-xl bg-slate-900/60">
                                                {experience.dateTo}
                                            </span>
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
