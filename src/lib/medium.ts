export type MediumPost = {
    id: string;
    title: string;
    link: string;
    author: string;
    published: string;
    created: string;
    category: string[];
    content: string;
};

export type MediumFeed = {
    title: string;
    description: string;
    link: string;
    image?: string;
    category?: string[];
    items: MediumPost[];
};

let cachedFeed: MediumFeed | null = null;
let cachedAt: number | null = null;

const ONE_HOUR = 60 * 60 * 1000;

export async function fetchMediumFeed(): Promise<MediumFeed | null> {
    const now = Date.now();

    if (cachedFeed && cachedAt && now - cachedAt < ONE_HOUR) {
        return cachedFeed;
    }

    try {
        const url =
            "https://api.rss2json.com/v1/api.json?rss_url=" +
            encodeURIComponent("https://medium.com/feed/@samiulalimsaad");

        const res = await fetch(url);

        if (!res.ok) {
            console.error(
                "Error fetching Medium RSS feed",
                res.status,
                res.statusText
            );
            return null;
        }

        const json = (await res.json()) as MediumFeed;
        cachedFeed = json;
        cachedAt = now;
        return json;
    } catch (error) {
        console.error("Error fetching Medium RSS feed", error);
        return null;
    }
}
