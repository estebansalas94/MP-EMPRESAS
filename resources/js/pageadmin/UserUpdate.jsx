import React, { useEffect,useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Config from '../Config';
import Sidebar from './Sidebar';

const UserUpdate = () => {
    const navigate= useNavigate();
    const {id} = useParams();
    const [name, setName] = useState("");
    const [aprobado, setAprobado] = useState(false);

    useEffect(()=>{
        const getUserById = async () => {
            Config.getUserById(id)
            .then(({data}) =>{
                setName(data.name)
                setAprobado(data.aprobado)
            });
        };
        getUserById();
    },[]);

    const submitUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await Config.getUserUpdate({aprobado},id);
            navigate('/admin/user');
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
                        <div className="card-header">EDITAR USUARIO</div>
                        <div className="card-body">
                            <form onSubmit={submitUpdate}>
                                <div className="col-sm-12">
                                    <label htmlFor="name" className="form-label">Nombre:</label>
                                    <input type="text" className="form-control" id="name" value={name} onChange={(e)=>setName(e.target.value)} disabled/>
                                </div>
                                <div className="col-sm-12 mt-3">
                                    <div className="form-check form-switch">
                                        <input  className="form-check-input" id="aprobado" checked={aprobado} onChange={(e)=>setAprobado(!aprobado)} type='checkbox' role='switch'/>
                                        <label htmlFor="aprobado" className="form-check-label">Aprobado</label>
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

export default UserUpdate