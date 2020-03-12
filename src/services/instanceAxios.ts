import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://polar-reef-56571.herokuapp.com/',
    withCredentials: true,
    // headers: {"API-KEY": "4d389a32-8ea5-4b24-aed0-dbacf4d70989"}
});