import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:3001/',
    // withCredentials: true,
    // headers: {"API-KEY": "4d389a32-8ea5-4b24-aed0-dbacf4d70989"}
});