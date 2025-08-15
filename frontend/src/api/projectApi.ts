// src/api/projectsApi.ts
import axiosInstance from "./axiosInstance";
import { Project, ProjectPayload } from "../types/projectType";

// Fetch projects
export const getProjectsApi = async (): Promise<Project[]> => {
  const response = await axiosInstance.get<Project[]>("/projects");
  return response.data;
};

// Create project (supports image upload)
export const createProjectApi = async (
  payload: ProjectPayload | FormData
): Promise<Project> => {
  const data = payload instanceof FormData ? payload : JSON.stringify(payload);
  const response = await axiosInstance.post<Project>("/projects", data);
  return response.data;
};

// Update project (supports image upload)
export const updateProjectApi = async (
  id: number,
  payload: ProjectPayload | FormData
): Promise<Project> => {
  const data = payload instanceof FormData ? payload : JSON.stringify(payload);
  const response = await axiosInstance.put<Project>(`/projects/${id}`, data);
  return response.data;
};

// Delete project
export const deleteProjectApi = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/projects/${id}`);
};
