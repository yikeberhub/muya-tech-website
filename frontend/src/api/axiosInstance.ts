// src/api/axiosInstance.ts
import axios from 'axios';

// Get your backend API base URL from environment variables
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000/api'; // Adjust port if different

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add request interceptor for JWT token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token'); // Or get from Redux store/cookies
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;