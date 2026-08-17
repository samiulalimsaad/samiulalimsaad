import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Visitor from "@/components/Visitor";

const firaCode = Fira_Code({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-fira-code",
});

const inter = Inter({
    subsets: ["latin"],
    weight: "variable",
    variable: "--font-inter",
});

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteTitle = "Samiul Alim | Software Engineer (Backend Focus)";
const siteDescription =
    "Backend-focused software engineer building production platform services for authentication, payments, and email delivery. Go · TypeScript · PostgreSQL.";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: siteTitle,
        template: `%s`,
    },
    description: siteDescription,
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: siteTitle,
        description: siteDescription,
        url: "/",
        siteName: "Samiul Alim",
        images: [
            {
                url: "/avatars/samiul-alim-og.png",
                width: 600,
                height: 600,
                alt: "Portrait of Samiul Alim, backend-focused full-stack software engineer",
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
                url: "/avatars/samiul-alim-og.png",
                alt: "Portrait of Samiul Alim, backend-focused full-stack software engineer",
            },
        ],
    },
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Samiul Alim",
    jobTitle: "Backend-Focused Full-Stack Software Engineer",
    description:
        "Software engineer specializing in production backend systems, APIs, authentication, payments, and email delivery. Go, TypeScript, PostgreSQL.",
    url: siteUrl,
    sameAs: ["https://github.com/samiulalimsaad", "https://linkedin.com/in/samiulalimsaad"],
    email: "samiulalimsaad@gmail.com",
    knowsAbout: ["Go", "Node.js", "TypeScript", "PostgreSQL", "Redis", "System Design"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${firaCode.variable} ${inter.variable}`}>
            <body className={`font-sans antialiased`}>
                <a
                    href="#main-content"
                    className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
                >
                    Skip to content
                </a>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                <Navbar />
                <main id="main-content">{children}</main>
                <Footer />
                <ScrollToTop />
                <Visitor />
                <Analytics />
                <SpeedInsights />
            </body>
        </html>
    );
}
