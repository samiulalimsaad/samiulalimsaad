import moment, { Moment } from "moment";
import parse from "rss-to-json";
import {
    BlogInterface,
    MediumInterface,
} from "../../interfaces/Medium.interface";

interface CachedInterface {
    data: MediumInterface | null;
    lastUpdated: Moment | null;
}
const cached: CachedInterface = {
    data: null,
    lastUpdated: moment([2007, 0, 29]),
};

export const getBlogs = async () => {
    if (moment(moment()).diff(cached.lastUpdated, "days") > 1) {
        try {
            const rss = await parse("https://medium.com/feed/@samiulalimsaad");

            cached.data = rss as unknown as MediumInterface;
            cached.lastUpdated = moment();
            console.info("blog cache updated");
        } catch (error) {
            console.error("Error fetching and parsing RSS feed:", error);
            return null;
        }
    }
    console.info("blog served from cache");
    return cached.data;
};

export const getSingleBlog = async (id: string) => {
    const blogs = await getBlogs();

    if (!blogs || !Array.isArray(blogs.items)) {
        console.error("Invalid blogs format or 'items' is not an array");
        return null;
    }

    const blog = blogs.items.find((b: BlogInterface) => {
        return b.id.replaceAll("/", "_") === id.replaceAll("%3A", ":");
    });

    return blog;
};

// Example of usage
const fetchAndLogBlogs = async () => {
    const blogs = await getBlogs();

    if (blogs && Array.isArray(blogs.items)) {
        const slugs = blogs.items.map((project) => ({
            slug: project.id.replaceAll("/", "_"),
        }));
    }
};

fetchAndLogBlogs();
