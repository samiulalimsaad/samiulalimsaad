import Image from "next/image";
import Link from "next/link";
import React from "react";
import SamiulAlim from "../images/samiul-alim.svg";
const Hero = () => {
    return (
        <div
            className="min-h-screen hero"
            style={{ background: `url(hero-space.png)` }}
        >
            <div className="flex-col justify-between hero-content lg:flex-row-reverse">
                <div className="block w-full">
                    <Image
                        src={SamiulAlim}
                        alt="Samiul Alim"
                        layout="responsive"
                        height={1240}
                        width={1240}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
                <div>
                    <h1 className="font-bold text-center text-8xl sm:text-left">
                        Samiul Alim
                    </h1>
                    <p className="py-6 text-xl text-center sm:text-left sm:w-10/12">
                        I have been very passionate about computers,
                        programming, and software development since my
                        university life. I dream of being an expert software
                        engineer or a web developer so that I can build
                        professional & helpful software or web application that
                        has Lite Media (January 22) business value.
                    </p>
                    <div className="flex justify-center sm:justify-start">
                        <Link href="/contact" passHref>
                            <a className="btn btn-primary">Hire Me</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
