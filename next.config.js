/** @type {import('next').NextConfig} */

const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
        // If you use `MDXProvider`, uncomment the following line.
        // providerImportSource: "@mdx-js/react",
    },
});

const nextConfig = {
    // output: "export",
    reactStrictMode: true,
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    images: {
        // unoptimized: true,
        domains: [
            "pbs.twimg.com",
            "gpvc.arturio.dev",
            "github-profile-trophy.vercel.app",
            "github.com",
            "github-readme-stats.vercel.app",
            "activity-graph.herokuapp.com",
            "metrics.lecoq.io",
            "github-readme-streak-stats.herokuapp.com",
            "firebasestorage.googleapis.com",
            "github-readme-stats.vercel.app",
        ],
    },
};

module.exports = withMDX(nextConfig);
