import ResumeButton from "@/components/ResumeButton";
import { getExperienceYears } from "@/lib/utils";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";

const socials = [
    {
        href: "https://github.com/samiulalimsaad",
        Icon: Github,
        label: "GitHub",
    },
    {
        href: "https://www.linkedin.com/in/samiulalimsaad",
        Icon: Linkedin,
        label: "LinkedIn",
    },
    {
        href: "https://twitter.com/samiulalimsaad",
        Icon: Twitter,
        label: "Twitter",
    },
    {
        href: "mailto:samiulalimsaad@gmail.com",
        Icon: Mail,
        label: "Email",
    },
];

export default function Hero() {
    const experienceYears = getExperienceYears();

    return (
        <section className="relative flex min-h-[80vh] items-center justify-center bg-linear-to-b from-sky-50 via-white to-indigo-50 px-4 animate-section-in">
            <div className="absolute inset-x-0 top-20 -z-10 flex justify-center">
                <div className="h-64 w-64 rounded-full bg-cyan-200/30 blur-3xl animate-soft-in" />
            </div>
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 text-center md:flex-row md:items-center md:text-left">
                <div className="flex-1 flex flex-col items-center md:items-start gap-5 animate-soft-in">
                    <span className="inline-flex items-center rounded-full border border-cyan-200 bg-white/60 px-4 py-1 text-xs font-semibold text-cyan-700 backdrop-blur">
                        <span className="mr-2 h-2 w-2 rounded-full bg-emerald-400" />
                        Open to opportunities
                    </span>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                        <span className="block text-zinc-900">
                            Hi, I&apos;m
                        </span>
                        <span className="bg-linear-to-r from-cyan-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
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
                            href="#contact"
                            className="inline-flex items-center rounded-full bg-linear-to-r from-cyan-500 to-indigo-500 px-6 py-2 text-sm font-semibold text-white transition"
                        >
                            Hire Me
                        </a>
                        <ResumeButton />
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-zinc-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                            {experienceYears}+ years experience
                        </div>
                        <div className="flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-zinc-600">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                            Based in Bangladesh
                        </div>
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                        {socials.map(({ href, Icon, label }) => (
                            <a
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-indigo-500 text-white transition hover:scale-110"
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>
                <div className="flex-1 flex justify-center md:justify-end">
                    <div className="relative animate-float-slow">
                        <div className="absolute -inset-1 rounded-3xl bg-linear-to-br from-cyan-300 via-indigo-300 to-sky-200 opacity-70 blur-md" />
                        <div className="relative rounded-3xl bg-white/80 p-5 backdrop-blur animate-soft-in">
                            <div className="mx-auto flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border-4 border-white sm:h-72 sm:w-72">
                                <Image
                                    src="/avatars/samiul-alim.png"
                                    width={300}
                                    height={300}
                                    alt="Samiul Alim"
                                    className="h-full w-full object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
