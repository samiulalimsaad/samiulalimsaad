import { getBlogs } from "../backend/services/blog.service";
import { getProjects } from "../backend/services/project.service";
import About from "../components/About";
import Blogs from "../components/Blogs";
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
    const [projects, blogs] = await Promise.all([getProjects(), getBlogs()]);
    return { projects, blogs };
}
getBlogs();
const Home = async () => {
    const { projects, blogs } = await getData();

    return (
        <>
            <Hero />
            <Projects projects={projects} />
            <Experience />
            <Skill />
            <Education />
            <About />
            <Blogs blogs={blogs} />
            {/* <GithubStats /> */}
            <Contact />
        </>
    );
};

export default Home;
