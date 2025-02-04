import React from 'react';
import { useEffect, useState } from 'react'
import Config from '../Config';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const EmpresaAll = () => {
    const [empresas, setEmpresas] = useState();

    useEffect(() => {
        getEmpresaAll();
    },[]);

    const getEmpresaAll = async () => {
        try {
            const response = await Config.getEmpresaAllClient();
            setEmpresas(response.data);
        } catch (error) {
            console.error("Error al obtener usuarios:", error.response?.data || error.message);
        }
    }
  return (
    <div className="container bg-light">
        <div className='row'>
            <Sidebar/>
            <div className="col-sm-9 mt-3 mb-3">
                <div className="card">
                    <div className="card-body">
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>ORDEN</th><th>NOMBRE</th><th>ACCIÓN</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    !empresas ? "...Loading" : empresas.map(
                                        (empresa) => {
                                            return(
                                                <tr key={empresa.id}>
                                                    <td>{empresa.orden}</td>
                                                    <td>{empresa.nombre}</td>
                                                    <td>
                                                        <Link to={`/client/empresa/edit/${empresa.id}`} className='btn btn-primary'>Editar</Link>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    )
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmpresaAll