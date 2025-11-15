import FloatingSocialLinks from "@/components/FloatingSocialLinks";
import Navbar from "@/components/Navbar";
import Visitor from "@/components/Visitor";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
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
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <Navbar />
                {children}
                <FloatingSocialLinks />
                <Visitor />
            </body>
        </html>
    );
}
