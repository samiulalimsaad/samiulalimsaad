import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Samiul Alim</title>
                <meta name="description" content="Samiul Alim Saad Portfolio" />
                <link rel="icon" href="/samiul-alim.ico" />

                <meta
                    property="og:url"
                    content="https://samiulalimsaad.vercel.app/"
                />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Samiul Alim" />
                <meta
                    property="og:description"
                    content="Samiul Alim | Portfolio | Web Developer | facebook.com/samiulalimsaad | m.me/samiulalimsaad | linkedin.com/in/samiulalimsaad | github.com/samiulalimsaad | portfolio-saadraj.vercel.app"
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
