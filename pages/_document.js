import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { BASE_URL, ENVIRONMENT } from "../env";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          href={`${BASE_URL}/images/HM-logo.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          href={`${BASE_URL}/images/HM-logo.png`}
          sizes="192x192"
        />
        <link rel="apple-touch-icon" href={`${BASE_URL}/images/HM-logo.png`} />
        <meta charSet="utf-8" />
      </Head>
      <body>
        <Main />
        <NextScript />
        {ENVIRONMENT == "production" ? (
          <>
            {" "}
            <noscript
              dangerouslySetInnerHTML={{
                __html: `
                <img height="1" width="1" style="display:none"
                src="https://www.facebook.com/tr?id=7377893142246478&ev=PageView&noscript=1"
                />`,
              }}
            />
          </>
        ) : null}
      </body>
    </Html>
  );
}
