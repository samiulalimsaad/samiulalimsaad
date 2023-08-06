import { Metadata } from "next";
import About from "../components/About";
import Blog from "../components/Blogs";
import Contact from "../components/Contact";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skill from "../components/Skill";

export const metaData: Metadata = {
    title: "Samiul Alim",
    description:
        "I dream to be an expert software engineer. In-depth knowledge of Node JS, React, NextJS, and MongoDB. 2 years of experience efficiently coding websites and applications using modern JavaScript, Typescript, back-end, and front-end developer. Building state-of-the-art, easy-to-use, user-friendly websites and applications is truly a passion, and I am confident I would be an excellent addition to your organization.",
    abstract:
        "I dream to be an expert software engineer. In-depth knowledge of Node JS, React, NextJS, and MongoDB. 2 years of experience efficiently coding websites and applications using modern JavaScript, Typescript, back-end, and front-end developer. Building state-of-the-art, easy-to-use, user-friendly websites and applications is truly a passion, and I am confident I would be an excellent addition to your organization.",
    icons: [{ rel: "icon", url: "/samiul-alim.ico" }],
    viewport: { width: "device-width", initialScale: 1 },
    category: "portfolio",
    colorScheme: "dark",
    creator: "Samiul Alim",
    robots: {
        index: true,
        follow: true,
    },
    bookmarks: "https://samiulalimsaad.vercel.app",
    applicationName: "Samiul Alim portfolio",
    authors: [
        {
            name: "Samiul Alim",
            url: "https://github.com/samiulalimsaad",
        },
    ],
    keywords: [
        "Github",
        "JavaScript",
        "Python",
        "Git",
        "Portfolio",
        "Firebase",
        "TypeScript",
        "React.js",
        "Next.js",
        "Website",
        "Web",
        "Developer",
        "Front-End",
        "Engineer",
        "Full-Stack",
        "Programmer",
        "Samiul",
        "Alim",
        "Saad",
        "Back-End",
        "Specialist",
        "Node.js",
        "Vue.js",
        "HTML5",
        "CSS3",
        "DaisyUI",
        "Redux",
        "ES6",
        "Tailwind CSS",
        "Context API",
        "Express.js",
        "PHP",
        "Symfony",
        "Flask",
        "NoSQL",
        "SQL",
        "MongoDB",
        "Firestore",
        "Mongoose",
        "Doctrine",
        "Git Version Control",
        "GitHub Repository",
        "Docker Containers",
        "Sonata Admin Panel",
        "Stripe Payments",
        "Netlify Deployment",
        "Vercel Hosting",
        "Authorization Methods",
        "Authentication Systems",
        "Problem-Solving Skills",
        "GraphQL Queries",
        "Bootstrap Framework",
        "Material Design Bootstrap",
        "RESTful APIs",
        "Material-UI Library",
        "Logic Building Techniques",
        "Linux OS",
        "Strapi CMS",
    ],
    openGraph: {
        type: "website",
        url: "https://github.com/samiulalimsaad",
        title: "Samiul Alim",
        description:
            "I dream to be an expert software engineer. In-depth knowledge of Node JS, React, NextJS, and MongoDB. 2 years of experience efficiently coding websites and applications using modern JavaScript, Typescript, back-end, and front-end developer. Building state-of-the-art, easy-to-use, user-friendly websites and applications is truly a passion, and I am confident I would be an excellent addition to your organization.",
        siteName: "Samiul Alim portfolio",
        images: [
            {
                url: "/Samiul-Alim.png",
            },
        ],
    },
    other: {
        "og:url": "https://samiulalimsaad.vercel.app/",
        "og:image": "/Samiul-Alim.png",
    },
    publisher: "Samiul Alim",
    referrer: "origin",
};

// This function gets called at build time
export async function getData() {
    const res = await fetch("https://samiulalimsaad.vercel.app/api/projects");
    const { projects } = await res.json();
    console.log(projects);
    return projects;
}

const Home = async () => {
    const projects = await getData();

    return (
        <>
            <Hero />
            <Projects projects={projects} />
            <Experience />
            <Skill />
            <Education />
            <About />
            <Blog />
            {/* <GithubStats /> */}
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
