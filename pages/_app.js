import Head from "next/head";
import { Fragment } from "react";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Spacetagram</title>
        <meta name="description" content="Instagram for Space Stuff" />
      </Head>

      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
