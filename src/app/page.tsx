import dynamic from "next/dynamic";
import {
    CardGridSkeleton,
    ContactSkeleton,
    SectionSkeleton,
    TimelineSkeleton,
} from "@/components/LoadingSkeletons";
import Hero from "@/components/sections/Hero";

const Projects = dynamic(() => import("@/components/sections/Projects"), {
    loading: () => <CardGridSkeleton count={3} />,
    ssr: true,
});

const Experience = dynamic(() => import("@/components/sections/Experience"), {
    loading: () => <TimelineSkeleton />,
    ssr: true,
});

const About = dynamic(() => import("@/components/sections/About"), {
    loading: () => <SectionSkeleton />,
    ssr: true,
});

const Skills = dynamic(() => import("@/components/sections/Skills"), {
    loading: () => <SectionSkeleton />,
    ssr: true,
});

const Contact = dynamic(() => import("@/components/sections/Contact"), {
    loading: () => <ContactSkeleton />,
    ssr: true,
});

export default function Home() {
    return (
        <>
            <Hero />
            <Projects />
            <Experience />
            <About />
            <Skills />
            <Contact />
        </>
    );
}
