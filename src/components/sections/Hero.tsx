import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import ResumeButton from "@/components/ResumeButton";

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
        href: "mailto:samiulalimsaad@gmail.com",
        Icon: Mail,
        label: "Email",
    },
];

export default function Hero() {
    return (
        <section
            id="home"
            className="relative flex min-h-[80vh] items-center justify-center bg-linear-to-b from-sky-50 via-white to-indigo-50 px-4 scroll-mt-16"
        >
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 text-center md:flex-row md:items-center md:text-left">
                <div className="flex-1 flex flex-col items-center md:items-start gap-5">
                    <p className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/80 px-3 py-1 text-xs font-medium text-cyan-700">
                        Samiul Alim · Software Engineer
                    </p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                        <span className="bg-linear-to-r from-cyan-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                            I own production systems
                        </span>
                        <br />
                        <span className="text-foreground">other engineering teams depend on.</span>
                    </h1>
                    <p className="max-w-xl text-sm sm:text-base md:text-lg text-foreground/70">
                        Backend-focused software engineer building production platform services —
                        authentication, payments, and email delivery. I design shared
                        infrastructure, operate it in production, and respond when it breaks at 2
                        AM.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
                        <a
                            href="#projects"
                            aria-label="View case studies"
                            className="inline-flex items-center rounded-full bg-linear-to-r from-cyan-500 to-indigo-500 px-6 py-2 text-sm font-semibold text-white transition"
                        >
                            View Case Studies
                        </a>
                        <ResumeButton />
                    </div>
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-foreground/70">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                            Open to remote roles
                        </div>
                        <div className="flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-foreground/70">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                            US / EU timezone-friendly
                        </div>
                        <div className="flex items-center gap-1 rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-foreground/70">
                            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                            Go · TypeScript · PostgreSQL
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
                    <div className="relative">
                        <div className="relative rounded-3xl bg-white/80 p-4 backdrop-blur">
                            <div className="mx-auto flex h-48 w-48 items-center justify-center overflow-hidden rounded-2xl border-4 border-white sm:h-64 sm:w-64">
                                <Image
                                    src="/avatars/samiul-alim.webp"
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
