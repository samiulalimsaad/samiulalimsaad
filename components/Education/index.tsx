import Educations from "./Educations";

const Education = () => (
    <section
        id="education"
        className="min-h-screen hero bg-[url('/education.png')] bg-fixed"
    >
        <div className="w-full h-full py-20 mx-auto bg-slate-900/50 hover:backdrop-blur-sm">
            <h2
                className="my-8 text-6xl font-black text-center"
                data-aos="zoom-in-down"
                data-aos-duration="2000"
                data-aos-anchor-placement="center-bottom"
            >
                Education
            </h2>
            <div className="divider"></div>
            <div className="flex items-center justify-center mx-auto sm:w-2/3">
                <Educations />
            </div>
        </div>
    </section>
);

export default Education;
