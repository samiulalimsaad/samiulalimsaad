import Image from "next/image";
import Link from "next/link";
import SamiulAlim from "../../images/samiul-alim.png";
import SocialLinks from "../SocialLinks";
import Container from "../utils/Container";
import ResumeButton from "./ResumeButton";

const Hero = () => (
    <div className="min-h-screen hero bg-[url('/hero-space.png')]">
        <div className="flex items-center justify-center w-full h-full py-10 mx-auto duration-500 sm:hover:backdrop-blur-sm backdrop-blur-sm sm:backdrop-blur-none sm:py-0">
            <Container>
                <div className="flex flex-col items-center justify-between w-full h-full lg:flex-row-reverse ">
                    <div className="flex items-center justify-center aspect-square">
                        <Image
                            src={SamiulAlim}
                            alt="Samiul Alim"
                            placeholder="blur"
                            className=" sm:max-w-xl drop-shadow-md"
                        />
                    </div>
                    <div className="block w-full">
                        <h1 className="text-5xl font-bold text-center lg:text-8xl sm:text-left xl:text-7xl md:text-6xl drop-shadow-md">
                            Samiul Alim
                        </h1>
                        <h3 className="py-6 text-xl font-semibold text-center xl:text-3xl md:text-2xl sm:text-left drop-shadow-md">
                            I build things for the web.
                        </h3>
                        <p className="py-6 text-base leading-8 prose text-justify md:text-xl sm:text-left sm:w-10/12 prose-stone drop-shadow-md text-slate-300">
                            I dream to be an expert software engineer. In-depth
                            knowledge of Node JS, React, NextJS, and MongoDB. 2
                            years of experience efficiently coding websites and
                            applications using modern JavaScript, Typescript,
                            back-end, and front-end developer. Building
                            state-of-the-art, easy-to-use, user-friendly
                            websites and applications is truly a passion, and I
                            am confident I would be an excellent addition to
                            your organization.
                        </p>

                        <div className="flex justify-center gap-4 sm:justify-start">
                            <Link href="#contact" className="btn btn-primary">
                                Hire Me
                            </Link>
                            <ResumeButton />
                        </div>
                        <div className="flex justify-center gap-4 mt-10 sm:justify-start">
                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </div>
);

export default Hero;
