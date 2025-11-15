"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const offset = window.scrollY || window.pageYOffset;
            setVisible(offset > 300);
        };

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
            className="fixed bottom-24 right-6 z-40 rounded-full bg-linear-to-br from-indigo-600 via-cyan-500 to-sky-500 p-3 shadow-lg shadow-sky-500/30 transition hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 cursor-pointer"
        >
            <ArrowUp className="h-5 w-5 text-white" />
        </button>
    );
};

export default ScrollToTop;
