import React, { useEffect } from 'react';
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Config from '../Config';
import Sidebar from './Sidebar';
import Select from '../components/Select';

const EmpresaUpdate = () => {
    const navigate= useNavigate();
    const {id} = useParams();
    const [nombre,setNombre] = useState("");
    const [email,setEmail] = useState("");
    const [telefono,setTelefono] = useState("");
    const [direccion,setDireccion] = useState("");
    const [website,setWebsite] = useState("");
    const [facebook,setFacebook] = useState("");
    const [youtube,setYoutube] = useState("");
    const [tiktok,setTiktok] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [orden, setOrden] = useState("");
    const [categoria_id,setCategoria_id] = useState("");
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
        const getEmpresa = async () => {
            Config.getEmpresaByIdClient(id)
            .then(({data}) =>{
                setNombre(data.nombre)
                setEmail(data.email)
                setDescripcion(data.descripcion)
                setOrden(data.orden)
                setTelefono(data.telefono)
                setDireccion(data.direccion)
                setWebsite(data.website)
                setFacebook(data.facebook)
                setYoutube(data.youtube)
                setTiktok(data.tiktok)
                setUrlfoto(data.urlfoto)
                setCategoria_id(data.categoria_id)
            });
        };
        getEmpresa();
    },[]);

    const getCategoriaId = (v) => {
        setCategoria_id(v)
    }

    const submitUpdate = async(ev) => {
        ev.preventDefault();
        await Config.getEmpresaUpdateClient({nombre,email,descripcion,orden,telefono,direccion,website,facebook,youtube,tiktok,file,categoria_id},id);
        navigate('/client/empresa');

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
                                <div className="col-sm-6">
                                    <label>Nombre</label>
                                    <input type="text" className='form-control' value={nombre} onChange={(e) => setNombre(e.target.value)} />
                                </div>
                                <div className="col-sm-3">
                                    <label>Email</label>
                                    <input type="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="col-sm-3">
                                    <label>Teléfono</label>
                                    <input type="tel" className='form-control' value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                                </div>
                            </div>

                            <div className='form-group row mt-3'>
                                <div className="col-sm-6">
                                    <label>Dirección</label>
                                    <input type="text" className='form-control' value={direccion} onChange={(e) => setDireccion(e.target.value)} />
                                </div>
                                <div className="col-sm-3">
                                    <label>Orden</label>
                                    <input type="number" className='form-control' value={orden} onChange={(e) => setOrden(e.target.value)}/>
                                </div>
                                <div className="col-sm-3">
                                    <label>Categoria</label>
                                    <Select selec={categoria_id} selected={getCategoriaId}/>
                                </div>
                            </div>
                            <div className="form-group row mt-3">
                                <div className="col-sm-3">
                                    <label>Website</label>
                                    <input type="url" className='form-control' value={website} onChange={(e) => setWebsite(e.target.value)}/>
                                </div>
                                <div className="col-sm-3">
                                    <label>Facebook</label>
                                    <input type="url" className='form-control' value={facebook} onChange={(e) => setFacebook(e.target.value)}/>
                                </div>
                                <div className="col-sm-3">
                                    <label>Youtube</label>
                                    <input type="url" className='form-control' value={youtube} onChange={(e) => setYoutube(e.target.value)}/>
                                </div>
                                <div className="col-sm-3">
                                    <label>Tiktok</label>
                                    <input type="url" className='form-control' value={tiktok} onChange={(e) => setTiktok(e.target.value)}/>
                                </div>
                            </div>
                            <div className="mt-3">
                                <label>Descripción:</label>
                                <textarea className="form-control" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></textarea>
                            </div>
                            
                            <div className="mt-3">
                                <label>Imagen:</label>
                                <img src={"/img/empresa/" + urlfoto} alt="" loading='lazy' width={200} height={200} className='img-fluid img-thumbnail'/>
                                <input type="file" className='form-control' onChange={(e) => handleInputChange(e)} id="files"/>
                            </div>
                            <div className="btn-group mt-3">
                                <Link to={-1} className="btn btn-secondary">← Volver</Link>
                                <button className="btn btn-success">Actualizar Empresa</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EmpresaUpdate