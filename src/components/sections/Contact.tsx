import {
    Facebook,
    Github,
    Linkedin,
    Mail,
    MessageCircle,
    MessageSquareCode,
    Phone,
} from "lucide-react";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <section
            id="contact"
            className="w-full bg-linear-to-b from-white via-sky-50/60 to-indigo-50/40 py-20 px-4 animate-section-in"
        >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-stretch">
                {/* Contact Info */}
                <div className="flex-1 flex">
                    <div className="w-full h-full rounded-3xl bg-white/80 p-8 backdrop-blur-sm border border-gray-200 animate-soft-in">
                        <h2 className="text-center md:text-left text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                            <span className="bg-linear-to-r from-indigo-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                                Contact Me
                            </span>
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-700 mb-4 leading-relaxed">
                            Let&apos;s connect. You can reach me directly
                            through email, phone, or any of my social profiles
                            below.
                        </p>
                        <div className="space-y-3 text-zinc-700">
                            <p className="flex items-center">
                                <a
                                    href="mailto:samiulalimsaad@gmail.com"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center hover:text-sky-600"
                                >
                                    <span className="mr-4">
                                        <Mail className="h-5 w-5" />
                                    </span>
                                    samiulalimsaad@gmail.com
                                </a>
                            </p>
                            <p className="flex items-center">
                                <a
                                    href="tel:+8801715378032"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center hover:text-sky-600"
                                >
                                    <span className="mr-4">
                                        <Phone className="h-5 w-5" />
                                    </span>
                                    +880 1715 37 80 32
                                </a>
                            </p>

                            <p className="flex items-center">
                                <a
                                    href="https://facebook.com/samiulalimsaad"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center hover:text-sky-600"
                                >
                                    <span className="mr-4">
                                        <Facebook className="h-5 w-5" />
                                    </span>
                                    facebook.com/samiulalimsaad
                                </a>
                            </p>
                            <p className="flex items-center">
                                <a
                                    href="https://discord.com/users/938388181202653224"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center hover:text-sky-600"
                                >
                                    <span className="mr-4">
                                        <MessageSquareCode className="h-5 w-5" />
                                    </span>
                                    discord.com/users/938388181202653224
                                </a>
                            </p>
                            <p className="flex items-center">
                                <a
                                    href="https://m.me/samiulalimsaad"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center hover:text-sky-600"
                                >
                                    <span className="mr-4">
                                        <MessageCircle className="h-5 w-5" />
                                    </span>
                                    m.me/samiulalimsaad
                                </a>
                            </p>
                            <p className="flex items-center">
                                <a
                                    href="https://linkedin.com/in/samiulalimsaad"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center hover:text-sky-600"
                                >
                                    <span className="mr-4">
                                        <Linkedin className="h-5 w-5" />
                                    </span>
                                    linkedin.com/in/samiulalimsaad
                                </a>
                            </p>
                            <p className="flex items-center">
                                <a
                                    href="https://github.com/samiulalimsaad"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center hover:text-sky-600"
                                >
                                    <span className="mr-4">
                                        <Github className="h-5 w-5" />
                                    </span>
                                    github.com/samiulalimsaad
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Simple contact form (separate component) */}
                <div className="flex-1 flex animate-soft-in">
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};

export default Contact;
