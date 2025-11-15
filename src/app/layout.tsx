import FloatingSocialLinks from "@/components/FloatingSocialLinks";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Visitor from "@/components/Visitor";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: "Samiul Alim | Fullstack Web Developer",
    description:
        "Portfolio of Samiul Alim, a fullstack software engineer specializing in modern web applications with Next.js, React, Node.js, and TypeScript.",
    openGraph: {
        title: "Samiul Alim | Fullstack Web Developer",
        description:
            "Fullstack portfolio showcasing projects, skills, and experience with Next.js, React, Node.js, and modern tooling.",
        url: "/",
        siteName: "Samiul Alim",
        images: [
            {
                url: "/avatars/samiul-alim.png",
                width: 600,
                height: 600,
                alt: "Portrait of Samiul Alim",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Samiul Alim | Fullstack Web Developer",
        description:
            "Fullstack portfolio showcasing projects, skills, and experience with Next.js, React, Node.js, and modern tooling.",
        images: [
            {
                url: "/avatars/samiul-alim.png",
                alt: "Portrait of Samiul Alim",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased`}>
                <Navbar />
                {children}
                <Footer />
                <FloatingSocialLinks />
                <ScrollToTop />
                <Visitor />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
