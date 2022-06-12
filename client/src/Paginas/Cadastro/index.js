import React, {useState} from "react";
import axios from "axios"
import './styleCadastro.css'
import EstruturaPagina from "../../components/EstruturaPagina";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cadastro = () => {
    const [values, setvalues] = useState({
        name:"",
        email:"", 
        password:"",
        confirmpassword:"",
    });

    const handleSubmit = async (e) => {

        e.preventDefault();
        try{
            const{ data } = await axios.post("http://localhost:4000/cadastro",{
                ...values,
            }, {
                withCredentials:true,
            });
            console.log(data);
            if(data){
                if(data.errors){
                }else{
                    toast.success("Cadastrado com sucesso", {
                        theme:"colored"
                    })
                }
            }
        }catch(err) {
            console.log(err)
        }
    }
        
    return(
        <EstruturaPagina>
            <div className="mainContainer">
                <div className="container">
                    <div className="container-middle">
                        <div className="container-cadastro">
                        <h1>Bem <span>Vindo</span> !!!</h1>
                            <form className="box-cadastro" onSubmit={(e) => handleSubmit(e)}>
                                <input type='text' name="name" placeholder="Usuário" id="input-1" onChange={(e)=>setvalues({...values, [e.target.name]: e.target.value})}></input>
                                <input type='text' name="email" placeholder="Email" id="input-2" onChange={(e)=>setvalues({...values, [e.target.name]: e.target.value})}></input>
                                <input type='password' name="password" placeholder="Senha" id="input-2" onChange={(e)=>setvalues({...values, [e.target.name]: e.target.value})}></input>
                                <input type='password'name="confirmpassword" placeholder="Confirme sua senha" id="input-2" onChange={(e)=>setvalues({...values, [e.target.name]: e.target.value})}></input>
                                <div className="div-btn">
                                    <button className="btn-entrar" type="submit">Cadastrar</button>
                                </div>
                            </form>
                            <ToastContainer 
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover/>
                        </div>
                        <div className="container-data">
                            <img src='./assets/data-man.svg' width='600'></img>
                        </div>
                    </div>
                </div>
            </div>
        </EstruturaPagina>
    )
}

export default Cadastro;