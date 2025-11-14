import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import SocialLinks from "@/components/sections/SocialLinks";
export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Education />
            <Skills />
            <Projects />
            <div className="w-full flex justify-center py-10 bg-white">
                <SocialLinks size={36} />
            </div>
        </>
    );
}
