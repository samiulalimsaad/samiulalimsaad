export default function About() {
    return (
        <section id="about" className="w-full py-20 bg-white">
            <div className="max-w-2xl mx-auto px-6 sm:px-0">
                <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-cyan-400 py-6 mb-4 text-center">
                    About Me
                </h2>
                <div className="rounded-2xl shadow-lg bg-gradient-to-br from-white/95 via-zinc-200/60 to-cyan-50/30 px-4 py-8">
                    <p className="text-xl text-zinc-700 mb-4 leading-relaxed">
                        I’m{" "}
                        <span className="font-semibold text-indigo-500">
                            Samiul Alim
                        </span>{" "}
                        from Bangladesh. I’ve been passionate about computers,
                        programming, and web development since my university
                        days at{" "}
                        <span className="font-semibold text-cyan-600">
                            North Bengal International University
                        </span>
                        .
                    </p>
                    <p className="text-lg text-zinc-600 mb-4 leading-relaxed">
                        With over 2 years of experience in both back-end and
                        front-end web development, I specialize in building
                        modern, scalable websites and apps using tools like
                        Node.js, React, Next.js, and MongoDB.
                    </p>
                    <p className="text-lg text-zinc-600 leading-relaxed">
                        I love solving real-world problems and am always
                        striving to create elegant and innovative solutions that
                        have tangible business value.
                    </p>
                </div>
            </div>
        </section>
    );
}
