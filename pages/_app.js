import { NextIntlProvider } from "next-intl";

import "../styles/globals.css";
import "../styles/embla.css";

function MyApp({ Component, pageProps }) {
  return (
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
  );
}

export default MyApp;
