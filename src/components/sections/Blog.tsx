import { BookOpen } from "lucide-react";

export default function Blog() {
    return (
        <section
            id="writing"
            className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-20 px-4 animate-section-in"
        >
            <div className="mx-auto w-full max-w-6xl">
                <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight mb-2">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        Writing
                    </span>
                </h2>
                <p className="mx-auto mb-10 max-w-2xl text-center text-sm sm:text-base text-foreground/70">
                    I write about backend engineering, system design, and operational patterns.
                </p>

                <div className="mx-auto max-w-xl">
                    <div className="rounded-3xl border border-white/70 bg-white/80 p-8 backdrop-blur-sm shadow-sm text-center">
                        <div className="mb-4 flex justify-center">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                                <BookOpen className="h-6 w-6" />
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                            Read on Medium
                        </h3>
                        <p className="text-sm text-foreground/60 mb-5">
                            I publish technical articles about backend systems, payment
                            integrations, and platform engineering challenges.
                        </p>
                        <a
                            href="https://medium.com/@samiulalimsaad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-full bg-linear-to-r from-cyan-500 to-indigo-500 px-6 py-2 text-sm font-semibold text-white transition hover:from-cyan-600 hover:to-indigo-600"
                        >
                            Visit Medium Profile
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
