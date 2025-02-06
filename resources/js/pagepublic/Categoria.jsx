import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Config from '../Config';
import Modal from '../components/Modal';

const Categoria = () => {
  const {slug} = useParams();
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState([]);
  const [empresas, setEmpresas] = useState([]);
  const[modal, setModal] = useState(false);
  const[datamodal, setDatamodal] = useState([]);


  useEffect(()=>{
    const getCategoria = async ()=>{

      await Config.CategoriaBySlug(slug).then((response)=>{
        if(response.data !== null){
          setCategoria(response.data.categoria);
          if(response.data.empresas.length > 0){
            setEmpresas(response.data.empresas);
          }
        }else{
          navigate('/')
        }
      });
    }
    getCategoria();
  },[slug]);

  const showModal = (e,empresa) => {
    e.preventDefault();
    setModal(true);
    setDatamodal(empresa);
  }

  return (
    <div className='container'>
      <div className="row justify-content-center">
        <div className="col-sm-8">
            <h1 className='text-center fw-bolder mb-5 mt-5'>Empresas de {categoria.nombre}</h1>
            {empresas.length === 0 && <p className='text-center mt-5'>...No se encontraron empresas</p>}
          {
            empresas.map((empresa)=>{
              return (
                <div className="card mt-3 mb-3" key={empresa.id}>
                  <div className="card-body">
                    <h3 className="fw-bolder">
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
  )
}

export default Categoria