import axiosInstance from "./axiosInstance";
import { User, UserPayload } from "../types/userType";

// Fetch all users
export const getUsersApi = async (): Promise<User[]> => {
  const response = await axiosInstance.get<User[]>("/users");
  return response.data;
};

// Fetch a single user by ID
export const getUserApi = async (id: number): Promise<User> => {
  const response = await axiosInstance.get<User>(`/users/${id}`);
  return response.data;
};

// Create a new user
export const createUserApi = async (user: UserPayload): Promise<User> => {
  const response = await axiosInstance.post<User>("/users", user);
  return response.data;
};

// Update a user by ID
export const updateUserApi = async (id: number, user: Partial<UserPayload>): Promise<User> => {
  const response = await axiosInstance.put<User>(`/users/${id}`, user);
  return response.data;
};

// Delete a user by ID
export const deleteUserApi = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/users/${id}`);
};
