export default function Loading() {
    return (
        <main className="min-h-screen bg-linear-to-b from-white via-sky-50/70 to-indigo-50/60 px-4 py-16">
            <div className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center text-center">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-xs font-medium uppercase tracking-wide text-indigo-500 shadow-sm">
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Loading page</span>
                </div>

                <div className="w-full max-w-md rounded-3xl border border-white/80 bg-white/90 p-8 shadow-xl backdrop-blur-sm">
                    <div className="mb-4 flex items-center justify-center gap-2 text-sm font-medium text-zinc-700">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-50 text-indigo-500">
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent" />
                        </span>
                        <span>Getting things ready…</span>
                    </div>
                    <p className="text-sm text-zinc-600">
                        Please hold on for a moment while the content loads.
                    </p>
                </div>
            </div>
        </main>
    );
}
