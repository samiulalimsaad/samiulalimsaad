import { describe, expect, it } from "vitest";
import { getAllGistSlugs } from "@/lib/gists";
import { isMarkdownPath, MARKDOWN_PATHS, normalizeMarkdownPath } from "@/lib/markdown/paths";
import { projects } from "@/lib/projects";

describe("markdown path allowlist", () => {
    it("normalizes trailing, duplicate, and query separators", () => {
        expect(normalizeMarkdownPath("/")).toBe("/");
        expect(normalizeMarkdownPath("///")).toBe("/");
        expect(normalizeMarkdownPath("/projects/")).toBe("/projects");
        expect(normalizeMarkdownPath("//projects//ph-mailer//")).toBe("/projects/ph-mailer");
        expect(normalizeMarkdownPath("/projects?utm=1")).toBe("/projects");
        expect(normalizeMarkdownPath("projects")).toBe("/projects");
    });

    it("includes every public page and case study", () => {
        expect(MARKDOWN_PATHS).toContain("/");
        expect(MARKDOWN_PATHS).toContain("/ai-context");
        expect(MARKDOWN_PATHS).toContain("/projects");
        expect(MARKDOWN_PATHS).toContain("/gists");

        for (const project of projects) {
            if ("caseStudyLink" in project && typeof project.caseStudyLink === "string") {
                expect(MARKDOWN_PATHS).toContain(project.caseStudyLink);
            }
        }

        for (const slug of getAllGistSlugs()) {
            expect(MARKDOWN_PATHS).toContain(`/gists/${slug}`);
        }
    });

    it("accepts only allowlisted paths, including slash and query variants", () => {
        expect(isMarkdownPath("/")).toBe(true);
        expect(isMarkdownPath("/ai-context")).toBe(true);
        expect(isMarkdownPath("/projects/ph-mailer")).toBe(true);
        expect(isMarkdownPath("/projects/ph-mailer/")).toBe(true);
        expect(isMarkdownPath("/gists/rate-limiter-pattern?ref=x")).toBe(true);
    });

    it("rejects traversal, external hosts, API routes, and unknown pages", () => {
        expect(isMarkdownPath("/projects/../secrets")).toBe(false);
        expect(isMarkdownPath("/projects/%2e%2e/secrets")).toBe(false);
        expect(isMarkdownPath("/api/markdown/projects")).toBe(false);
        expect(isMarkdownPath("//evil.example/projects")).toBe(false);
        expect(isMarkdownPath("https://evil.example/projects")).toBe(false);
        expect(isMarkdownPath("/projects/does-not-exist")).toBe(false);
        expect(isMarkdownPath("/admin")).toBe(false);
    });
});
