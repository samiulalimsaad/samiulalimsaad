import type { NextPage } from "next";
import About from "../components/About";
import Blog from "../components/Blogs";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skill from "../components/Skill";

const Home: NextPage = () => {
    return (
        <div>
            <Hero />
            <Projects />
            <Experience />
            <Skill />
            <Education />
            <About />
            <Blog />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;
