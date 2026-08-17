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
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 text-center md:flex-row md:items-center md:gap-14 md:text-left">
                <div className="flex flex-[1.4] flex-col items-center gap-5 md:items-start">
                    <p className="inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-white/80 px-3 py-1 text-xs font-medium text-cyan-700">
                        Samiul Alim · Software Engineer
                    </p>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
                        <span className="text-foreground/80">
                            Backend-Focused Full-Stack Engineer
                        </span>
                        <br />
                        <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                            Building Scalable Web Systems
                        </span>
                    </h1>
                    <p className="max-w-2xl text-sm sm:text-base text-foreground/70">
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
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                        <span className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 ring-1 ring-cyan-100">
                            Open to remote roles
                        </span>
                        <span className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 ring-1 ring-cyan-100">
                            US / EU timezone-friendly
                        </span>
                        <span className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 ring-1 ring-cyan-100">
                            Go · TypeScript · PostgreSQL
                        </span>
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
                <div className="flex flex-1 justify-center md:justify-end">
                    <div className="relative">
                        <div className="relative rounded-3xl bg-white/80 p-4 backdrop-blur">
                            <div className="mx-auto flex h-48 w-48 items-center justify-center overflow-hidden rounded-2xl border-4 border-white sm:h-56 sm:w-56">
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
