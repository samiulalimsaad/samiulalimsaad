import { Github, Linkedin, Mail } from "lucide-react";
import ContactForm from "./ContactForm";

const primaryLinks = [
    { Icon: Mail, href: "mailto:samiulalimsaad@gmail.com", label: "samiulalimsaad@gmail.com" },
    { Icon: Linkedin, href: "https://linkedin.com/in/samiulalimsaad", label: "linkedin.com/in/samiulalimsaad" },
    { Icon: Github, href: "https://github.com/samiulalimsaad", label: "github.com/samiulalimsaad" },
];

const otherLinks = [
    { label: "Facebook", href: "https://facebook.com/samiulalimsaad" },
    { label: "Discord", href: "https://discord.com/users/938388181202653224" },
    { label: "Messenger", href: "https://m.me/samiulalimsaad" },

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
                        <p className="text-base sm:text-lg text-zinc-700 mb-4 leading-relaxed">
                            Let&apos;s connect. You can reach me through email,
                            LinkedIn, or GitHub.
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

                            <details className="group mt-4">
                                <summary className="flex cursor-pointer items-center gap-1 text-xs font-medium text-foreground/50 hover:text-foreground/70 [&::-webkit-details-marker]:hidden">
                                    <span className="transition group-open:rotate-90 inline-block mr-1">›</span>
                                    More platforms
                                </summary>
                                <div className="mt-2 space-y-2 pl-1">
                                    {otherLinks.map(({ label, href }) => (
                                        <p key={href} className="flex items-center">
                                            <a
                                                href={href}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="text-sm text-foreground/60 hover:text-sky-600"
                                            >
                                                {label}
                                            </a>
                                        </p>
                                    ))}
                                </div>
                            </details>
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
