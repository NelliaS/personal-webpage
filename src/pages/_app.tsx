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
    <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png?v=2"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png?v=2"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png?v=2"/>
    <link rel="manifest" href="/images/favicons/site.webmanifest?v=2"/>
    <link rel="icon" href="/images/favicons/favicon.ico?v=2" />
    <link rel="mask-icon" href="/images/favicons/safari-pinned-tab.svg?v=2" color="#77aec3"/>           
    <meta name="msapplication-TileColor" content="#ffffff"/>            
    <meta name="theme-color" content="#ffffff"/>
  </Head>
  <Header />
  <Component {...pageProps} />
  <Footer />
</>

);


export default MyApp
