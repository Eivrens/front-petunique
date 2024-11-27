import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:4444',
  timeout: 30000,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export default api;
