import { SITE_URL as siteUrl } from "@/lib/site";

type BreadcrumbItem = {
    name: string;
    href: string;
};

export default function BreadcrumbsJsonLd({ items }: { items: BreadcrumbItem[] }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.href,
        })),
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}

export { siteUrl };
