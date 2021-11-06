import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head'
import Header from '../components/Header';
import Footer from '../components/Footer';

const MyApp = ({ Component, pageProps }: AppProps): any => (

<>
  <Head>
    <title>Nela Slezáková</title>
    <meta name="description" content="Nela Slezáková - personal web" />
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="icon" href="/favicon.ico" />
  </Head>
  <Header />
  <Component {...pageProps} />
  <Footer />
</>

);


export default MyApp
