import {
    getBlogs,
    getSingleBlog,
} from "../../../../backend/services/blog.service";
import Blog from "../../../../components/Blogs/Blog";

export async function generateStaticParams() {
    try {
        const blogs = await getBlogs();

        // Check if blogs is an object and has an 'items' property that is an array
        if (blogs && Array.isArray(blogs.items)) {
            return blogs.items.map((project) => ({
                slug: project.id.replaceAll("/", "_"),
            }));
        } else {
            // Handle the case where blogs.items is not an array
            console.error("Invalid blogs format or 'items' is not an array");
            return [];
        }
    } catch (error) {
        // Handle any errors that occur during the fetching process
        console.error("Error fetching blogs:", error);
        return [];
    }
}

async function getStaticData(id: string) {
    const blog = await getSingleBlog(id);
    return blog;
}

const BlogDetailsPage = async ({ params }: { params: { id: string } }) => {
    const blog = await getStaticData(params.id);

    if (!blog)
        return (
            <div className="container w-full mx-auto sm:w-1/3">
                <h3>Blog Not found</h3>
            </div>
        );
    return (
        <div className="container w-full mx-auto sm:w-1/3">
            <Blog isDetails blog={blog!} />
        </div>
    );
};

export default BlogDetailsPage;
