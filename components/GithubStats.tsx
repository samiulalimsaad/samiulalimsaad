import Image from "next/image";

const GithubStats = () => {
    return (
        <section
            id="GithubStats"
            className="min-h-screen hero bg-[url('/GithubStats.png')]"
        >
            <div className="w-full h-full p-2 py-20 mx-auto bg-slate-900/90 hover:backdrop-blur-sm">
                <h2
                    className="my-8 text-5xl font-black text-center"
                    data-aos="zoom-in-down"
                    data-aos-duration="2000"
                    data-aos-anchor-placement="center-bottom"
                >
                    Github Stats
                </h2>
                <div className="divider"></div>
                <div className="flex items-center justify-center w-full h-full mx-auto">
                    <div className="grid gap-4 sm:w-3/4 sm:grid-cols-2">
                        <figure className="w-full">
                            <Image
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=samiulalimsaad&layout=compact&theme=yeblu"
                                alt="Top Langs"
                                height={300}
                                width={600}
                                data-aos="flip-down"
                                data-aos-duration="2000"
                                data-aos-anchor-placement="center-bottom"
                            />
                        </figure>
                        <figure className="w-full">
                            <Image
                                src="https://github-readme-stats.vercel.app/api?username=samiulalimsaad&show_icons=true&count_private=true&theme=outrun"
                                alt="GitHub stats"
                                height={300}
                                width={600}
                                data-aos="flip-up"
                                data-aos-duration="2000"
                                data-aos-anchor-placement="center-bottom"
                            />
                        </figure>
                        <div className="w-full col-span-2">
                            <figure className="w-full">
                                <Image
                                    src="https://activity-graph.herokuapp.com/graph?username=samiulalimsaad&theme=rogue&area=true&bg_color=011627&color=21C7A8&line=FF009D&point=00ffff&area_color=00FFFF"
                                    alt="Github activity graph"
                                    height={400}
                                    width={1200}
                                    data-aos="flip-up"
                                    data-aos-duration="2000"
                                    data-aos-anchor-placement="center-bottom"
                                />
                            </figure>
                            <figure className="w-full">
                                <Image
                                    src="https://metrics.lecoq.io/samiulalimsaad"
                                    alt="GitHub metrics"
                                    height={1000}
                                    width={1200}
                                    data-aos="flip-down"
                                    data-aos-duration="2000"
                                    data-aos-anchor-placement="center-bottom"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GithubStats;
