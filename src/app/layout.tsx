import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Fira_Code, Inter } from "next/font/google";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Visitor from "@/components/Visitor";
import { AI_CONTEXT_URL, experienceFacts, PROFILE_ID, profile, SITE_URL } from "@/lib/knowledge";

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

const siteTitle = `${profile.name} | ${profile.title}`;
const siteDescription = `${profile.summary} Go, TypeScript, PostgreSQL, authentication, payments, and email delivery.`;

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
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
    "@id": PROFILE_ID,
    name: profile.name,
    jobTitle: profile.title,
    description: profile.summary,
    url: SITE_URL,
    sameAs: [profile.social.github, profile.social.linkedin],
    email: profile.email,
    subjectOf: { "@id": `${AI_CONTEXT_URL}#profile` },
    worksFor: { "@type": "Organization", name: experienceFacts[0].employer },
    knowsAbout: [
        "Go",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "Redis",
        "REST APIs",
        "Authentication",
        "Payments",
    ],
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
