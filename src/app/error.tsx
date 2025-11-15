"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <main className="min-h-screen bg-linear-to-b from-white via-sky-50/70 to-indigo-50/60 px-4 py-16">
            <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center text-center">
                <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-red-100 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-wide text-red-500 shadow-sm">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-[0.7rem] font-semibold text-red-600">
                        !
                    </span>
                    <span>Something went wrong</span>
                </div>

                <div className="w-full max-w-2xl rounded-3xl border border-gray-200 bg-white/90 p-8 backdrop-blur-sm">
                    <h1 className="mb-3 text-3xl sm:text-4xl font-semibold text-foreground">
                        This section failed to load.
                    </h1>
                    <p className="mb-6 text-sm sm:text-base text-foreground/70">
                        An unexpected error occurred while rendering this page.
                        You can try again, or go back and explore the rest of
                        the site.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <button
                            type="button"
                            onClick={reset}
                            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-indigo-600 via-cyan-500 to-sky-500 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-px active:translate-y-0"
                        >
                            Try again
                        </button>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center rounded-full border border-foreground/10 bg-white/80 px-6 py-2.5 text-sm font-medium text-foreground shadow-sm hover:bg-foreground/5"
                        >
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
