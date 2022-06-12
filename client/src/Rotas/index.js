import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Paginas/Login";
import Cadastro from "../Paginas/Cadastro/";
import Crud from "../Paginas/Crud";

const Rotas = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' exact element={ <Login/> }/>
            <Route exact path='/cadastro' element={ <Cadastro />}/>
            <Route exact path='/alunos' element={<Crud />}/>
        </Routes>
    </BrowserRouter>
)

export default Rotas;