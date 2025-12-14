export function SectionSkeleton() {
    return (
        <section className="w-full bg-linear-to-b from-sky-50/60 via-white to-indigo-50/60 py-20 px-4">
            <div className="mx-auto w-full max-w-6xl animate-pulse">
                {/* Title skeleton */}
                <div className="mb-10 space-y-3">
                    <div className="mx-auto h-10 w-64 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300" />
                    <div className="mx-auto h-6 w-96 max-w-full rounded-lg bg-gradient-to-r from-gray-200 to-gray-300" />
                </div>

                {/* Content skeleton */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="h-64 rounded-3xl bg-gradient-to-br from-gray-200 to-gray-300"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export function HeroSkeleton() {
    return (
        <section className="relative flex min-h-[80vh] items-center justify-center bg-linear-to-b from-sky-50 via-white to-indigo-50 px-4">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 md:flex-row animate-pulse">
                <div className="flex-1 space-y-6">
                    <div className="h-8 w-48 rounded-full bg-gradient-to-r from-gray-200 to-gray-300" />
                    <div className="h-16 w-80 max-w-full rounded-lg bg-gradient-to-r from-gray-200 to-gray-300" />
                    <div className="h-24 w-full max-w-xl rounded-lg bg-gradient-to-r from-gray-200 to-gray-300" />
                    <div className="flex gap-4">
                        <div className="h-10 w-32 rounded-full bg-gradient-to-r from-gray-200 to-gray-300" />
                        <div className="h-10 w-32 rounded-full bg-gradient-to-r from-gray-200 to-gray-300" />
                    </div>
                </div>
                <div className="flex-1">
                    <div className="mx-auto h-72 w-72 rounded-full bg-gradient-to-br from-gray-200 to-gray-300" />
                </div>
            </div>
        </section>
    );
}

export function CardGridSkeleton({ count = 6 }: { count?: number }) {
    return (
        <section className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-20 px-4">
            <div className="mx-auto w-full max-w-6xl animate-pulse">
                {/* Title */}
                <div className="mb-10 space-y-3">
                    <div className="mx-auto h-10 w-64 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300" />
                    <div className="mx-auto h-6 w-96 max-w-full rounded-lg bg-gradient-to-r from-gray-200 to-gray-300" />
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {Array.from({ length: count }).map((_, i) => (
                        <div
                            key={i}
                            className="flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white/80"
                        >
                            <div className="h-56 bg-gradient-to-br from-gray-200 to-gray-300" />
                            <div className="space-y-3 p-6">
                                <div className="h-6 w-3/4 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300" />
                                <div className="h-4 w-1/2 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300" />
                                <div className="space-y-2">
                                    <div className="h-3 w-full rounded bg-gradient-to-r from-gray-200 to-gray-300" />
                                    <div className="h-3 w-5/6 rounded bg-gradient-to-r from-gray-200 to-gray-300" />
                                </div>
                                <div className="flex gap-2">
                                    <div className="h-6 w-16 rounded-full bg-gradient-to-r from-gray-200 to-gray-300" />
                                    <div className="h-6 w-16 rounded-full bg-gradient-to-r from-gray-200 to-gray-300" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function TimelineSkeleton() {
    return (
        <section className="w-full bg-linear-to-b from-indigo-50/60 via-white to-sky-50/60 py-20 px-4">
            <div className="mx-auto w-full max-w-6xl animate-pulse">
                {/* Title */}
                <div className="mb-10 space-y-3">
                    <div className="mx-auto h-10 w-64 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300" />
                    <div className="mx-auto h-6 w-96 max-w-full rounded-lg bg-gradient-to-r from-gray-200 to-gray-300" />
                </div>

                {/* Timeline items */}
                <div className="space-y-8">
                    {[1, 2, 3].map((i) => (
                        <div
                            key={i}
                            className="rounded-3xl border border-gray-200 bg-white/80 p-6 space-y-4"
                        >
                            <div className="h-6 w-3/4 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300" />
                            <div className="h-4 w-1/2 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300" />
                            <div className="space-y-2">
                                <div className="h-3 w-full rounded bg-gradient-to-r from-gray-200 to-gray-300" />
                                <div className="h-3 w-5/6 rounded bg-gradient-to-r from-gray-200 to-gray-300" />
                                <div className="h-3 w-4/5 rounded bg-gradient-to-r from-gray-200 to-gray-300" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export function ContactSkeleton() {
    return (
        <section className="w-full bg-linear-to-b from-sky-50/60 via-white to-indigo-50/60 py-20 px-4">
            <div className="mx-auto w-full max-w-4xl animate-pulse">
                {/* Title */}
                <div className="mb-10 space-y-3">
                    <div className="mx-auto h-10 w-64 rounded-lg bg-gradient-to-r from-gray-200 to-gray-300" />
                    <div className="mx-auto h-6 w-96 max-w-full rounded-lg bg-gradient-to-r from-gray-200 to-gray-300" />
                </div>

                {/* Form skeleton */}
                <div className="rounded-3xl border border-gray-200 bg-white/80 p-8 space-y-6">
                    <div className="h-12 w-full rounded-full bg-gradient-to-r from-gray-200 to-gray-300" />
                    <div className="h-12 w-full rounded-full bg-gradient-to-r from-gray-200 to-gray-300" />
                    <div className="h-32 w-full rounded-3xl bg-gradient-to-r from-gray-200 to-gray-300" />
                    <div className="h-12 w-full rounded-full bg-gradient-to-r from-gray-200 to-gray-300" />
                </div>
            </div>
        </section>
    );
}
