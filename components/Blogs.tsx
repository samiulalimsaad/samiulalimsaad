const Blog = () => {
    return (
        <section
            id="blogs"
            className="min-h-screen hero bg-[url('/blogs.png')]"
        >
            <div className="w-full h-full py-20 mx-auto bg-slate-900/70 hover:backdrop-blur-sm">
                <h2 className="my-8 text-6xl font-black text-center">Blogs</h2>
                <div className="divider"></div>
                <div className="flex items-center justify-center w-2/3 h-full mx-auto">
                    <h3 className="text-4xl font-bold animate-pulse">
                        Coming Soon...
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default Blog;
