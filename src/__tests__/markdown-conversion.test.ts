import { describe, expect, it } from "vitest";
import { renderMarkdownFromHtml } from "@/lib/markdown/convert";

const PAGE_URL = "https://www.samiulalimsaad.com/projects/ph-mailer";

const FULL_PAGE_HTML = `<!doctype html>
<html lang="en">
<head>
    <title>Fallback title</title>
    <meta name="title" content="PH Mailer &amp; Delivery" />
    <meta name="description" content="Production email platform &amp; queue." />
    <meta property="og:image" content="/evidence/ph-mailer.png" />
    <script type="application/ld+json">
        {"@context":"https://schema.org","@type":"Article","headline":"PH Mailer"}
    </script>
    <script type="application/ld+json">not valid json</script>
</head>
<body>
    <nav>Site navigation</nav>
    <header>Site header</header>
    <main id="main-content">
        <h1>PH Mailer</h1>
        <p>Read <a href="/projects">projects</a> or <a href="mailto:hello@example.com">email me</a>.</p>
        <img src="/evidence/queue.png" alt="Queue dashboard" />
        <form>
            <label>Email address</label>
            <input type="email" />
            <button>Send</button>
        </form>
        <svg aria-hidden="true"><title>Icon</title></svg>
        <pre data-mermaid-source hidden><code class="language-mermaid">graph TD; A-->B;</code></pre>
        <table>
            <thead><tr><th>Metric</th><th>Value</th></tr></thead>
            <tbody><tr><td>Emails</td><td>197K</td></tr></tbody>
        </table>
        <pre><code class="language-go">fmt.Println("hi")</code></pre>
        <script>alert("should not appear")</script>
        <div aria-hidden="true">Decorative only</div>
        <span class="sr-only">Skip content</span>
    </main>
    <footer>Site footer</footer>
</body>
</html>`;

describe("HTML to Markdown conversion", () => {
    it("extracts metadata, main content, links, tables, code, and JSON-LD", () => {
        const markdown = renderMarkdownFromHtml(FULL_PAGE_HTML, PAGE_URL);

        expect(markdown.startsWith("---\n")).toBe(true);
        expect(markdown).toContain('title: "PH Mailer & Delivery"');
        expect(markdown).toContain('description: "Production email platform & queue."');
        expect(markdown).toContain(
            'image: "https://www.samiulalimsaad.com/evidence/ph-mailer.png"',
        );
        expect(markdown).toContain("# PH Mailer");
        expect(markdown).toContain("[projects](https://www.samiulalimsaad.com/projects)");
        expect(markdown).toContain("[email me](mailto:hello@example.com)");
        expect(markdown).toContain(
            "![Queue dashboard](https://www.samiulalimsaad.com/evidence/queue.png)",
        );
        expect(markdown).toContain("| Metric");
        expect(markdown).toContain("| Emails");
        expect(markdown).toContain('```go\nfmt.Println("hi")\n```');
        expect(markdown).toContain("```mermaid\ngraph TD; A-->B;\n```");
        expect(markdown).toContain('```json\n        {"@context":"https://schema.org"');
        expect(markdown).toContain('"headline":"PH Mailer"');
    });

    it("strips navigation, forms, scripts, decorative icons, and screen-reader text", () => {
        const markdown = renderMarkdownFromHtml(FULL_PAGE_HTML, PAGE_URL);

        expect(markdown).not.toContain("Site navigation");
        expect(markdown).not.toContain("Site header");
        expect(markdown).not.toContain("Site footer");
        expect(markdown).not.toContain("Email address");
        expect(markdown).not.toContain("Send");
        expect(markdown).not.toContain("should not appear");
        expect(markdown).not.toContain("Decorative only");
        expect(markdown).not.toContain("Skip content");
        expect(markdown).not.toContain("not valid json");
    });

    it("omits frontmatter when the page has no supported metadata", () => {
        const markdown = renderMarkdownFromHtml("<main><h1>Bare page</h1></main>", PAGE_URL);

        expect(markdown.startsWith("---")).toBe(false);
        expect(markdown).toContain("# Bare page");
        expect(markdown.endsWith("\n")).toBe(true);
    });

    it("falls back to the document title for frontmatter", () => {
        const markdown = renderMarkdownFromHtml(
            "<html><head><title>Only title</title></head><body><main>Body</main></body></html>",
            PAGE_URL,
        );

        expect(markdown).toContain('title: "Only title"');
        expect(markdown).toContain("Body");
    });
});
