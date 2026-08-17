"use client";

import { useEffect, useRef, useState } from "react";

type MermaidDiagramProps = {
    chart: string;
    caption?: string;
};

export default function MermaidDiagram({ chart, caption }: MermaidDiagramProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [render, setRender] = useState(false);

    useEffect(() => {
        const node = containerRef.current;
        if (!node) return;

        if (typeof IntersectionObserver === "undefined") {
            setRender(true);
            return;
        }

        const io = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    setRender(true);
                    io.disconnect();
                }
            },
            { rootMargin: "300px" },
        );
        io.observe(node);
        return () => io.disconnect();
    }, []);

    useEffect(() => {
        if (!render) return;
        let mounted = true;
        (async () => {
            const { default: mermaid } = await import("mermaid");
            if (!mounted || !containerRef.current) return;
            mermaid.initialize({
                startOnLoad: false,
                theme: "default",
                securityLevel: "loose",
            });
            const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`;
            const { svg } = await mermaid.render(id, chart);
            if (mounted && containerRef.current) {
                containerRef.current.innerHTML = svg;
            }
        })();
        return () => {
            mounted = false;
        };
    }, [chart, render]);

    return (
        <div className="my-6">
            <div
                ref={containerRef}
                aria-hidden="true"
                className="flex min-h-32 justify-center rounded-2xl border border-gray-100 bg-white/60 p-6 backdrop-blur-sm overflow-x-auto"
            />
            {caption && <p className="mt-2 text-center text-xs text-gray-500">{caption}</p>}
        </div>
    );
}
