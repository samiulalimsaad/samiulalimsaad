const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen hero bg-[url('/about.png')]"
        >
            <div className="w-full h-full py-20 mx-auto bg-slate-900/90 hover:backdrop-blur-sm">
                <h2 className="my-8 text-6xl font-black text-center">About</h2>
                <div className="divider"></div>
                <div className="flex items-center justify-center w-2/3 h-full mx-auto">
                    <div className="flex flex-col gap-4">
                        <p className="text-2xl leading-relaxed text-center">
                            I&apos;m Samiul Alim. I&apos;m from Rajshahi,
                            Bangladesh. I completed my BSc graduation in CSE
                            from North Bengal International University.
                        </p>
                        <p className="text-2xl leading-relaxed text-center">
                            I have been very passionate about computers,
                            programming, and software development since my
                            university life. I have 2+ years of experience in
                            Web Development as a back-end and a front-end
                            developer.
                        </p>
                        <p className="text-2xl leading-relaxed text-center">
                            In-depth knowledge of Node JS, React, NextJS and
                            MongoDB. Skillful in creating servers and databases
                            for functionality, designing and developing APIs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
