// src/api/servicesApi.ts
import axiosInstance from "./axiosInstance";
import { Service, ServicePayload } from "../types/serviceType";

// Fetch services
export const getServicesApi = async (): Promise<Service[]> => {
  const response = await axiosInstance.get(`/services`);
  return response.data;
};

// Create service
export const createServiceApi = async (
  payload: ServicePayload
): Promise<Service> => {
  const response = await axiosInstance.post(`/services`, payload);
  return response.data;
};

// Update service
export const updateServiceApi = async (
  id: number,
  payload: ServicePayload
): Promise<Service> => {
  const response = await axiosInstance.put(`/services/${id}`, payload);
  return response.data;
};

// Delete service
export const deleteServiceApi = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/services/${id}`);
};
