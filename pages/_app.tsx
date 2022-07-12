import "../styles/globals.css";
import { ReactNode, ReactElement } from "react";
import { NextPage } from "next";
import { AppProps } from "next/app";
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWidthLayout = AppProps & { Component: NextPageWithLayout };

function MyApp({ Component, pageProps }: AppPropsWidthLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  //return <Component {...pageProps} />;
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
