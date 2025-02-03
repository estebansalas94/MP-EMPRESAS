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


   
}