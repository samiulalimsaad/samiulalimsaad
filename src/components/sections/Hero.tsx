import Image from "next/image";

const socials = [
    {
        href: "https://github.com/samiulalimsaad",
        icon: "/socials/github.svg",
        label: "GitHub",
    },
    {
        href: "https://www.linkedin.com/in/samiulalimsaad",
        icon: "/socials/linkedin.svg",
        label: "LinkedIn",
    },
    {
        href: "https://twitter.com/samiulalimsaad",
        icon: "/socials/twitter.svg",
        label: "Twitter",
    },
];

export default function Hero() {
    return (
        <section className="relative flex min-h-[80vh] items-center justify-center bg-gradient-to-b from-sky-50 via-white to-indigo-50 px-4">
            <div className="absolute inset-x-0 top-20 -z-10 flex justify-center">
                <div className="h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl" />
            </div>
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 text-center md:flex-row md:items-center md:text-left">
                <div className="flex-1 flex flex-col items-center md:items-start gap-5">
                    <span className="inline-flex items-center rounded-full border border-cyan-200 bg-white/60 px-4 py-1 text-xs font-semibold text-cyan-700 shadow-sm backdrop-blur">
                        <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400" />
                        Open to opportunities
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                        <span className="block text-zinc-900">
                            Hi, I&apos;m
                        </span>
                        <span className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                            Samiul Alim
                        </span>
                    </h1>
                    <p className="max-w-xl text-sm sm:text-base md:text-lg text-zinc-600">
                        Software Engineer &amp; Fullstack Web Developer
                        specializing in building modern, scalable web
                        applications with{" "}
                        <span className="font-semibold text-cyan-700">
                            Next.js
                        </span>
                        ,
                        <span className="font-semibold text-indigo-700">
                            {" "}
                            React
                        </span>
                        , and
                        <span className="font-semibold text-emerald-700">
                            {" "}
                            Node.js
                        </span>
                        .
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
                        <a
                            href="#projects"
                            className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500 px-6 py-2 text-sm font-semibold text-white shadow-md transition hover:from-cyan-600 hover:to-indigo-600"
                        >
                            View Projects
                        </a>
                        <a
                            href="#about"
                            className="inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-6 py-2 text-sm font-semibold text-zinc-800 shadow-sm transition hover:border-cyan-300 hover:text-cyan-700"
                        >
                            About Me
                        </a>
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                            2+ years experience
                        </div>
                        <div className="flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-zinc-600 shadow-sm">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                            Based in Bangladesh
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex justify-center md:justify-end">
                    <div className="relative">
                        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-300 via-indigo-300 to-sky-200 opacity-70 blur-md" />
                        <div className="relative rounded-3xl bg-white/80 p-4 shadow-xl backdrop-blur">
                            <div className="mx-auto flex h-40 w-40 items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-md sm:h-44 sm:w-44">
                                <Image
                                    src="/avatars/samiul-alim.png"
                                    width={176}
                                    height={176}
                                    alt="Samiul Alim"
                                    className="h-full w-full object-cover"
                                    priority
                                />
                            </div>
                            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                                {socials.map((s) => (
                                    <a
                                        key={s.href}
                                        href={s.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.label}
                                        className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-indigo-500 text-white shadow-md transition hover:scale-110"
                                    >
                                        <Image
                                            src={s.icon}
                                            alt={s.label}
                                            width={20}
                                            height={20}
                                        />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
