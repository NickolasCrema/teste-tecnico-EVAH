import axios from 'axios';

export const MyApi = axios.create({
    baseURL: 'http://localhost:3001/',
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
    }
})
