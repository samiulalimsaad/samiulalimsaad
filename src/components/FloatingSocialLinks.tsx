import SocialLinks from "@/components/sections/SocialLinks";

export default function FloatingSocialLinks() {
    return (
        <div className="pointer-events-none fixed bottom-4 right-4 z-40">
            <div className="pointer-events-auto">
                <div className="relative flex items-end justify-end">
                    {/* Checkbox acts as pure-CSS toggle (no JS, no client component) */}
                    <input
                        id="floating-social-toggle"
                        type="checkbox"
                        className="peer sr-only"
                        aria-label="Toggle social links"
                    />

                    {/* Toggle button */}
                    <label
                        htmlFor="floating-social-toggle"
                        className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-linear-to-br from-indigo-500 to-cyan-500 text-white shadow-lg ring-1 ring-indigo-300/70 transition hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
                    >
                        <span className="sr-only">Toggle social links</span>
                        <span className="text-sm font-semibold">+</span>
                    </label>

                    {/* Sliding panel: hidden by default, visible when checkbox is checked */}
                    <div className="pointer-events-auto absolute bottom-0 right-12 translate-x-4 opacity-0 transition-all duration-200 peer-checked:translate-x-0 peer-checked:opacity-100">
                        <div className="rounded-2xl bg-white/90 px-3 py-2 shadow-xl ring-1 ring-slate-200 backdrop-blur-sm">
                            <p className="mb-1 text-[11px] font-medium uppercase tracking-wide text-slate-500">
                                Connect
                            </p>
                            <SocialLinks size={22} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
