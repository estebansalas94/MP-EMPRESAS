import React from 'react';
import AuthUser from '../pageauth/AuthUser';
import Config from '../Config';

const Navbar = () => {
  const {getRol,getLogout,getToken,user} = AuthUser();

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
              <a className="nav-link text-primary" href={`${getRol()}`} >{getRol() == "admin" ? "Administrador":"Cliente"} | {user.name}</a>
          </li>
          <li className="nav-item">
              <a className="nav-link text-primary" href="#" onClick={logoutUser}>Logout</a>
          </li>
        </>
      )
    }else{
      return(
        <>
          <li className="nav-item">
              <a className="nav-link text-primary" href="/login" >Login</a>
          </li>
        </>
      )
    }
  }
  
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="/"><img src="https://i.postimg.cc/LXQtfdzf/mp-2-2.png" alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active text-primary" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="/categorias">Categorias</a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            {renderLinks()}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
