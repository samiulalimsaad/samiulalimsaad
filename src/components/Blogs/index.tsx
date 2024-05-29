import Link from "next/link";
import { MediumInterface } from "../../interfaces/Medium.interface";
import ColoringTitle from "../utils/ColoringTitle";
import Container from "../utils/Container";
import Blog from "./Blog";

const Blogs = async ({
    all,
    blogs,
}: {
    all?: Boolean;
    blogs: MediumInterface | null;
}) => (
    <section
        id="blogs"
        className="min-h-screen hero bg-[url('/blogs.png')] bg-fixed"
    >
        <div className="w-full h-full py-20 mx-auto bg-slate-900/70 backdrop-blur-sm">
            <ColoringTitle as="h2" fontSize="3xl">
                {blogs?.title}
            </ColoringTitle>

            <div className="divider"></div>

            <Container>
                <div className="grid gap-4 lg:grid-cols-3">
                    {all
                        ? blogs?.items.map((v) => (
                              <Link
                                  key={v.id}
                                  href={`/blogs/${v.id.replaceAll(
                                      "/",
                                      "_"
                                  )}/details`}
                                  className="h-full text-black rounded-none shadow-xl bg-slate-50 card"
                              >
                                  <Blog blog={v} />
                              </Link>
                          ))
                        : blogs?.items.slice(0, 6).map((v) => (
                              <Link
                                  key={v.id}
                                  href={`/blogs/${v.id.replaceAll(
                                      "/",
                                      "_"
                                  )}/details`}
                                  className="h-full text-black rounded-none shadow-xl bg-slate-50 card"
                              >
                                  <Blog blog={v} />
                              </Link>
                          ))}
                </div>
            </Container>
            {!all && (
                <div className="flex items-center justify-center mt-8">
                    <Link
                        href="/blogs"
                        passHref
                        className="text-white rounded-none badge badge-info"
                    >
                        See All Blogs
                    </Link>
                </div>
            )}
        </div>
    </section>
);

export default Blogs;
