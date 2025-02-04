import React from 'react';
import AuthUser from './AuthUser';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Config from '../Config';
import { useEffect } from 'react';



const Login = () => {
    const {setToken,getToken} = AuthUser();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    
    useEffect(() => {
        if(getToken()){
            navigate('/');
        }
    },[]);

    const submitLogin = async (e) => {
        e.preventDefault();
        await axios.get('/sanctum/csrf-cookie').then(() => {
            Config.getLogin({ email, password }).then((data) => {
                if (data.data.success) {
                    localStorage.setItem('token', data.data.token);
                    setToken(
                        data.data.user,
                        data.data.token,
                        data.data.user.roles[0].name
                    );
                } else {
                    setMessage(data.data.message);
                }
            }).catch(error => console.error("Error en login:", error));
        });
    };
    

  return (
    <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-4'>
                <div className='card mt-5 mb-5'>
                    <div className='card-body'>
                        <h1 className='text-center fw-bolder'>LOGIN</h1>
                        <input type="email" className='form-control mt-3' placeholder='Email:' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                        <input type="password" className='form-control mt-3' placeholder='Password:' value={password} onChange={(e)=>setPassword(e.target.value)} required />
                        <button onClick={submitLogin} className='btn btn-primary mt-3 w-100'>Iniciar Sesion</button>
                        <p className='text-center mt-3'>{message}</p>
                        <hr />
                        <p className='text-center'>Primera vez... debe registrarse</p>
                        <a href="/register" className='btn btn-primary mt-3 w-100'>Registrarse</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login