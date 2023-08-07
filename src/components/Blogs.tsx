import ColoringTitle from "./utils/ColoringTitle";

const Blog = () => (
    <section
        id="blogs"
        className="min-h-screen hero bg-[url('/blogs.png')] bg-fixed"
    >
        <div className="w-full h-full py-20 mx-auto bg-slate-900/70 backdrop-blur-sm">
            <ColoringTitle as="h2" fontSize="5xl">
                Blogs
            </ColoringTitle>
            <div className="divider"></div>
            <div className="flex items-center justify-center w-2/3 h-full mx-auto">
                <h3 className="text-2xl font-bold animate-pulse sm:text-4xl">
                    Coming Soon...
                </h3>
            </div>
        </div>
    </section>
);

export default Blog;
