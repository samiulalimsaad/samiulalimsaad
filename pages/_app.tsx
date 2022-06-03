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
            </Head>
            <header>
                <Navbar />
            </header>
            <main>
                <Component {...pageProps} />
            </main>
        </>
    );
}

export default MyApp;
