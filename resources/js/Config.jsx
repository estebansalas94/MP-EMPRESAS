import axios from "axios";

const base_api_url = 'http://localhost:8000/api/v1/';


export default {
    //AUTH
    getRegister:(data)=>axios.post(`${base_api_url}auth/register`,data),
    getLogin:(data)=>axios.post(`${base_api_url}auth/login`,data),
    getLogout: (config = {}) => axios.post(`${base_api_url}auth/logout`, {}, config),
}