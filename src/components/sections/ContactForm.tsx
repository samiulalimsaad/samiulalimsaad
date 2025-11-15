"use client";

import {
    sendContact,
    type ContactActionState,
} from "@/server-actions/sendContact";
import { AtSign, Loader2, SendHorizontal, User } from "lucide-react";
import { useActionState } from "react";

const initialState: ContactActionState = {
    status: "idle",
    message: null,
};

const ContactForm = () => {
    const [state, formAction, isPending] = useActionState(
        sendContact,
        initialState
    );

    return (
        <form
            className="w-full rounded-3xl bg-white/90 p-8 backdrop-blur-sm border border-gray-200 space-y-6"
            action={formAction}
        >
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
                            className="input w-full rounded-full border border-zinc-200 bg-zinc-50/80 pl-16 pr-4 py-3 text-sm text-zinc-800 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                            required
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
                            className="input w-full rounded-full border border-zinc-200 bg-zinc-50/80 pl-16 pr-4 py-3 text-sm text-zinc-800 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-200"
                            required
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
                        className="textarea w-full rounded-2xl border border-zinc-200 bg-zinc-50/80 px-4 py-3.5 text-sm text-zinc-800  focus:border-indigo-400 focus:outline-none focus:ring-indigo-200 resize-none"
                        required
                    />
                    <span className="mt-2 text-xs text-zinc-500">
                        I&apos;ll get back to you as soon as I can.
                    </span>
                </div>
            </div>

            {state.message && (
                <p
                    className={`mb-2 text-xs sm:text-sm ${
                        state.status === "success"
                            ? "text-emerald-600"
                            : "text-red-600"
                    }`}
                >
                    {state.message}
                </p>
            )}

            <button
                type="submit"
                className="btn w-full border-none bg-linear-to-r from-indigo-600 via-cyan-500 to-sky-500 text-white font-semibold text-sm sm:text-[0.95rem] py-2.5 sm:py-3 hover:-translate-y-px active:translate-y-0 transition duration-150 flex items-center justify-center gap-2"
            >
                {isPending ? (
                    <>
                        <span>Sending Message....</span>
                        <span className="inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/10 border border-white/20">
                            <Loader2 className="h-4 w-4 animate-spin" />
                        </span>
                    </>
                ) : (
                    <>
                        <span>Send Message</span>
                        <span className="inline-flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/10 border border-white/20">
                            <SendHorizontal className="h-4 w-4" />
                        </span>
                    </>
                )}
            </button>
        </form>
    );
};

export default ContactForm;
