"use client";

import {
    AtSign,
    Facebook,
    Github,
    Linkedin,
    Mail,
    MessageCircle,
    Phone,
    SendHorizontal,
    User,
} from "lucide-react";

const Contact = () => {
    return (
        <section
            id="contact"
            className="w-full bg-linear-to-b from-white via-sky-50/60 to-indigo-50/40 py-20 px-4"
        >
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:flex-row md:items-stretch">
                {/* Contact Info */}
                <div className="flex-1 flex items-center">
                    <div className="w-full rounded-3xl bg-white/80 p-8 backdrop-blur-sm border border-gray-200">
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
                                    href="tel:+8801521418692"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center hover:text-sky-600"
                                >
                                    <span className="mr-4">
                                        <Phone className="h-5 w-5" />
                                    </span>
                                    +880 1521 418 692
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

                {/* Simple contact form (client-side only) */}
                <div className="flex-1 flex items-center">
                    <form className="w-full rounded-3xl bg-white/90 p-8 backdrop-blur-sm border border-gray-200 shadow-md space-y-6">
                        <div className="flex items-center justify-between gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-zinc-800">
                                Send me a message
                            </h3>
                            <span className="text-xs font-medium uppercase tracking-wide text-indigo-500 bg-indigo-50 px-2 py-1 rounded-full">
                                Typically replies within a day
                            </span>
                        </div>

                        <div className="space-y-4">
                            <div className="form-control">
                                <label htmlFor="name" className="label">
                                    <span className="label-text text-sm font-medium text-zinc-700">
                                        Name
                                    </span>
                                </label>
                                <div className="relative">
                                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-zinc-400">
                                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100">
                                            <User className="h-4 w-4" />
                                        </span>
                                    </span>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Your full name"
                                        className="input w-full rounded-full border border-zinc-200 bg-zinc-50/80 pl-16 pr-4 py-3 text-sm text-zinc-800 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                                    />
                                </div>
                            </div>

                            <div className="form-control">
                                <label htmlFor="email" className="label">
                                    <span className="label-text text-sm font-medium text-zinc-700">
                                        Email
                                    </span>
                                </label>
                                <div className="relative">
                                    <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-zinc-400">
                                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100">
                                            <AtSign className="h-4 w-4" />
                                        </span>
                                    </span>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className="input w-full rounded-full border border-zinc-200 bg-zinc-50/80 pl-16 pr-4 py-3 text-sm text-zinc-800 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                                    />
                                </div>
                            </div>

                            <div className="form-control">
                                <label htmlFor="message" className="label">
                                    <span className="label-text text-sm font-medium text-zinc-700">
                                        Message
                                    </span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder="Tell me briefly what you’d like to work on together..."
                                    className="textarea w-full rounded-2xl border border-zinc-200 bg-zinc-50/80 px-4 py-3.5 text-sm text-zinc-800 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 resize-none"
                                />
                                <span className="mt-2 text-xs text-zinc-500">
                                    I&apos;ll get back to you as soon as I can.
                                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="btn w-full border-none bg-linear-to-r from-indigo-600 via-cyan-500 to-sky-500 text-white font-semibold text-sm sm:text-[0.95rem] py-2.5 sm:py-3 hover:-translate-y-px active:translate-y-0 transition duration-150 flex items-center justify-center gap-2"
                        >
                            <span>Send Message</span>
                            <span className="inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/10 border border-white/20">
                                <SendHorizontal className="h-4 w-4" />
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
