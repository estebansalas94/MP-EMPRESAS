import React, { useEffect, useState } from 'react'
import Config from '../Config';

const Home = () => {
  const[empresas, setEmpresas] = useState([]);
  useEffect(()=>{
    getEmpresas();
  },[])

  const getEmpresas = async () => {
    const response = await Config.getEmpresas(5);
    setEmpresas(response.data);
  }

  const search = async (e) => {
    const response = await Config.searchEmpresas({text:e});
    setEmpresas(response.data);
  }

  return (
    <div className="container pt-5 pb-5">
      <div className="row justify-content-center">
        <div className="col-sm-8">
          <h1 className="text-center fw-bolder">DIRECTORIO DE EMPRESAS</h1>
          <div className="card">
            <div className="card-body">
              <p className='text-center mt-5'>BUSCADOR</p>
              <input type="search" placeholder='Ingrese empresa:' onChange={(e)=>search(e.target.value)} className='form-control'/>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              {
                empresas.map((empresa)=>{
                  return (
                    <div className="mt-3" key={empresa.id}>
                      <div className="card-body">
                        <h2 className='fw-bolder'>{empresa.nombre}</h2>
                        <p>{empresa.descripcion}</p>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home