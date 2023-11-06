import { getProjects } from "../../backend/services/project.service";
import Projects from "../../components/Projects";

async function getStaticData() {
    const projects = await getProjects();
    return {
        projects,
    };
}
const ProjectsPage = async () => {
    const { projects } = await getStaticData();
    return <Projects all={true} projects={projects} />;
};

export default ProjectsPage;
