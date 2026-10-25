import { describe, expect, it } from "vitest";
import { estimateMarkdownTokens, prefersMarkdown } from "@/lib/markdown/negotiation";

describe("markdown content negotiation", () => {
    it("keeps HTML as the default for browser Accept headers", () => {
        expect(
            prefersMarkdown(
                "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            ),
        ).toBe(false);
        expect(prefersMarkdown("*/*")).toBe(false);
        expect(prefersMarkdown(null)).toBe(false);
        expect(prefersMarkdown("")).toBe(false);
    });

    it("serves markdown when text/markdown is explicitly requested", () => {
        expect(prefersMarkdown("text/markdown")).toBe(true);
        expect(prefersMarkdown("text/plain, text/markdown; charset=utf-8")).toBe(true);
        expect(prefersMarkdown("TEXT/MARKDOWN")).toBe(true);
        expect(prefersMarkdown("text/markdown, text/html")).toBe(true);
    });

    it("honors quality values when both representations are offered", () => {
        expect(prefersMarkdown("text/markdown;q=0.9, text/html;q=0.8")).toBe(true);
        expect(prefersMarkdown("text/markdown;q=0.5, text/html;q=0.9")).toBe(false);
        expect(prefersMarkdown("text/markdown;q=0.5, text/html")).toBe(false);
    });

    it("rejects markdown when quality is zero or negative", () => {
        expect(prefersMarkdown("text/markdown;q=0")).toBe(false);
        expect(prefersMarkdown("text/markdown;q=-0.5")).toBe(false);
        expect(prefersMarkdown("text/html;q=1, text/markdown;q=0")).toBe(false);
    });

    it("ignores malformed media ranges without throwing", () => {
        expect(prefersMarkdown("not-a-media-range, text/markdown")).toBe(true);
        expect(prefersMarkdown("text/markdown;q=abc")).toBe(true);
        expect(prefersMarkdown("text/markdown;q=2")).toBe(true);
    });

    it("estimates tokens from markdown length with a minimum of one", () => {
        expect(estimateMarkdownTokens("")).toBe(1);
        expect(estimateMarkdownTokens("a")).toBe(1);
        expect(estimateMarkdownTokens("abcd")).toBe(1);
        expect(estimateMarkdownTokens("abcde")).toBe(2);
        expect(estimateMarkdownTokens("a".repeat(400))).toBe(100);
    });
});
