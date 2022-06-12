import React from "react";

import './styleHeader.css'

import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="container-header">
            <div className='header-content'>
                <div className="container-img">
                    <img src='./assets/Logo-new.png' width='110'></img>
                </div>
                <div className='container-right'>
                    <div className="container-button">
                        <Link className="buttons"  to='/'>Login</Link>
                        <Link className="buttons" to='/cadastro'>Cadastro</Link>
                    </div>
                    <div>
                        <a target="_blank" href="https://github.com/">
                        <img src='./assets/logoGithub.png' width='32'></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
   
}

export default Header;