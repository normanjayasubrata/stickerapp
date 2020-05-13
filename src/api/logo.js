import axios from 'axios';
import { getToken } from "../utils/token";

const proxy = "https://stickersapi.herokuapp.com";
const API_URL = process.env.NODE_ENV === "production" ? proxy + "/api/v1/stickers" : "/api/v1/stickers";


export const GetLogos = () => {
    return axios.get(`${API_URL}/`, {headers: {Authorization: getToken()}})
}

export const GetLogo = (id) => {
    return axios.get(`${API_URL}/${id}`, {headers: {Authorization: getToken()}})
}

export const PostLogo = (payload) => {
    return axios.post(`${API_URL}/`, payload, {headers: {Authorization: getToken()}} )
}

export const UpdateLogo = (id, payload) => {
    return axios.put(`${API_URL}/${id}`, payload, {headers: {Authorization: getToken()}} )
}

export const DeleteLogo = (id) => {
    return axios.delete(`${API_URL}/${id}`, {headers: {Authorization: getToken()}})
}