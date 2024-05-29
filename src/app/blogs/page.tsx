import { getBlogs } from "../../backend/services/blog.service";
import Blogs from "../../components/Blogs";

async function getStaticData() {
    const blogs = await getBlogs();
    return {
        blogs,
    };
}
const BlogsPage = async () => {
    const { blogs } = await getStaticData();
    return <Blogs all={true} blogs={blogs} />;
};

export default BlogsPage;
