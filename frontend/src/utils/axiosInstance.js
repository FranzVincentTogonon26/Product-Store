import axios from 'axios';
import { BASE_URL } from './apiPath';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default axiosInstance;
