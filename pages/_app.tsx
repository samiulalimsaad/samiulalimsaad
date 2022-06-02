import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Samiul Alim Saad Portfolio" />
                <link rel="icon" href="/images/samiul-alim.ico" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
