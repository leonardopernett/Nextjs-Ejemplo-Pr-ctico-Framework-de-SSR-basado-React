# NEXTJS Framework de SSR basado en React


# folder public
next toma el folder public para agregar las imagenes

# style folder 
se crear un archivo next.config.js donde se configura 
el modulo @zeit/next-css para tener estilos globales

# style folder
se crear un folder style donde se guardala los .css
luego se importara en cada una de las paginas componentes

# pages
next toma ese folder como alojamiento de las paginas
cuando se se crea una pagina y una subpagina como /users/ii
se crearria un folder llamado users y un elemento entre corchete
diciendo que es un parametro dinamico ejemplo users/[id].js

# components
se crear un commponente container donde se configura para ser container principal

import React, { Fragment } from "react";
import Head from "next/head";

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

 {props.children} alli ira la informacion componente padre

# los componentes hijo quedarian asi 

import React, { Fragment } from "react";
import Container from "../components/Container";

export default function Index() {
  return (
    <Fragment>
      <Container>
        <Head>
          <title>Home Page</title>
        </Head>
        <h1>users</h1>
      </Container>
    </Fragment>
  );
}

dentro del componente padre 

# getInitialProps
alternativa a useEffect 

Index.getInitialProps = async (ctx) => {
  const res = await fetch("https://reqres.in/api/users");
  const response = await res.json();
  return {users:response.data};
};

# ctx.query.id 
parametro de la ruta