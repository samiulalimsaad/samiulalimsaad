import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Samiul Alim</title>
                <link rel="icon" href="/samiul-alim.ico" />

                <meta
                    property="og:url"
                    content="https://samiulalimsaad.vercel.app/"
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Samiul Alim" />
                <meta
                    property="og:description"
                    content="I dream to be an expert software engineer. In-depth knowledge of Node JS, React, NextJS, and MongoDB. 2 years of experience efficiently coding websites and applications using modern JavaScript, Typescript, back-end, and front-end developer. Building state-of-the-art, easy-to-use, user-friendly websites and applications is truly a passion, and I am confident I would be an excellent addition to your organization."
                />
                <meta property="og:image" content="/Samiul-Alim.png" />
            </Head>

            <Navbar />
            <main>
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default MyApp;
