import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Config from '../Config';
import Sidebar from './Sidebar';

const EmpresaUpdate = () => {
    const navigate= useNavigate();
    const {id} = useParams();
    const [nombre, setNombre] = useState("");
    const [orden, setOrden] = useState("");
    const [publicado, setPublicado] = useState(false);

    useEffect(()=>{
        const getEmpresaById = async () => {
            Config.getEmpresaById(id)
            .then(({data}) =>{
                setNombre(data.nombre)
                setPublicado(data.publicado)
                setOrden(data.orden)
            });
        };
        getEmpresaById();
    },[]);
    const submitUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await Config.getEmpresaUpdate({publicado,orden},id);
            navigate('/admin/empresa');
        } catch (error) {
            console.error("Error en la actualización de usuario:", error.response?.data || error.message);
        }
    }

  return (
    <div className='container bg-light'>
        <div className="row">
            <Sidebar/>
            <div className="col-sm-9 mt-3 mb-3">
                <div className="card">
                    <div className="card-body">
                        <div className="card-header">EDITAR EMPRESA</div>
                        <div className="card-body">
                            <form onSubmit={submitUpdate}>
                                <div className="form-group row">
                                    

                                    <div className="col-sm-8">
                                        <label htmlFor="nombre" className="form-label">Nombre:</label>
                                        <input type="text" className="form-control" id="nombre" value={nombre} onChange={(e)=>setName(e.target.value)} disabled/>
                                    </div>
                                    <div className="col-sm-4">
                                        <label htmlFor="orden" className="form-label">Orden:</label>
                                        <input type="number" className="form-control" id="orden" value={orden} onChange={(e)=>setOrden(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="mt-3">
                                        <div className="form-check form-switch">
                                            <input  className="form-check-input" id="publicado" checked={publicado} onChange={(e)=>setPublicado(!publicado)} type='checkbox' role='switch'/>
                                            <label htmlFor="publicado" className="form-check-label">Publicado</label>
                                        </div>
                                    </div>
                                <div className="btn-group mt-3">
                                    <Link to={-1} className='btn btn-secondary '>← Volver</Link>
                                    <button type="submit" className="btn btn-success">Actualizar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmpresaUpdate