import apiClient from "./apiClient";
import { User, UserPayload, UsersResponse } from "../types/userType";

// Fetch all users
export const getUsersApi = async (): Promise<UsersResponse> => {
  const response = await apiClient.get<UsersResponse>("/users");
  console.log('users data',response.data);
  return response.data;
};

// Fetch a single user by ID
export const getUserApi = async (id: number): Promise<User> => {
  const response = await apiClient.get<User>(`/users/${id}`);
  return response.data;
};

// Create a new user
export const createUserApi = async (user: FormData): Promise<User> => {
  const response = await apiClient.post<User>("/users", user);
  return response.data;
};

// Update a user by ID
export const updateUserApi = async (
  id: number,
  payload: FormData | Record<string, any>
): Promise<User> => {
  if (payload instanceof FormData) {
    payload.append("_method", "PUT");
  }

  const response = await apiClient.post<User>(`/users/${id}`, payload);
  return response.data;
};


// Delete a user by ID
export const deleteUserApi = async (id: number): Promise<void> => {
  await apiClient.delete(`/users/${id}`);
};
