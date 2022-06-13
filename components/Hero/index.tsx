import Image from "next/image";
import SamiulAlim from "../../images/samiul-alim.png";
import SocialLinks from "../SocialLinks";

const Hero = () => {
    return (
        <div
            className="min-h-screen hero bg-[url('/hero-space.png')]"
            data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
        >
            <div className="flex items-center justify-center w-full h-full mx-auto hover:backdrop-blur-sm">
                <div className="flex-col justify-between w-full h-full hero-content lg:flex-row-reverse hover:backdrop-blur-sm">
                    <div
                        className="aspect-square"
                        data-aos="zoom-in"
                        data-aos-duration="2000"
                        data-aos-anchor-placement="center-bottom"
                    >
                        <Image
                            src={SamiulAlim}
                            alt="Samiul Alim"
                            height={1240}
                            width={1240}
                            placeholder="blur"
                            className="max-w-sm rounded-full"
                        />
                    </div>
                    <div
                        className="block w-full"
                        data-aos="zoom-in"
                        data-aos-duration="2000"
                        data-aos-anchor-placement="center-bottom"
                    >
                        <h1 className="text-5xl font-bold text-center lg:text-8xl sm:text-left xl:text-7xl md:text-6xl">
                            Samiul Alim
                        </h1>
                        <h3 className="py-6 text-xl font-semibold text-center xl:text-3xl md:text-2xl sm:text-left">
                            I build things for the web.
                        </h3>
                        <p className="py-6 text-base prose text-center md:text-xl sm:text-left sm:w-10/12 prose-stone">
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

                        <div
                            className="flex justify-center gap-4 sm:justify-start"
                            data-aos="zoom-in"
                            data-aos-duration="2000"
                            data-aos-anchor-placement="center-bottom"
                        >
                            <a href="#contact" className="btn btn-primary">
                                Hire Me
                            </a>
                            <a
                                href="https://drive.google.com/file/d/1ZtcoHzmc2DGqJOYZG3dMjHK970_POjsK/view?usp=sharing"
                                target="_blank"
                                rel="noreferrer"
                                onClick={() =>
                                    !window.open(
                                        "https://drive.google.com/file/d/1ZtcoHzmc2DGqJOYZG3dMjHK970_POjsK/view?usp=sharing",
                                        "somesite",
                                        "width=800, height=1200"
                                    )
                                }
                                className="bg-pink-700 btn hover:bg-pink-900"
                            >
                                Resume
                            </a>
                        </div>
                        <div
                            className="flex justify-center gap-4 mt-10 sm:justify-start"
                            data-aos="zoom-in"
                            data-aos-duration="2000"
                            data-aos-anchor-placement="center-bottom"
                        >
                            <SocialLinks />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
