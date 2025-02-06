import React, { useEffect, useState } from 'react'
import Config from '../Config';
import Modal from '../components/Modal';

const Home = () => {
  const[empresas, setEmpresas] = useState([]);
  const[modal, setModal] = useState(false);
  const[datamodal, setDatamodal] = useState([]);

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

  const showModal = (e,empresa) => {
    e.preventDefault();
    setModal(true);
    setDatamodal(empresa);
  }

  return (
    <>
      <div className="container-fluid pt-5 pb-5 bg-primary">
        <h1 className="text-center fw-bolder text-white">DIRECTORIO DE EMPRESAS</h1>
      </div>
      <div className="container pt-5 pb-5">
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <div className="card">
              <div className="card-body mb-3">
                <p className='text-center mt-5 fw-bolder fs-3'>BUSCADOR</p>
                <input type="search" placeholder='Ingrese empresa:' onChange={(e)=>search(e.target.value)} className='form-control rounded-pill'/>
              </div>
            </div>
            <div className="card mt-5">
              <div className="card-body">
                {
                  empresas.map((empresa)=>{
                    return (
                      <div className="mt-3" key={empresa.id}>
                        <div className="border-bottom">
                          <h3 className='fw-bolder'>
                            <a href="#" onClick={(e)=>showModal(e,empresa)} className='text-decoration-none'>{empresa.nombre}</a>
                          </h3>
                          <p>{empresa.descripcion}</p>
                        </div>
                      </div>
                    )
                  })
                }
                {modal && <Modal datamodal={datamodal} close={setModal}/>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home