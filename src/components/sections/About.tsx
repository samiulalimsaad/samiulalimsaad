export default function About() {
    return (
        <section
            id="about"
            className="w-full bg-linear-to-b from-white via-sky-50/60 to-indigo-50/40 py-20 px-4"
        >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-stretch">
                <div className="flex-1 flex items-center">
                    <div className="w-full rounded-3xl bg-white/80 p-8 backdrop-blur-sm border border-gray-200">
                        <h2 className="text-center md:text-left text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                            <span className="bg-linear-to-r from-indigo-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                                About Me
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-700 mb-4 leading-relaxed">
                            I’m{" "}
                            <span className="font-semibold text-indigo-600">
                                Samiul Alim
                            </span>{" "}
                            from Bangladesh. I’ve been passionate about
                            computers, programming, and web development since my
                            university days at{" "}
                            <span className="font-semibold text-cyan-600">
                                North Bengal International University
                            </span>
                            .
                        </p>
                        <p className="text-base sm:text-lg text-zinc-600 mb-4 leading-relaxed">
                            With over 2 years of experience in both back-end and
                            front-end web development, I specialize in building
                            modern, scalable websites and apps using tools like
                            Node.js, React, Next.js, and MongoDB.
                        </p>
                        <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
                            I love solving real-world problems and am always
                            striving to create elegant and innovative solutions
                            that have tangible business value.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
