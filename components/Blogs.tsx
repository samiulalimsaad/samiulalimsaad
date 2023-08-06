const Blog = () => (
    <section
        id="blogs"
        className="min-h-screen hero bg-[url('/blogs.png')] bg-fixed"
    >
        <div className="w-full h-full py-20 mx-auto bg-slate-900/70 backdrop-blur-sm">
            <h2
                className="my-8 text-6xl font-black text-center drop-shadow-md"
                data-aos="zoom-in-down"
                data-aos-duration="2000"
                data-aos-anchor-placement="center-bottom"
            >
                Blogs
            </h2>
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
