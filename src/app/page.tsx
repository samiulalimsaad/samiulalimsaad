import About from "@/components/sections/About";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import SocialLinks from "@/components/sections/SocialLinks";

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
            <div className="w-full bg-linear-to-b from-white via-sky-50/70 to-indigo-50/60 py-10 px-4">
                <div className="mx-auto flex max-w-6xl items-center justify-center rounded-3xl border border-white/70 bg-white/80 p-6 shadow-xl backdrop-blur-sm">
                    <SocialLinks size={32} />
                </div>
            </div>
        </>
    );
}
