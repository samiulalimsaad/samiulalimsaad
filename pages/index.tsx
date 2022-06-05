import type { NextPage } from "next";
import Experience from "../components/Experience";
import Hero from "../components/Hero";

const Home: NextPage = () => {
    return (
        <div>
            <Hero />
            <Experience />
        </div>
    );
};

export default Home;
