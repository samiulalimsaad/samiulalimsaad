import type { NextPage } from "next";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Skill from "../components/Skill";

const Home: NextPage = () => {
    return (
        <div>
            <Hero />
            <Experience />
            <Skill />
        </div>
    );
};

export default Home;
