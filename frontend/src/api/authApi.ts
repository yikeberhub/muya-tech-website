// src/api/authApi.ts
import axiosInstance from './axiosInstance';
import { LoginPayload, LoginResponse, UserData } from './types'; 

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  const payload: LoginPayload = { email, password };
  const response = await axiosInstance.post('/auth/login', payload);
  return response.data;
};

export const registerUser = async (email: string, password: string, name: string): Promise<LoginResponse> => {
  const payload = { email, password, name };
  const response = await axiosInstance.post('/auth/register', payload);
  return response.data;
};