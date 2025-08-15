// src/api/authApi.ts
import axiosInstance from './axiosInstance';
import { LoginPayload, LoginResponse, RegisterPayload } from '../types/authType';

// Login API
export const loginUserApi = async (payload: LoginPayload): Promise<LoginResponse> => {
  const response = await axiosInstance.post('/auth/login', payload);
  return response.data;
};

// Register API
export const registerUserApi = async (payload: RegisterPayload): Promise<LoginResponse> => {
  const response = await axiosInstance.post('/auth/register', payload);
  return response.data;
};
