/* eslint-disable @next/next/no-img-element */
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
                <div>
                    <img
                        src="https://github-read-medium-git-main.pahlevikun.vercel.app/latest?limit=4&username=@samiulalimsaad"
                        alt="Layout with last medium posts"
                        height="400"
                    />
                </div>
            </div>
        </div>
    </section>
);

export default Blog;
