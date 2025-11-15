import Link from "next/link";

const navItems = [
    { href: "/", label: "Home", type: "route" as const },
    { href: "/#about", label: "About", type: "hash" as const },
    { href: "/#education", label: "Education", type: "hash" as const },
    { href: "/#skills", label: "Skills", type: "hash" as const },
    { href: "/#projects", label: "Featured", type: "hash" as const },
    { href: "/#blogs", label: "Blog", type: "hash" as const },
    { href: "/#contact", label: "Contact", type: "hash" as const },
    { href: "/projects", label: "All Projects", type: "route" as const },
    { href: "/blogs", label: "All Blogs", type: "route" as const },
] as const;

export default function Navbar() {
    return (
        <header className="sticky top-0 z-40 border-b border-white/60 bg-white/80 backdrop-blur-md">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:py-3">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-r from-cyan-500 to-indigo-500 text-xs font-bold text-white">
                        SA
                    </span>
                    <span className="hidden text-sm font-semibold text-zinc-800 sm:inline">
                        Samiul Alim
                    </span>
                </Link>

                {/* Desktop nav (right aligned) */}
                <div className="hidden items-center gap-4 sm:flex">
                    <ul className="flex items-center gap-4 text-sm font-medium text-zinc-700">
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
                </div>

                {/* Mobile hamburger + dropdown (only on small screens) */}
                <div className="relative flex items-center sm:hidden">
                    <input
                        id="nav-toggle"
                        type="checkbox"
                        className="peer sr-only"
                        aria-label="Toggle navigation"
                    />
                    <label
                        htmlFor="nav-toggle"
                        className="flex h-9 w-9 cursor-pointer flex-col items-center justify-center rounded-full border border-cyan-200 bg-white/90 text-cyan-700"
                    >
                        <span className="block h-0.5 w-4 rounded bg-cyan-600" />
                        <span className="mt-1 block h-0.5 w-4 rounded bg-indigo-500" />
                        <span className="mt-1 block h-0.5 w-4 rounded bg-cyan-600" />
                    </label>

                    {/* Mobile dropdown nav (CSS-only, driven by peer checkbox) */}
                    <ul className="absolute right-0 top-11 hidden w-40 flex-col gap-1 rounded-2xl border border-cyan-50 bg-white/95 p-3 text-sm font-medium text-zinc-700 shadow-md peer-checked:flex">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="block rounded-xl px-3 py-1.5 text-sm text-zinc-700 hover:bg-cyan-50/80"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
}
