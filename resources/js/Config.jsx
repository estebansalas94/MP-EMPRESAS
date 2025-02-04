import axios from "axios";

const base_api_url = 'http://localhost:8000/api/v1/';


export default {
    //AUTH
    getRegister:(data)=>axios.post(`${base_api_url}auth/register`,data),
    getLogin:(data)=>axios.post(`${base_api_url}auth/login`,data),
    getLogout: (config = {}) => axios.post(`${base_api_url}auth/logout`, {}, config),


    //ROL ADMIN
    getUserAll: () => axios.get(`${base_api_url}admin/user`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }),
    getUserById: (id) => axios.get(`${base_api_url}admin/user/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }),
    getUserUpdate: (data,id) => axios.put(`${base_api_url}admin/user/${id}`,data, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }),

    getCategoriaAll: () => axios.get(`${base_api_url}admin/categoria`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }),
    getCategoriaStore: (data) => axios.post(`${base_api_url}admin/categoria/`,data,{
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }),
    getCategoriaById: (id) => axios.get(`${base_api_url}admin/categoria/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }),
    getCategoriaUpdate: (data,id) => axios.put(`${base_api_url}admin/categoria/${id}`,data, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }),
    getCategoriaDeleteById: (id) => axios.delete(`${base_api_url}admin/categoria/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }),


    getEmpresaAll: () => axios.get(`${base_api_url}admin/empresa`,{
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    }),
    getEmpresaById: (id) => axios.get(`${base_api_url}admin/empresa/${id}`,{
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    }),
    getEmpresaUpdate: (data,id) => axios.put(`${base_api_url}admin/empresa/${id}`,data,{
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    }),


    //ROL CLIENTE
    getEmpresaAllClient: ()=>axios.get(`${base_api_url}client/empresa`,{
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    }),
    getEmpresaStore: (data) => axios.post(`${base_api_url}client/empresa/`,data,{
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }),
    getEmpresaByIdClient: (id) => axios.get(`${base_api_url}client/empresa/${id}`,{
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    }),
    getEmpresaUpdateClient: (data,id) => axios.put(`${base_api_url}client/empresa/${id}`,data,{
        headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
    }),


    //PUBLICO
    getEmpresas: (data) => axios.get(`${base_api_url}public/empresas/${data}`),



   
}