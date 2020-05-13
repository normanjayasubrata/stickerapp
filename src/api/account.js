import axios from 'axios';
import { getToken } from "../utils/token";
const proxy = "https://stickersapi.herokuapp.com";
const API_URL = process.env.NODE_ENV === "production" ? proxy + "/api/v1/accounts" : "/api/v1/accounts";

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