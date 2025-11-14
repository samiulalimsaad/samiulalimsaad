import Link from "next/link";

const navItems = [
    { href: "/", label: "Home", type: "route" as const },
    { href: "/#about", label: "About", type: "hash" as const },
    { href: "/#education", label: "Education", type: "hash" as const },
    { href: "/#skills", label: "Skills", type: "hash" as const },
    { href: "/#projects", label: "Featured", type: "hash" as const },
    { href: "/projects", label: "All Projects", type: "route" as const },
] as const;

export default function Navbar() {
    return (
        <header className="sticky top-0 z-40 border-b border-white/60 bg-white/80 backdrop-blur-md">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                <Link href="/" className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r from-cyan-500 to-indigo-500 text-xs font-bold text-white">
                        SA
                    </span>
                    <span className="hidden text-sm font-semibold text-zinc-800 sm:inline">
                        Samiul Alim
                    </span>
                </Link>

                <button
                    type="button"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-200 bg-white/90 text-cyan-700 sm:hidden"
                    aria-label="Toggle navigation"
                >
                    <span className="block h-0.5 w-4 rounded bg-cyan-600" />
                    <span className="mt-1 block h-0.5 w-4 rounded bg-indigo-500" />
                    <span className="mt-1 block h-0.5 w-4 rounded bg-cyan-600" />
                </button>

                <ul className="hidden items-center gap-4 text-sm font-medium text-zinc-700 sm:flex">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="rounded-full px-3 py-1 text-sm transition-colors bg-linear-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
