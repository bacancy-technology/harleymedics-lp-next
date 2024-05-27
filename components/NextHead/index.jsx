import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { BASE_URL, ENVIRONMENT } from "../../env";

function NextHead({ title, description, keywords }) {
  const { asPath } = useRouter();
  return (
    <Head>
      <title>{title || "Mayfair Clinic"}</title>
      <meta name="title" content={title || "Mayfair Clinic"} />
      <meta name="description" content={description || "Mayfair Clinic"} />
      <link rel="canonical" href={`${BASE_URL}${asPath}` || ""} />
      <meta name="keywords" content={keywords || ""} />
      <meta name="theme-color" content="#5197CB" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="nofollow, noindex" />

      <script src="https://www.googletagmanager.com/gtag/js?id=AW-16500755087"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'AW-16500755087');`,
        }}
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '7377893142246478');
          fbq('track', 'PageView');`,
        }}
      />
    </Head>
  );
}

export default NextHead;
