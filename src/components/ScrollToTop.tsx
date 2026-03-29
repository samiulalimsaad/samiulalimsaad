"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const getScrollOffset = () => {
        if (typeof window === "undefined") return 0;
        return window.scrollY ?? window.pageYOffset ?? 0;
    };

    const [visible, setVisible] = useState(() => getScrollOffset() > 300);

    useEffect(() => {
        if (typeof window === "undefined") return;

        const onScroll = () => {
            setVisible(getScrollOffset() > 300);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleClick = () => {
        if (typeof window === "undefined") return;
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!visible) return null;

    return (
        <button
            type="button"
            onClick={handleClick}
            aria-label="Scroll to top"
            className="fixed bottom-24 right-6 z-40 rounded-full bg-linear-to-br from-indigo-600 via-cyan-500 to-sky-500 p-3 shadow-lg shadow-sky-500/30 transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 cursor-pointer animate-soft-in animate-pulse-soft"
        >
            <ArrowUp className="h-5 w-5 text-white" />
        </button>
    );
};

export default ScrollToTop;
