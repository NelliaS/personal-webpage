import NextDocument, { Html,Head, Main, NextScript } from 'next/document'
import * as React from "react";
import {useEffect} from "react";

class Document extends NextDocument {
  render() {

    return (
      <Html lang="cs">
        <Head>
            {/* <link rel="apple-touch-icon" sizes="180x180" href="/public/images/favicons/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/public/images/favicons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/public/images/favicons/favicon-16x16.png"/>
            <link rel="manifest" href="/public/images/favicons/site.webmanifest"/>
            <link rel="mask-icon" href="/public/images/favicons/safari-pinned-tab.svg" color="#77aec3"/>  
            <meta name="msapplication-TileColor" content="#ffffff"/>            
            <meta name="theme-color" content="#ffffff"/>
            <link rel="icon" href="/public/images/favicons/favicon.ico?v=2" />            */}
             {/* <script
                dangerouslySetInnerHTML={{
                    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src= 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f); })(window,document,'script','dataLayer','GTM-TQL2WG5');`,
                }}
            /> */}

        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}

export default Document;