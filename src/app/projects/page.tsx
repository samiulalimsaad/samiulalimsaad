import Projects from "../../components/Projects";

async function getStaticData() {
    const res = await fetch("https://samiulalimsaad.vercel.app/api/projects");
    const { projects } = await res.json();
    return {
        projects,
    };
}
const ProjectsPage = async () => {
    const { projects } = await getStaticData();

    return <Projects all={true} projects={projects} />;
};

export default ProjectsPage;
