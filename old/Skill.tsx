import ColoringTitle from "../utils/ColoringTitle";
import MyImage from "./MyImage";
import { skillSetInterface } from "./skills";

/* eslint-disable @next/next/no-img-element */
const SkillContainer = ({
    height,
    skillSet,
}: {
    height: number | string;
    skillSet: skillSetInterface;
}) => {
    return (
        <div>
            <ColoringTitle as="h3">{skillSet.title}</ColoringTitle>
            <div className="flex flex-wrap items-center justify-center gap-2">
                {skillSet.skills.map((skill) => (
                    <MyImage
                        key={skill.alt}
                        src={skill.src}
                        height={height}
                        alt={skill.alt}
                    />
                ))}
            </div>
        </div>
    );
};

export default SkillContainer;
