import Image from "next/image";
import React from "react";
import SamiulAlim from "../images/samiul-alim.svg";

const Hero = () => {
    return (
        <div
            className="min-h-screen hero"
            style={{ background: `url(hero-space.png)` }}
        >
            <div className="flex-col justify-between hero-content lg:flex-row-reverse">
                <div className="aspect-square">
                    <Image
                        src={SamiulAlim}
                        alt="Samiul Alim"
                        // layout="responsive"
                        height={1240}
                        width={1240}
                        className="max-w-sm rounded-full"
                    />
                </div>
                <div className="block w-full">
                    <h1 className="text-5xl font-bold text-center lg:text-8xl sm:text-left xl:text-7xl md:text-6xl">
                        Samiul Alim
                    </h1>
                    <h3 className="py-6 text-xl font-semibold text-center xl:text-3xl md:text-2xl sm:text-left">
                        I build things for the web.
                    </h3>
                    <p className="py-6 text-base text-center md:text-xl sm:text-left sm:w-10/12">
                        I&apos;m a software engineer specializing in building
                        (and occasionally designing) exceptional digital
                        experiences. Currently, I&apos;m focused on building
                        accessible, human-centered products at Upstatement.
                    </p>

                    <div className="flex justify-center sm:justify-start">
                        <a href="#contact" className="btn btn-primary">
                            Hire Me
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
