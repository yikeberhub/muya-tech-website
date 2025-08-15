import axiosInstance from "./axiosInstance";
import { About, AboutPayload } from "../types/aboutUsType";

// Fetch about sections
export const getAboutApi = async (): Promise<About[]> => {
  const response = await axiosInstance.get(`/about`);
  return response.data;
};

// Add about section
export const createAboutApi = async (payload: AboutPayload): Promise<About> => {
  const response = await axiosInstance.post(`/about`, payload);
  return response.data;
};

// Update about section
export const updateAboutApi = async (
  id: number,
  payload: AboutPayload
): Promise<About> => {
  const response = await axiosInstance.put(`/about/${id}`, payload);
  return response.data;
};

// Delete about section
export const deleteAboutApi = async (id: number): Promise<{ message: string }> => {
  const response = await axiosInstance.delete(`/about/${id}`);
  return response.data;
};
