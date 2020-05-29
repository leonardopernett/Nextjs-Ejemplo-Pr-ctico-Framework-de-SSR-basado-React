import React, { Fragment, useEffect } from "react";
import Head from "next/head";
import Container from "../components/Container";
import User from '../components/User'
export default function Index({users}) {
 
  return (
    <Fragment>
      <Container>
        <Head>
          <title>Home Page</title>
        </Head>
        <h1>users</h1>
         <User users={users} />
      </Container>
    </Fragment>
  );
}

Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const response = await res.json();
  return {users:response.data};
};
