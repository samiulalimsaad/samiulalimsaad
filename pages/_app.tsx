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
                    content="I dream of being an expert software engineer or a web developer. Excellent reputation for resolving problems and improving customer satisfaction. In-depth knowledge of Node JS, React, NextJS and MongoDB. Skillful in creating servers and databases for functionality and designing and developing APIs. 2 years of experience efficiently coding websites and applications using modern HTML, CSS, JavaScript, Typescript and React and as a back-end and a front-end developer. Building state-of-the-art, easy-to-use, user-friendly websites and applications is truly a passion of mine and I am confident I would be an excellent addition to your organization. In addition to my knowledge base, I actively seek out new technologies and stay up-to-date on industry trends and advancements."
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
