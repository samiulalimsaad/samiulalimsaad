import ColoringTitle from "../utils/ColoringTitle";
import Container from "../utils/Container";
import { skills } from "./skills";

const Skill = () => (
    <section
        id="skills"
        className="min-h-screen hero bg-[url('/skill.png')] bg-fixed"
    >
        <div className="w-full h-full pt-10 mx-auto bg-slate-900/20 backdrop-blur-sm">
            <ColoringTitle as="h2" fontSize="5xl">
                Skills
            </ColoringTitle>
            <div className="divider"></div>
            <Container>
                <ul className="flex flex-wrap justify-between mt-20 text-justify cursor-vertical-text">
                    {skills.map((skill, i) => (
                        <li
                            key={skill}
                            className="flex justify-center p-2 m-1 rounded-none bg-slate-900/60 hover:bg-slate-900/90 hover:animate-pulse"
                        >
                            <h3 className="duration-1000 sm:p-2 sm:m-1 sm:text-3xl ">
                                {skill}
                            </h3>
                        </li>
                    ))}
                </ul>
            </Container>
        </div>
    </section>
);

export default Skill;
