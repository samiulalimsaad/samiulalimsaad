import About from "@/components/sections/About";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <Blog />
            <Contact />
        </>
    );
}
