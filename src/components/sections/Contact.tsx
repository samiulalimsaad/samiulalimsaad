import { Github, Linkedin, Mail } from "lucide-react";
import ContactForm from "./ContactForm";

const primaryLinks = [
    { Icon: Mail, href: "mailto:samiulalimsaad@gmail.com", label: "samiulalimsaad@gmail.com" },
    {
        Icon: Linkedin,
        href: "https://linkedin.com/in/samiulalimsaad",
        label: "linkedin.com/in/samiulalimsaad",
    },
    { Icon: Github, href: "https://github.com/samiulalimsaad", label: "github.com/samiulalimsaad" },
];

const Contact = () => {
    return (
        <section
            id="contact"
            className="w-full bg-linear-to-b from-white via-sky-50/60 to-indigo-50/40 py-20 px-4 animate-section-in"
        >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-stretch">
                <div className="flex-1 flex">
                    <div className="w-full h-full rounded-3xl bg-white/80 p-8 backdrop-blur-sm border border-gray-200 animate-soft-in">
                        <h2 className="text-center md:text-left text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                            <span className="bg-linear-to-r from-indigo-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                                Contact Me
                            </span>
                        </h2>
                        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4 mb-4">
                            <p className="text-sm text-foreground/80 leading-relaxed">
                                Open to mid-level and senior software engineering roles. Remote ·
                                comfortable collaborating across US and European time zones.
                            </p>
                        </div>
                        <p className="text-base sm:text-lg text-zinc-700 mb-4 leading-relaxed">
                            Let&apos;s talk about how I can help your engineering team build
                            reliable systems.
                        </p>
                        <div className="space-y-3 text-zinc-700">
                            {primaryLinks.map(({ Icon, href, label }) => (
                                <p key={href} className="flex items-center">
                                    <a
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex items-center hover:text-sky-600"
                                    >
                                        <span className="mr-4">
                                            <Icon className="h-5 w-5" />
                                        </span>
                                        {label}
                                    </a>
                                </p>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex-1 flex animate-soft-in">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default Contact;
