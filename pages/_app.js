import React from "react";
import { useEffect, useState } from "react";
import './main.css';
import Script from 'next/script'
import Head from "next/head";


const App = ({ Component, pageProps }) => {

  return (
    <>
      <Head>
        {/* responsive meta */}
       <meta charSet="utf-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
       <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,700,900" />
       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      <div className="wrapper">
        <Component {...pageProps} />
      </div>
      </>

  );
};

export default App;
