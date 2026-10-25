type MediaRange = {
    type: string;
    subtype: string;
    quality: number;
};

/**
 * Parses an Accept header into media ranges with normalized quality values.
 * Invalid entries are ignored instead of failing the whole negotiation.
 */
function parseAcceptHeader(accept: string): MediaRange[] {
    const ranges: MediaRange[] = [];

    for (const entry of accept.split(",")) {
        const [rawRange, ...rawParameters] = entry.trim().split(";");
        const [rawType, rawSubtype] = rawRange.trim().toLowerCase().split("/");

        if (!rawType || !rawSubtype) continue;

        let quality = 1;

        for (const parameter of rawParameters) {
            const [rawKey, rawValue] = parameter.trim().split("=");
            if (rawKey?.toLowerCase() !== "q") continue;

            const parsedQuality = Number(rawValue);
            if (Number.isFinite(parsedQuality)) {
                quality = Math.min(1, Math.max(0, parsedQuality));
            }
        }

        ranges.push({ type: rawType, subtype: rawSubtype, quality });
    }

    return ranges;
}

function qualityFor(ranges: MediaRange[], type: string, subtype: string): number {
    let quality = 0;

    for (const range of ranges) {
        if (range.type !== type) continue;
        if (range.subtype !== subtype && range.subtype !== "*") continue;
        quality = Math.max(quality, range.quality);
    }

    return quality;
}

/**
 * Returns true when a client explicitly prefers Markdown over HTML.
 * Browsers and wildcard-only clients keep receiving HTML by default.
 */
export function prefersMarkdown(accept: string | null): boolean {
    if (!accept) return false;

    const ranges = parseAcceptHeader(accept);
    const markdownQuality = qualityFor(ranges, "text", "markdown");

    if (markdownQuality <= 0) return false;

    return markdownQuality >= qualityFor(ranges, "text", "html");
}

/**
 * Approximate token count for the X-Markdown-Tokens header.
 * Uses the common 4-characters-per-token heuristic; no tokenizer is loaded
 * because this value is advisory and must stay cheap to compute.
 */
export function estimateMarkdownTokens(markdown: string): number {
    return Math.max(1, Math.ceil(markdown.length / 4));
}
