import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient();


function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <AnyComponent {...pageProps} />
      </QueryClientProvider>

    </>
  );
}

export default MyApp;
