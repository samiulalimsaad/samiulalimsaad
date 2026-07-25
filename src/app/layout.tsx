import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Fira_Code } from "next/font/google";
import Navbar from "@/components/Navbar";
import Visitor from "@/components/Visitor";

const firaCode = Fira_Code({
    subsets: ["latin"],
    variable: "--font-fira-code",
});

import "./globals.css";

const Footer = dynamic(() => import("@/components/Footer"), {
    ssr: true,
});
const ScrollToTop = dynamic(() => import("@/components/ScrollToTop"), {
    ssr: true,
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const siteTitle = "Samiul Alim | Backend & Platform Engineer — Go, TypeScript";
const siteDescription =
    "Backend and platform engineer building production services for identity, payments, and email delivery. Go · TypeScript · PostgreSQL. Open to remote roles.";

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

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Samiul Alim",
    jobTitle: "Backend & Platform Engineer",
    url: siteUrl,
    sameAs: ["https://github.com/samiulalimsaad", "https://linkedin.com/in/samiulalimsaad"],
    email: "samiulalimsaad@gmail.com",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={firaCode.variable}>
            <body className={`antialiased`}>
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
