import type { NextPage } from "next";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skill from "../components/Skill";

const Home: NextPage = () => {
    return (
        <div>
            <Hero />
            <Experience />
            <Skill />
            <Projects />
        </div>
    );
};

export default Home;
