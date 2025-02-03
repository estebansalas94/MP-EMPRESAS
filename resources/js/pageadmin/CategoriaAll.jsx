import React from 'react';
import { useEffect, useState } from 'react';
import Config from '../Config';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';



const CategoriaAll = () => {
    const [categorias, setCategorias] = useState();

    useEffect(() => {
        getCategoriaAll();
    },[]);

    const getCategoriaAll = async () => {
        try {
            const response = await Config.getCategoriaAll();
            setCategorias(response.data);
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
                        <Link to={'/admin/categoria/create'} className="btn btn-primary">Agregar Categoría</Link>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th>ORDEN</th><th>NOMBRE</th><th>ACCIÓN</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    !categorias ? "...Loading" : categorias.map(
                                        (categoria) => {
                                            return(
                                                <tr key={categoria.id}>
                                                    <td>{categoria.orden}</td>
                                                    <td>{categoria.nombre}</td>
                                                    <td>
                                                        <Link to={`/admin/categoria/edit/${categoria.id}`} className='btn btn-primary'>Editar</Link>
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

export default CategoriaAll