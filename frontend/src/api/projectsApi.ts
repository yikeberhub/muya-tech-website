
// src/api/projectsApi.ts
import axiosInstance from "./axiosInstance";
import { Project, ProjectPayload } from "../types/projectType";

// Fetch projects
export const getProjectsApi = async (): Promise<Project[]> => {
  const response = await axiosInstance.get(`/projects`);
  return response.data;
};

// Create project
export const createProjectApi = async (
  payload: ProjectPayload
): Promise<Project> => {
  const response = await axiosInstance.post(`/projects`, payload);
  return response.data;
};

// Update project
export const updateProjectApi = async (
  id: number,
  payload: ProjectPayload
): Promise<Project> => {
  const response = await axiosInstance.put(`/projects/${id}`, payload);
  return response.data;
};

// Delete project
export const deleteProjectApi = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/projects/${id}`);
};
