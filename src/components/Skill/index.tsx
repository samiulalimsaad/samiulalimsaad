import ColoringTitle from "../utils/ColoringTitle";
import Container from "../utils/Container";
import SkillContainer from "./Skill";
import { skillSet } from "./skills";

const height = 20;

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
                <div className="space-y-12">
                    {skillSet.map((skills) => (
                        <SkillContainer
                            key={skills.title}
                            height={height}
                            skillSet={skills}
                        />
                    ))}
                </div>
            </Container>
        </div>
    </section>
);

export default Skill;
