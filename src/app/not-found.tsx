import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-linear-to-b from-white via-sky-50/70 to-indigo-50/60 px-4 py-16">
            <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center text-center">
                <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-wide text-indigo-500 shadow-sm">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-50 text-[0.7rem] font-semibold text-indigo-600">
                        404
                    </span>
                    <span>Page not found</span>
                </div>

                <div className="w-full max-w-2xl rounded-3xl border border-gray-200 bg-white/90 p-8 backdrop-blur-sm">
                    <h1 className="text-3xl sm:text-4xl font-semibold text-foreground mb-3">
                        Lost in the layout.
                    </h1>
                    <p className="text-sm sm:text-base text-foreground/70 mb-6">
                        The page you&apos;re looking for doesn&apos;t exist or
                        might have been moved. You can head back to the homepage
                        to explore my work, skills, and projects.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center rounded-full bg-linear-to-r from-indigo-600 via-cyan-500 to-sky-500 px-6 py-2.5 text-sm font-semibold text-white  transition hover:-translate-y-px active:translate-y-0"
                        >
                            Back to homepage
                        </Link>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center rounded-full border border-foreground/10 bg-white/80 px-6 py-2.5 text-sm font-medium text-foreground shadow-sm hover:bg-foreground/5"
                        >
                            Contact me
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
