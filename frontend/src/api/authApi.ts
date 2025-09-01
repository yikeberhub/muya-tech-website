import axiosInstance from './apiClient';
import { LoginPayload, RegisterPayload } from '../types/authType';
import { User } from "../types/userType";

// Fetch logged-in user
export const fetchLoggedInUserApi = async (): Promise<User> => {
  const response = await axiosInstance.get('/user/profile');
  return response.data.data; // because Laravel resource wraps in { data: { ... } }
};

// Login API
export const loginUserApi = async (payload: LoginPayload): Promise<any> => {
  const response = await axiosInstance.post('/auth/login', payload);
  return response.data;
};

// Register API
export const registerUserApi = async (payload: RegisterPayload): Promise<any> => {
  const response = await axiosInstance.post('/auth/register', payload);
  return response.data;
};
