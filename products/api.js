import axios from 'axios';

const API_URL = 'http://localhost:5000'; // Change to your backend server URL

export const getProducts = (params) => {
    return axios.get(`${API_URL}/products`, { params });
};

export const getProductById = (id) => {
    return axios.get(`${API_URL}/products/${id}`);
};
