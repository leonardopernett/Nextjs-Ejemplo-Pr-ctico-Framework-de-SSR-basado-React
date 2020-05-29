import React, { Fragment } from "react";
import Head from "next/head";
import Navigation from "./Navigation";

export default function Container(props) {
  return (
    <Fragment>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css" />
      </Head>
      <Navigation />
       <div className="container mt-5">
         {props.children}
       </div>
    </Fragment>
  );
}
