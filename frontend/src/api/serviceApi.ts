// src/api/servicesApi.ts
import axiosInstance from "./apiClient";
import { Service, ServicePayload, ServiceResponse } from "../types/serviceType";
import apiClient from "./apiClient";

// Fetch services
export const getServicesApi = async (): Promise<ServiceResponse> => {
  const response = await axiosInstance.get(`/services`);
  return response.data;
};

// Create service
export const createServiceApi = async (
  payload: FormData
): Promise<Service> => {
  const response = await apiClient.post(`/services`, payload);
  return response.data;
};

// Update service
export const updateServiceApi = async (
  id: number,
  payload: FormData | Record<string, any>
): Promise<Service> => {
  if (payload instanceof FormData) {
    payload.append("_method", "PUT");
  }

  const response = await apiClient.post<Service>(`/services/${id}`, payload);
  return response.data;
};


// Delete service
export const deleteServiceApi = async (id: number): Promise<void> => {
  await apiClient.delete(`/services/${id}`);
};
