import ColoringTitle from "../utils/ColoringTitle";
import Educations from "./Educations";

const Education = () => (
    <section
        id="education"
        className="min-h-screen hero bg-[url('/education.png')] bg-fixed"
    >
        <div className="w-full h-full py-20 mx-auto bg-slate-900/50 backdrop-blur-sm">
            <ColoringTitle as="h2" fontSize="5xl">
                Education
            </ColoringTitle>
            <div className="divider"></div>
            <div className="flex items-center justify-center mx-auto sm:w-2/3">
                <Educations />
            </div>
        </div>
    </section>
);

export default Education;
