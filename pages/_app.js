import React from "react";
import { useEffect } from "react";
import { initGA, logPageView } from '../components/analytics';
import './customized.css';
import './main.css';
import Script from 'next/script'
import Head from "next/head";


const App = ({ Component, pageProps }) => {

   useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <>
      <Head>
        {/* responsive meta */}
       <meta charSet="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
       <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,700,900" />
       <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link rel="shortcut icon" href="https://raw.githubusercontent.com/jonkiky/edu/master/public/images/logo_circle.png" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Georama:wght@500&family=Nunito:wght@200&family=Roboto&display=swap" rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      />
      <script type="text/javascript">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-732B6BF2S5');
        `}
      </script>
       <title>
        KIDDIE DISCOVERY
       </title>
      </Head>
      <div className="wrapper">
        <Component {...pageProps} />
      </div>
      </>

  );
};

export default App;
