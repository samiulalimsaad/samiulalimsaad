import { getAllGistSlugs } from "@/lib/gists";
import { projects } from "@/lib/projects";

/**
 * Normalizes a public pathname so allowlist checks are stable across
 * trailing slashes and duplicate separators.
 */
export function normalizeMarkdownPath(pathname: string): string {
    const withoutQuery = pathname.split(/[?#]/, 1)[0] ?? "/";
    const trimmed = withoutQuery.replace(/\/{2,}/g, "/").replace(/\/+$/, "");

    return trimmed === "" ? "/" : `/${trimmed.replace(/^\/+/, "")}`;
}

function buildPaths(): string[] {
    const paths = new Set<string>(["/", "/ai-context", "/projects", "/gists"]);

    for (const project of projects) {
        if ("caseStudyLink" in project && typeof project.caseStudyLink === "string") {
            paths.add(normalizeMarkdownPath(project.caseStudyLink));
        }
    }

    for (const slug of getAllGistSlugs()) {
        paths.add(`/gists/${slug}`);
    }

    return [...paths].sort((left, right) => {
        if (left === "/") return -1;
        if (right === "/") return 1;
        return left.localeCompare(right);
    });
}

export const MARKDOWN_PATHS: readonly string[] = buildPaths();

const MARKDOWN_PATH_SET: ReadonlySet<string> = new Set(MARKDOWN_PATHS);

/**
 * Only pages explicitly listed in the allowlist may be fetched and converted.
 * This keeps the internal endpoint from becoming an arbitrary URL proxy.
 */
export function isMarkdownPath(pathname: string): boolean {
    if (pathname.includes("..") || pathname.includes("\\")) return false;

    return MARKDOWN_PATH_SET.has(normalizeMarkdownPath(pathname));
}
