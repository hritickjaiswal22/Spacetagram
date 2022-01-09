import Head from "next/head";
import { Fragment } from "react";
import { Provider } from "react-redux";

import store from "../store/index";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Spacetagram</title>
        <meta name="description" content="Instagram for Space Stuff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Fragment>
  );
}

export default MyApp;
