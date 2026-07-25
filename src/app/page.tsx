import { CardGridSkeleton, ContactSkeleton, SectionSkeleton, TimelineSkeleton } from "@/components/LoadingSkeletons";
import Hero from "@/components/sections/Hero";
import dynamic from "next/dynamic";

const WhyHireMe = dynamic(() => import("@/components/sections/WhyHireMe"), {
    loading: () => <SectionSkeleton />,
    ssr: true,
});

const Projects = dynamic(() => import("@/components/sections/Projects"), {
    loading: () => <CardGridSkeleton count={6} />,
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

const Principles = dynamic(() => import("@/components/sections/Principles"), {
    loading: () => <SectionSkeleton />,
    ssr: true,
});

const CodeSamples = dynamic(() => import("@/components/sections/CodeSamples"), {
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
            <WhyHireMe />
            <Projects />
            <Experience />
            <About />
            <Skills />
            <Principles />
            <CodeSamples />
            <Contact />
        </>
    );
}
