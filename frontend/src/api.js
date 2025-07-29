// Using an interceptor to distrupt the HTTPS call to handle the access token automatically 

import axios from "axios"
import {ACCESS_TOKEN} from "./constants"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use(
    (config) => {
        // Take the access token 
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },

// Catches any type of error that has happened before reaching the api 
    (error) => {
        return Promise.reject(error)
    }
)


export default api