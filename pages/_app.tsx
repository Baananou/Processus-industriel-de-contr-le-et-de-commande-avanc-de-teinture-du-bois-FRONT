import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";



function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>

            <AnyComponent {...pageProps} />
    </>
  );
}

export default MyApp;
