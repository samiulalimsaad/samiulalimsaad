"use client";

import { AtSign, Loader2, SendHorizontal, User } from "lucide-react";
import { useActionState } from "react";
import { type ContactActionState, sendContact } from "@/server-actions/sendContact";

const initialState: ContactActionState = {
    status: "idle",
    message: null,
};

const inputClasses =
    "w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200";

const ContactForm = () => {
    const [state, formAction, isPending] = useActionState(sendContact, initialState);

    return (
        <form
            className="w-full rounded-3xl border border-gray-200 bg-white p-8 space-y-6 shadow-sm"
            action={formAction}
        >
            <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="text-lg font-semibold text-gray-900">Send me a message</h3>
                <span className="rounded-full bg-indigo-50 px-2 py-1 text-xs font-medium uppercase tracking-wide text-indigo-500">
                    Replies within a day
                </span>
            </div>

            <div className="space-y-4">
                <div>
                    <label
                        htmlFor="name"
                        className="mb-1.5 block text-sm font-medium text-gray-800"
                    >
                        Name
                    </label>
                    <div className="relative">
                        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                            <User className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            placeholder="Your full name"
                            className={`${inputClasses} pl-10`}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="email"
                        className="mb-1.5 block text-sm font-medium text-gray-800"
                    >
                        Email
                    </label>
                    <div className="relative">
                        <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-gray-400">
                            <AtSign className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            placeholder="you@example.com"
                            className={`${inputClasses} pl-10`}
                            required
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-medium text-gray-800"
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Tell me briefly what you’d like to work on together..."
                        className={`${inputClasses} resize-none`}
                        required
                    />
                    <span className="mt-2 block text-xs text-gray-500">
                        I&apos;ll get back to you as soon as I can.
                    </span>
                </div>
            </div>

            {state.message && (
                <p
                    role="status"
                    aria-live="polite"
                    className={`text-sm ${
                        state.status === "success"
                            ? "rounded-lg bg-emerald-50 px-3 py-2 text-emerald-700"
                            : "rounded-lg bg-red-50 px-3 py-2 text-red-700"
                    }`}
                >
                    {state.message}
                </p>
            )}

            <button
                type="submit"
                disabled={isPending}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-r from-indigo-600 via-cyan-500 to-sky-500 py-3 text-sm font-semibold text-white transition hover:-translate-y-px active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:cursor-not-allowed disabled:opacity-60"
            >
                {isPending ? (
                    <>
                        <span>Sending message...</span>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    </>
                ) : (
                    <>
                        <span>Send Message</span>
                        <SendHorizontal className="h-4 w-4" aria-hidden="true" />
                    </>
                )}
            </button>
        </form>
    );
};

export default ContactForm;
