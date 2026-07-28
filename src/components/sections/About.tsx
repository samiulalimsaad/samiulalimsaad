export default function About() {
    return (
        <section
            id="about"
            className="w-full bg-linear-to-b from-white via-sky-50/60 to-indigo-50/40 py-20 px-4 animate-section-in"
        >
            <div className="mx-auto w-full max-w-6xl rounded-3xl border border-gray-200 bg-white/80 p-6 sm:p-8 backdrop-blur-sm animate-soft-in">
                <h2 className="text-center md:text-left text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                    <span className="bg-linear-to-r from-indigo-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
                        About
                    </span>
                </h2>

                <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
                    <div className="space-y-4 text-base sm:text-lg text-foreground/80 leading-relaxed">
                        <p>
                            I build platform services that other engineering teams depend on. My
                            work lives at the intersection of backend systems, security, and
                            operational reliability. The parts of software that users never see but
                            always notice when they break.
                        </p>
                        <p>
                            At <span className="font-semibold text-cyan-700">Programming Hero</span>
                            , I own production maintenance of the centralized email platform (PH
                            Mailer), a multi-gateway payment service in Go, and a multi-tenant auth
                            platform on ZITADEL. I manage UAT environments and deployment pipelines,
                            with 5 production services under 24/7 monitoring and alerting. I&apos;ve
                            coordinated implementation and reviewed work for mid-level engineers
                            within my scope.
                        </p>
                        <p>
                            I care less about collecting frameworks and more about whether a design
                            stays understandable when the product and the team change. Clear service
                            boundaries. Security and authorization treated as core design, not a
                            bolt-on. Changes that can be deployed and operated without heroics.
                        </p>
                        <p>
                            I&apos;m comfortable full-stack when the product needs it, but my center
                            of gravity is backend and platform work. I&apos;m open to remote roles
                            and work well with US and European time zones.
                        </p>
                    </div>

                    <aside className="rounded-3xl border border-white/70 bg-white/80 p-5 sm:p-6 shadow-sm backdrop-blur-sm animate-card-in">
                        <div className="mb-4">
                            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">
                                Principles
                            </p>
                        </div>
                        <div className="grid gap-3">
                            {[
                                "Prefer boring, operable designs over clever ones",
                                "Security and tenancy decided early, not bolted on",
                                "Teach and document so systems aren't stuck in one person's head",
                                "Own what I touch: maintenance is engineering, not overhead",
                            ].map((principle) => (
                                <div
                                    key={principle}
                                    className="rounded-2xl border border-cyan-100 bg-cyan-50/50 p-3"
                                >
                                    <p className="text-sm font-medium leading-relaxed text-foreground/80">
                                        {principle}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 pt-4 border-t border-gray-100">
                            <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700 mb-2">
                                Education
                            </p>
                            <div className="space-y-2 text-sm text-foreground/70">
                                <p>
                                    <span className="font-medium text-foreground/80">
                                        MSc, Computer Science & Engineering
                                    </span>
                                    <br />
                                    University of Rajshahi · 2024
                                </p>
                                <p>
                                    <span className="font-medium text-foreground/80">
                                        BSc, Computer Science & Engineering
                                    </span>
                                    <br />
                                    North Bengal International University · 2021
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
