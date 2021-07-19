import Head from 'next/head';
import { AppProps } from 'next/app';


const initialDesc = "@edit SOME PATTERN DESCRIPTION HERE"

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>@edit YOUR TITLE</title> 
    </Head>      
    <Component {...pageProps} />
  </>
);

export default App;
