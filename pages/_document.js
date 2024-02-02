import TwSizeIndicator from "@components/TwSizeIndicator";
import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  // destructuring items from config object
  return (
    <Html lang="en">
      <Head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3122304749527602"
          crossorigin="anonymous"></script>
        {/* favicon */ }
        <link rel="icon" href="/favicon.ico" type="image/x-icon"></link>

        {/* theme meta */ }
        <meta name="theme-name" content="coding tutorials" />

        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
      </Head>
      <body>
        <Main />
        <TwSizeIndicator />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
