"use client";

import Prism from "prismjs";
import { useEffect, useRef } from "react";
import "prismjs/components/prism-go";
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism-tomorrow.min.css";

type CodeSnippetProps = {
    code: string;
    language: string;
    title?: string;
};

export default function CodeSnippet({ code, language, title }: CodeSnippetProps) {
    const codeRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (codeRef.current) Prism.highlightElement(codeRef.current);
    }, [code]);

    return (
        <div className="my-4">
            {title && (
                <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-foreground/60 uppercase tracking-wider">
                        {title}
                    </span>
                </div>
            )}
            <div className="relative group">
                <div className="absolute top-0 right-0 rounded-bl-xl rounded-tr-xl bg-[#334155] px-3 py-1 text-[11px] font-medium text-slate-400 uppercase tracking-wider z-10">
                    {language}
                </div>
                <pre className="!bg-[#1e293b] !text-[#e2e8f0] !rounded-xl !shadow-lg overflow-x-auto p-5 text-sm leading-6 font-mono">
                    <code ref={codeRef} className={`language-${language}`}>
                        {code}
                    </code>
                </pre>
            </div>
        </div>
    );
}
