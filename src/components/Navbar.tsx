import Image from "next/image";
import Link from "next/link";
import ResumeButton from "@/components/ResumeButton";

const navItems = [
    { href: "/#projects", label: "Work" },
    { href: "/#experience", label: "Experience" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
] as const;

export default function Navbar() {
    return (
        <header className="sticky top-0 z-40 border-b border-white/60 bg-white/80 backdrop-blur-md animate-soft-in">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:py-3">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/avatars/samiul-alim.png"
                        alt="Samiul Alim"
                        width={32}
                        height={32}
                        className="h-8 w-8 rounded-full"
                    />
                    <span className="hidden text-sm sm:inline">
                        <span className="bg-linear-to-r from-cyan-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                            Samiul Alim
                        </span>
                    </span>
                </Link>

                <div className="hidden items-center gap-4 sm:flex">
                    <ul className="flex items-center gap-4 text-sm font-medium text-zinc-700">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="rounded-full px-3 py-1 text-sm transition bg-linear-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text hover:-translate-y-0.5 hover:brightness-110"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <ResumeButton />
                </div>

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
                        <li>
                            <ResumeButton />
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
