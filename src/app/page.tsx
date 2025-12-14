import {
    CardGridSkeleton,
    ContactSkeleton,
    SectionSkeleton,
    TimelineSkeleton,
} from "@/components/LoadingSkeletons";
import Hero from "@/components/sections/Hero";
import dynamic from "next/dynamic";

// Lazy load sections with appropriate skeleton loaders
const About = dynamic(() => import("@/components/sections/About"), {
    loading: () => <SectionSkeleton />,
    ssr: true,
});

const Experience = dynamic(() => import("@/components/sections/Experience"), {
    loading: () => <TimelineSkeleton />,
    ssr: true,
});

const Education = dynamic(() => import("@/components/sections/Education"), {
    loading: () => <TimelineSkeleton />,
    ssr: true,
});

const Skills = dynamic(() => import("@/components/sections/Skills"), {
    loading: () => <SectionSkeleton />,
    ssr: true,
});

const Projects = dynamic(() => import("@/components/sections/Projects"), {
    loading: () => <CardGridSkeleton count={3} />,
    ssr: true,
});

const Blog = dynamic(() => import("@/components/sections/Blog"), {
    loading: () => <CardGridSkeleton count={3} />,
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
