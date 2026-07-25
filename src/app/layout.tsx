import Navbar from "@/components/Navbar";
import Visitor from "@/components/Visitor";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import dynamic from "next/dynamic";

import "./globals.css";

// Lazy load non-critical components
const Footer = dynamic(() => import("@/components/Footer"), {
    ssr: true,
});

const FloatingSocialLinks = dynamic(
    () => import("@/components/FloatingSocialLinks"),
    {
        ssr: true,
    }
);

const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"), {
    ssr: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteTitle = "Samiul Alim | Backend Software Engineer";
const siteDescription =
    "Backend Software Engineer with 3.5+ years building IAM platforms, Redis caching infrastructure, and production APIs. TypeScript · Go · Node.js · MongoDB · Redis.";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: siteTitle,
    description: siteDescription,
    openGraph: {
        title: siteTitle,
        description: siteDescription,
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
        title: siteTitle,
        description: siteDescription,
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
