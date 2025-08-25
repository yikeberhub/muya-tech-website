// src/api/apiClient.ts
import axios from "axios";
import type { InternalAxiosRequestConfig } from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

apiClient.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const token = localStorage.getItem("token");

    if (!config.headers) {
      config.headers = {} as InternalAxiosRequestConfig["headers"];
    }

    // Attach token if exists
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"]; // let axios set correct boundary
      console.log("➡ Sending FormData request");
      for (const [key, value] of config.data.entries()) {
        console.log(`${key}:`, value);
      }
    } else if (config.data) {
      config.headers["Content-Type"] = "application/json";
      console.log("➡ Sending JSON request", config.data);
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default apiClient;
