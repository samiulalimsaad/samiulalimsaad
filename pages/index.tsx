import type { NextPage } from "next";
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
            <Footer />
        </div>
    );
};

export default Home;
