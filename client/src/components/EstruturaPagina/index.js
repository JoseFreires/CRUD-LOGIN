import React from "react";
import Footer from "../Footer/"
import Header from "../Header";

const EstruturaPagina = ( props ) => {
    return(
        <section>
            <Header/>
            {props.children}
            <Footer/>
        </section>
    );
}

export default EstruturaPagina;