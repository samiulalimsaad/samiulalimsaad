import { NodeHtmlMarkdown } from "node-html-markdown";
import { type HTMLElement, parse } from "node-html-parser";

const converter = new NodeHtmlMarkdown({
    bulletMarker: "-",
    codeBlockStyle: "fenced",
    emDelimiter: "_",
    maxConsecutiveNewlines: 2,
    strongDelimiter: "**",
    useInlineLinks: true,
});

const NON_CONTENT_SELECTORS = [
    "script",
    "style",
    "noscript",
    "svg",
    "nav",
    "header",
    "footer",
    "form",
    "button",
    "input",
    "textarea",
    "select",
    "[aria-hidden='true']",
    ".sr-only",
] as const;

const SKIPPED_URL_SCHEMES = /^(?:#|mailto:|tel:|data:|javascript:)/i;

type PageMetadata = {
    title?: string;
    description?: string;
    image?: string;
};

function resolveUrl(value: string, baseUrl: string): string {
    if (SKIPPED_URL_SCHEMES.test(value.trim())) return value;

    try {
        return new URL(value, baseUrl).toString();
    } catch {
        // Leave malformed URLs untouched rather than dropping the content.
        return value;
    }
}

function metaContent(root: HTMLElement, selector: string): string | undefined {
    const content = root.querySelector(selector)?.getAttribute("content")?.trim();
    return content ? content : undefined;
}

function extractMetadata(root: HTMLElement, pageUrl: string): PageMetadata {
    const title =
        metaContent(root, 'meta[name="title"]') ??
        metaContent(root, 'meta[property="og:title"]') ??
        root.querySelector("title")?.textContent.trim() ??
        undefined;

    const description =
        metaContent(root, 'meta[name="description"]') ??
        metaContent(root, 'meta[property="og:description"]');

    const rawImage = metaContent(root, 'meta[property="og:image"]');
    const image = rawImage ? resolveUrl(rawImage, pageUrl) : undefined;

    return { title, description, image };
}

function yamlString(value: string): string {
    // JSON string escaping is valid YAML double-quoted scalar syntax.
    return JSON.stringify(value);
}

function formatFrontmatter(metadata: PageMetadata): string {
    const lines = [
        metadata.title ? `title: ${yamlString(metadata.title)}` : null,
        metadata.description ? `description: ${yamlString(metadata.description)}` : null,
        metadata.image ? `image: ${yamlString(metadata.image)}` : null,
    ].filter((line): line is string => line !== null);

    return lines.length > 0 ? `---\n${lines.join("\n")}\n---` : "";
}

function extractJsonLd(root: HTMLElement): string[] {
    return root
        .querySelectorAll('script[type="application/ld+json"]')
        .map((node) => node.textContent.replace(/^\n+|\n+$/g, ""))
        .filter((block) => {
            if (!block.trim()) return false;

            try {
                JSON.parse(block);
                return true;
            } catch {
                return false;
            }
        });
}

function selectMainContent(root: HTMLElement): HTMLElement {
    return (
        root.querySelector("main#main-content") ??
        root.querySelector("main") ??
        root.querySelector("body") ??
        root
    );
}

function stripNonContent(main: HTMLElement): void {
    for (const selector of NON_CONTENT_SELECTORS) {
        for (const node of main.querySelectorAll(selector)) {
            node.remove();
        }
    }
}

function absolutizeLinks(main: HTMLElement, pageUrl: string): void {
    for (const anchor of main.querySelectorAll("a[href]")) {
        const href = anchor.getAttribute("href");
        if (!href) continue;

        anchor.setAttribute("href", resolveUrl(href, pageUrl));
    }

    for (const image of main.querySelectorAll("img[src]")) {
        const src = image.getAttribute("src");
        if (!src) continue;

        image.setAttribute("src", resolveUrl(src, pageUrl));
    }
}

/**
 * Converts a rendered HTML page into the Markdown representation served to
 * agents. The main content is extracted, navigation/forms are stripped, and
 * metadata plus JSON-LD are preserved in the Cloudflare-compatible layout.
 */
export function renderMarkdownFromHtml(html: string, pageUrl: string): string {
    const root = parse(html);
    const metadata = extractMetadata(root, pageUrl);
    const jsonLdBlocks = extractJsonLd(root);
    const main = selectMainContent(root);

    stripNonContent(main);
    absolutizeLinks(main, pageUrl);

    const body = converter.translate(main.innerHTML).trim();
    const sections = [formatFrontmatter(metadata), body];

    if (jsonLdBlocks.length > 0) {
        sections.push(`\`\`\`json\n${jsonLdBlocks.join("\n")}\n\`\`\``);
    }

    return `${sections.filter(Boolean).join("\n\n")}\n`;
}
