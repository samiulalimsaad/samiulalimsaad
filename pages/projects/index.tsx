import axios from "axios";
import Projects from "../../components/Projects";
import { projectInterface } from "../../interfaces/Project.interface";

const index = ({ projects }: { projects: projectInterface[] }) => {
    return <Projects all={true} projects={projects} />;
};

// This function gets called at build time
export async function getStaticProps() {
    const { data } = await axios.get(
        "https://samiulalimsaad.vercel.app/api/projects"
    );
    const { projects } = data;
    return {
        props: { projects },
    };
}

export default index;
