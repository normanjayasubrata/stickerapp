import axios from 'axios';
import { getToken } from "../utils/token";
const API_URL = "/api/v1/accounts";

export const getAccount = () => {
    return axios.get(`${API_URL}/`)
}

export const FetchAccount = () => {
    return axios.get(`${API_URL}/getprofile`, {headers: {Authorization: getToken()}})
}

export const AccountLogin = (payload) => {
    return axios.post(`${API_URL}/login`, payload)
}

export const AccountRegister = (payload) => {
    return axios.post(`${API_URL}/register`, payload)
}