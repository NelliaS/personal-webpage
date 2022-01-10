import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';

const MyApp = ({ Component, pageProps }: AppProps): any => (

<>
  <Head>
    <title>Nela provází</title>
    <meta name="description" content="Nela Slezáková - personal web" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="apple-touch-icon" sizes="180x180" href="/public/images/favicons/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/public/images/favicons/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/public/images/favicons/favicon-16x16.png"/>
    <link rel="manifest" href="/public/images/favicons/site.webmanifest"/>
    <link rel="shortcut icon" href="/public/images/favicons/favicon.ico?v=2" />
    <link rel="mask-icon" href="/public/images/favicons/safari-pinned-tab.svg" color="#77aec3"/>           
    <meta name="msapplication-TileColor" content="#ffffff"/>            
    <meta name="theme-color" content="#ffffff"/>
  </Head>
  <Header />
  <Component {...pageProps} />
  <Footer />
</>

);


export default MyApp
