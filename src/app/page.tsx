import { getProjects } from "../backend/services/project.service";
import About from "../components/About";
import Blog from "../components/Blogs";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skill from "../components/Skill";
import { metadataForHomePage } from "./metadataForHomePage";
import { viewport as viewportHomePage } from "./viewport";

export const metadata = metadataForHomePage;
export const viewport = viewportHomePage;
// This function gets called at build time
async function getData() {
    const projects = await getProjects();
    return projects;
}

const Home = async () => {
    const projects = await getData();

    return (
        <>
            <Hero />
            <Projects projects={projects} />
            <Experience />
            <Skill />
            <Education />
            <About />
            <Blog />
            {/* <GithubStats /> */}
            <Contact />
        </>
    );
};

export default Home;
