import { skills } from "./skills";

const Skill = () => {
    return (
        <section
            id="skills"
            className="min-h-screen hero bg-[url('/skill.png')] bg-fixed"
        >
            <div className="w-full h-full py-20 mx-auto bg-slate-900/20 hover:backdrop-blur-sm">
                <h2
                    className="my-8 text-6xl font-black text-center"
                    data-aos="zoom-in-down"
                    data-aos-duration="2000"
                    data-aos-anchor-placement="center-bottom"
                >
                    Skills
                </h2>
                <div className="divider"></div>
                <div className="w-2/3 mx-auto">
                    <ul className="flex flex-wrap justify-center cursor-vertical-text">
                        {skills.map((skill, i) => (
                            <li
                                key={skill}
                                className="flex justify-center p-2 m-1 rounded-xl bg-slate-900/60 hover:bg-slate-900/90 hover:animate-pulse"
                                data-aos="flip-left"
                                data-aos-easing="ease-out-cubic"
                                data-aos-duration="2000"
                                data-aos-anchor-placement="center-bottom"
                            >
                                <h3 className="duration-1000 sm:p-2 sm:m-1 sm:text-3xl ">
                                    {skill}
                                </h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Skill;
