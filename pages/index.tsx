import axios from "axios";
import About from "../components/About";
import Blog from "../components/Blogs";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skill from "../components/Skill";
import { projectInterface } from "../interfaces/Project.interface";

const Home = ({ projects }: { projects: projectInterface[] }) => {
    return (
        <div>
            <Hero />
            <Projects projects={projects} />
            <Experience />
            <Skill />
            <Education />
            <About />
            <Blog />
            {/* <GithubStats /> */}
            <Contact />
            <Footer />
        </div>
    );
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

export default Home;
