import NextDocument, { Html,Head, Main, NextScript } from 'next/document'
import * as React from "react";
import {useEffect} from "react";

class Document extends NextDocument {
  render() {

    return (
      <Html lang="cs">
        <Head>

            <link rel="apple-touch-icon" sizes="57x57" href="/public/images/favicons/apple-icon-57x57.png"/>
            <link rel="apple-touch-icon" sizes="60x60" href="/public/images/favicons/apple-icon-60x60.png"/>
            <link rel="apple-touch-icon" sizes="72x72" href="/public/images/favicons/apple-icon-72x72.png"/>
            <link rel="apple-touch-icon" sizes="76x76" href="~/images/favicons/apple-icon-76x76.png"/>
            <link rel="apple-touch-icon" sizes="114x114" href="~/images/favicons/apple-icon-114x114.png"/>
            <link rel="apple-touch-icon" sizes="120x120" href="~/images/favicons/apple-icon-120x120.png"/>
            <link rel="apple-touch-icon" sizes="144x144" href="~/images/favicons/apple-icon-144x144.png"/>
            <link rel="apple-touch-icon" sizes="152x152" href="~/images/favicons/apple-icon-152x152.png"/>
            <link rel="apple-touch-icon" sizes="180x180" href="~/images/favicons/apple-icon-180x180.png"/>
            <link rel="icon" type="image/png" sizes="192x192" href="~/images/favicons/android-icon-192x192.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="~/images/favicons/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="96x96" href="~/images/favicons/favicon-96x96.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="~/images/favicons/favicon-16x16.png"/>
            <meta name="msapplication-TileColor" content="#ffffff"/>
            <meta name="msapplication-TileImage" content="~/images/favicons//ms-icon-144x144.png"/>
            <meta name="theme-color" content="#ffffff"/>
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