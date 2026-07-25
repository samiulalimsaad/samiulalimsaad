"use client";

import { useEffect, useRef } from "react";

type MermaidDiagramProps = {
    chart: string;
    caption?: string;
};

export default function MermaidDiagram({ chart, caption }: MermaidDiagramProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
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
    }, [chart]);

    return (
        <div className="my-6">
            <div
                ref={containerRef}
                className="flex justify-center rounded-2xl border border-gray-100 bg-white/60 p-6 backdrop-blur-sm overflow-x-auto"
            />
            {caption && <p className="mt-2 text-center text-xs text-foreground/50">{caption}</p>}
        </div>
    );
}
