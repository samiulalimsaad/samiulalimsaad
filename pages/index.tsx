import type { NextPage } from "next";
import Blog from "../components/Blogs";
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
            <Blog />
            <Footer />
        </div>
    );
};

export default Home;
