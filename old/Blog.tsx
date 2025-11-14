import cheerio from "cheerio";
import moment from "moment";
import { BlogInterface } from "../../interfaces/Medium.interface";

function removeFigureTags(html: string | null) {
    const $ = cheerio.load(html || "");
    $("figure").remove();
    $("a").remove();
    // $("*", $.root()).each(function () {
    //     $(this).addClass("prose text-black prose-stone");
    // });
    return $.html();
}

function changeTextColor(html: string, className: string) {
    const $ = cheerio.load(html);
    $("*").each(function () {
        $(this).addClass(className);
    });
    return $.html();
}

const Blog = ({
    isDetails = false,
    blog,
}: {
    isDetails?: boolean;
    blog: BlogInterface;
}) => {
    return (
        <div
            className={`h-full text-black rounded-none shadow-xl bg-slate-50 card ${
                isDetails ? "bg-transparent" : "text-black bg-slate-50"
            }`}
        >
            <div
                className={`justify-between text-black card-body ${
                    isDetails ? "text-white" : "text-black"
                }`}
            >
                <div>
                    <h2 className=" card-title">{blog.title}</h2>
                    <p className="text-slate-300">
                        {moment(blog.published).fromNow()}
                    </p>

                    <div className="prose text-black prose-stone">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: isDetails
                                    ? changeTextColor(
                                          blog.content,
                                          "text-white"
                                      )
                                    : changeTextColor(
                                          removeFigureTags(blog.content),
                                          "text-black"
                                      ).slice(0, 300) + "......",
                            }}
                        ></div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-between prose prose-stone text-slate-100">
                    {blog.category.map((v) => (
                        <p
                            key={v}
                            className={`p-2 m-1 badge ${
                                isDetails ? "badge-md" : "badge-xs"
                            } badge-neutral hover:badge-outline`}
                        >
                            {v}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
