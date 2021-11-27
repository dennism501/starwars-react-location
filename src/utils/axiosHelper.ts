import axios from 'axios';

//move the baseUrl to a .env file and use a config for best practices 
export const axiosInstance = axios.create({
    baseURL: 'https://swapi.dev/api/'
})

/**
 * This file can be used to add request and response interceptors in future.
 */
