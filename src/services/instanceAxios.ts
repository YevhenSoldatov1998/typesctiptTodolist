import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://polar-reef-56571.herokuapp.com/',
    // withCredentials: true,
    headers: {"API-KEY": "823dbb88-e6c3-4f90-84dd-f55746d26e7b"}
});