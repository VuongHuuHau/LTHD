import axios from "axios";
const BASE_URL='http://192.168.1.5:8000';
export const endpoints={
    'appointments' :'/appointments/',
    'register':'/patients/',
    'login': '/o/token/',
    'current-user': '/patients/',

    'medicine':'medicines'
}    
export const authAPI = (token) => {
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}

export default axios.create({
    baseURL : BASE_URL
})
export const API_URL = 'http://192.168.1.5:8000';
