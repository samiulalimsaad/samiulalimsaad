/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {},
    reactStrictMode: true,
    pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
    images: {
        remotePatterns: [
            "img.shields.io",
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
        ].map((domain) => ({
            protocol: "https",
            hostname: domain,
            port: "",
            pathname: "/**",
        })),
    },
};

module.exports = nextConfig;
