import axios from 'axios';

const API_BASE_URL = '/wordpress/ecalculator/api/api.php';
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
  },
});

export const get = async (url:string, config = {}) => {
  try {
    const response = await api.get(url, config);
    return response.data;
  } catch (error:any) {
    throw new Error(error.response.data.message);
  }
};

export const post = async (url:string, data = {}, config = {}) => {
  try {
    const response = await api.post(url, data, config);
    return response.data;
  } catch (error:any) {
    throw new Error(error.response.data.message);
  }
};

export const put = async (url:string, data = {}, config = {}) => {
  try {
    const response = await api.put(url, data, config);
    return response.data;
  } catch (error:any) {
    throw new Error(error.response.data.message);
  }
};

export const patch = async (url:string, data = {}, config = {}) => {
  try {
    const response = await api.patch(url, data, config);
    return response.data;
  } catch (error:any) {
    throw new Error(error.response.data.message);
  }
};

export const del = async (url:string, config = {}) => {
  try {
    const response = await api.delete(url, config);
    return response.data;
  } catch (error:any) {
    throw new Error(error.response.data.message);
  }
};
