// src/api/authApi.ts
import axiosInstance from './axiosInstance'; // We'll create this next
import { LoginPayload, LoginResponse, UserData } from './types'; // Define these types

export const loginUser = async (email: string, password: string): Promise<LoginResponse> => {
  const payload: LoginPayload = { email, password };
  const response = await axiosInstance.post('/auth/login', payload);
  return response.data;
};

// Add registerUser, etc. here later