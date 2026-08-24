import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
    return (
        <>
            <Hero />
            <Impact />
            <Projects />
            <Experience />
            <About />
            <Skills />
            <Contact />
        </>
    );
}

function Impact() {
    const metrics = [
        { value: "5", label: "production services owned" },
        { value: "197K+", label: "emails in one 7-day window" },
        { value: "50–60%", label: "lower email delivery cost" },
        { value: "13,820+", label: "leads captured" },
    ];

    return (
        <section className="w-full bg-linear-to-b from-white via-sky-50/60 to-indigo-50/40 px-4 py-12">
            <div className="mx-auto w-full max-w-6xl rounded-3xl border border-white/70 bg-white/80 p-6 shadow-sm backdrop-blur-sm sm:p-8">
                <h2 className="mb-6 text-center text-2xl font-extrabold tracking-tight">
                    <span className="bg-linear-to-r from-cyan-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                        Engineering Impact
                    </span>
                </h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {metrics.map((metric) => (
                        <div
                            key={metric.label}
                            className="rounded-2xl border border-cyan-100 bg-cyan-50/50 p-4 text-center transition hover:-translate-y-0.5 hover:border-indigo-100 hover:bg-indigo-50/50 hover:shadow-sm"
                        >
                            <p className="text-xl font-bold text-indigo-700 sm:text-2xl">
                                {metric.value}
                            </p>
                            <p className="mt-1 text-[11px] leading-4 text-foreground/60 sm:text-xs">
                                {metric.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
