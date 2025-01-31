import React from 'react';
import AuthUser from '../pageauth/AuthUser';
import Config from '../Config';

const Navbar = () => {
  const {getRol,getLogout,getToken} = AuthUser();

  const logoutUser = () => {
      const token = localStorage.getItem('token'); 

      Config.getLogout({
          headers: {
              Authorization: `Bearer ${token}` 
          }
      }).then(response => {
          console.log("Sesión cerrada correctamente:", response.data);
          localStorage.removeItem('token'); 
          getLogout();
      }).catch(error => {
          console.error("Error en logout:", error.response?.data || error.message);
      });
  };

  const renderLinks = () => {
    if(getToken()){
      return (
        <>
          <li className="nav-item">
              <a className="nav-link" href={`${getRol()}`} >Administración</a>
          </li>
          <li className="nav-item">
              <a className="nav-link" href="#" onClick={logoutUser}>Logout</a>
          </li>
        </>
      )
    }else{
      return(
        <>
          <li className="nav-item">
              <a className="nav-link" href="/login" >Login</a>
          </li>
        </>
      )
    }
  }
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">MP - EMPRESAS</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/categorias">Categorias</a>
            </li>
            {renderLinks()}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
