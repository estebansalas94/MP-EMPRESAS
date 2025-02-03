import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Config from '../Config';
import Sidebar from './Sidebar';

const CategoriaUpdate = () => {
    const navigate= useNavigate();
    const {id} = useParams();
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [orden, setOrden] = useState("");
    const [menu, setMenu] = useState(false);
    const [urlfoto, setUrlfoto] = useState("foto.jpg");
    const [file, setFile] = useState("");


    const handleInputChange = async(e) => {
        let files = e.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (e) => {
            setFile(e.target.result);
        }
    }

    useEffect(()=>{
        const getCategoriaById = async () => {
            Config.getCategoriaById(id)
            .then(({data}) =>{
                setNombre(data.nombre)
                setDescripcion(data.descripcion)
                setOrden(data.orden)
                setUrlfoto(data.urlfoto)
                setMenu(data.menu)
            });
        };
        getCategoriaById();
    },[]);

    const submitUpdate = async (e) => {
            e.preventDefault();
            try {
                await Config.getCategoriaUpdate({nombre,descripcion,orden,file,menu},id)
                navigate('/admin/categoria');
            } catch (error) {
                console.error("Error en la actualización de usuario:", error.response?.data || error.message);
            }
        }

  return (
    <div className="container bg-light">
        <div className="row">
            <Sidebar/>
            <div className="col-sm-9 mt-3 mb-3">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={submitUpdate}>
                            <div className="form-group row">
                                <div className="mt-3">
                                    <div className="form-check form-switch">
                                        <input type="checkbox" className='form-check-input' checked={menu} onChange={(e)=>setMenu(!menu)} role='switch' id='menu'/>
                                        <label htmlFor="menu" className='form-check-label'>Portada?</label>
                                    </div>
                                </div>
                                <div className="col-sm-8">
                                    <label>Nombre</label>
                                    <input type="text" className='form-control' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                </div>
                                <div className="col-sm-4">
                                    <label>Orden</label>
                                    <input type="number" className='form-control' value={orden} onChange={(e) => setOrden(e.target.value)}/>
                                </div>
                            </div>
                            <div className="mt-3">
                                <label>Descripción</label>
                                <textarea className="form-control" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
                            </div>
                            <div className="mt-3">
                                <label>Imagen</label>
                                <img src={"/img/categoria/" + urlfoto} alt="" className='img-fluid img-thumbnail'/>
                                <input type="file" className='form-control' onChange={(e) => handleInputChange(e)} />
                            </div>
                            <div className="btn-group mt-3">
                                <Link to={-1} className="btn btn-secondary">← Volver</Link>
                                <button className="btn btn-primary">Actualizar Categoría</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CategoriaUpdate