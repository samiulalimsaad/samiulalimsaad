"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import AskAI from "@/components/AskAI";
import ResumeButton from "@/components/ResumeButton";

const navItems = [
    { href: "/", label: "Home" },
    { href: "/#projects", label: "Projects" },
    { href: "/#experience", label: "Experience" },
    { href: "/#skills", label: "Skills" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
] as const;

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const menuId = useId();
    const toggleRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!open) return;
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setOpen(false);
                toggleRef.current?.focus();
            }
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [open]);

    return (
        <header className="sticky top-0 z-40 border-b border-white/60 bg-white/80 backdrop-blur-md">
            <nav
                className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:py-3"
                aria-label="Primary"
            >
                <Link href="/" className="flex items-center gap-2 rounded-md">
                    <Image
                        src="/avatars/samiul-alim.webp"
                        alt="Samiul Alim"
                        width={32}
                        height={32}
                        priority
                        className="h-8 w-8 rounded-full"
                    />
                    <span className="hidden text-sm font-semibold sm:inline">
                        <span className="bg-linear-to-r from-cyan-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent">
                            Samiul Alim
                        </span>
                    </span>
                </Link>

                <div className="hidden items-center gap-4 md:flex">
                    <ul className="flex items-center gap-1 text-sm font-medium text-zinc-700">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link
                                    href={item.href}
                                    className="rounded-full px-3 py-1 text-sm transition bg-linear-to-r from-cyan-500 to-indigo-500 text-transparent bg-clip-text hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <Link
                        href="/#contact"
                        className="rounded-full bg-linear-to-r from-indigo-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Hire Me
                    </Link>
                    <AskAI />
                    <ResumeButton />
                </div>

                <div className="flex items-center md:hidden">
                    <button
                        ref={toggleRef}
                        type="button"
                        aria-expanded={open}
                        aria-controls={menuId}
                        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
                        onClick={() => setOpen((v) => !v)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-200 bg-white/90 text-cyan-700 transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        <span aria-hidden="true" className="relative block h-3.5 w-5">
                            <span
                                className={`absolute left-0 top-0 block h-0.5 w-5 rounded bg-current transition-transform duration-200 ${
                                    open ? "translate-y-1.5 rotate-45" : ""
                                }`}
                            />
                            <span
                                className={`absolute left-0 top-1.5 block h-0.5 w-5 rounded bg-current transition-opacity duration-200 ${
                                    open ? "opacity-0" : ""
                                }`}
                            />
                            <span
                                className={`absolute left-0 top-3 block h-0.5 w-5 rounded bg-current transition-transform duration-200 ${
                                    open ? "-translate-y-1.5 -rotate-45" : ""
                                }`}
                            />
                        </span>
                    </button>
                </div>
            </nav>

            <div id={menuId} hidden={!open} className="md:hidden">
                <ul className="mx-auto max-w-6xl space-y-1 border-t border-cyan-50 px-4 pb-4 pt-2">
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-xl px-3 py-2 text-sm font-medium text-zinc-700 transition hover:bg-cyan-50/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                    <li className="flex flex-wrap gap-2 px-3 pt-2">
                        <Link
                            href="/#contact"
                            onClick={() => setOpen(false)}
                            className="rounded-full bg-linear-to-r from-indigo-600 to-cyan-500 px-4 py-2 text-sm font-semibold text-white transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Hire Me
                        </Link>
                        <AskAI />
                        <ResumeButton />
                    </li>
                </ul>
            </div>
        </header>
    );
}
