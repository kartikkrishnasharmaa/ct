import config from "@config/config.json";
import theme from "@config/theme.json";
import { JsonContext } from "context/state";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { useEffect, useState } from "react";
import TagManager from "react-gtm-module";
import { GoogleAnalytics } from "nextjs-google-analytics";
import "styles/style.scss";
import "styles/style.css";

const App = ( { Component, pageProps } ) => {
  // default theme setup
  const { default_theme } = config.settings;

  // import google font css
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;
  const [ fontcss, setFontcss ] = useState();
  useEffect( () => {
    fetch(
      `https://fonts.googleapis.com/css2?family=${pf}${sf ? "&family=" + sf : ""
      }&display=swap`
    ).then( ( res ) => res.text().then( ( css ) => setFontcss( css ) ) );
  }, [ pf, sf ] );

  // google tag manager (gtm)
  const tagManagerArgs = {
    gtmId: config.params.tag_manager_id,
  };
  useEffect( () => {
    setTimeout( () => {
      process.env.NODE_ENV === "production" &&
        config.params.tag_manager_id &&
        TagManager.initialize( tagManagerArgs );
    }, 5000 );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [] );

  return (
    <JsonContext>
      <GoogleAnalytics strategy="lazyOnload" trackPageViews />
      <Head>
        {/* google font css */ }
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <style
          dangerouslySetInnerHTML={ {
            __html: `${fontcss}`,
          } }
        />
        {/* responsive meta */ }
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
      </Head>
      <ThemeProvider attribute="class" defaultTheme={ default_theme }>
        <Component { ...pageProps } />
      </ThemeProvider>
    </JsonContext>
  );
};

export default App;
