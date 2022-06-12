import React, {useState} from "react";
import axios from "axios";
import './styleLogin.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EstruturaPagina from "../../components/EstruturaPagina";

const Login = () => {
    const navigate = useNavigate()
    const[values, setvalues] = useState({
        email:"",
        password:"",
    })
    const hundleSubmit= async(e)=>{
        e.preventDefault();
        try{
            const{ data } = await axios.post("http://localhost:4000/login",{
                ...values,
            }, {
                withCredentials:true,
            });
            console.log(data);
            if(data){
                if(data.errors){
                }else{
                    
                    navigate('/alunos')
                }
            }
        }catch(err) {
            toast.error('O Email ou a senha, está incorreta', {
                theme:"colored"
            })
            console.log(err)
        }
        
    }
    return(
        <EstruturaPagina>
            <div className="mainContainer">
                <div className="container">
                    <div className="container-middle">
                        <div className="container-login">
                            <h1> Bem <span>Vindo</span> De Volta !!! </h1>
                            <form className="box-login" onSubmit={(e) => hundleSubmit(e)}>
                                <input type='text' placeholder="Email" id="input-1" name="email" onChange={(e)=>setvalues({...values, [e.target.name]: e.target.value})}></input>
                                <input type='password' placeholder="Senha" id="input-2" name="password" onChange={(e)=>setvalues({...values, [e.target.name]: e.target.value})}></input>
                                <div className="div-btn">
                                    <button className="btn-entrar" type="Submit">Entrar</button>     
                                </div>
                            </form>
                            <ToastContainer/>
                        </div>
                        <div className="container-data">
                            <img src='../assets/data-man.svg' width='600'></img>
                        </div>
                    </div>
                </div>
            </div>
        </EstruturaPagina>
    )
}

export default Login;