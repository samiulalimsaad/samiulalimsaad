import Image from "next/image";
import Exp from "../../images/sections/exp.svg";

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
            className="min-h-screen hero bg-[url('/exp.png')]"
        >
            <div className="w-full h-full py-20 mx-auto bg-slate-900/60 hover:backdrop-blur-sm">
                <h2
                    className="my-8 text-6xl font-black text-center"
                    data-aos="zoom-in-down"
                    data-aos-duration="2000"
                    data-aos-anchor-placement="center-bottom"
                >
                    Experience
                </h2>
                <div className="divider"></div>
                <div className="flex-col justify-between mx-auto hero-content lg:flex-row">
                    <div
                        data-aos="zoom-out-down"
                        data-aos-duration="2000"
                        data-aos-anchor-placement="center-bottom"
                    >
                        <Image src={Exp} alt="Exp" className="w-48 sm:w-96" />
                    </div>
                    <div className="p-10 ">
                        <div>
                            <ul className="steps steps-vertical">
                                {experiences.map((experience, i) => (
                                    <li
                                        key={experience.company}
                                        className="step step-primary"
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="center-bottom"
                                        data-aos-duration={i + 1 * 1000}
                                    >
                                        <div className="my-8 text-left">
                                            <h3 className="text-3xl">
                                                {experience.designation}
                                            </h3>
                                            <p className="text-xl">
                                                at{" "}
                                                <span>
                                                    {experience.company}
                                                </span>
                                                ,{" "}
                                                <span>
                                                    {experience.location}
                                                </span>{" "}
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
            </div>
        </section>
    );
};

export default Experience;
