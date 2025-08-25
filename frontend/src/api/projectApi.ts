// src/api/projectsApi.ts
import {Project,ProjectResponse} from "../types/projectType"
import apiClient from "./apiClient";

// Fetch projects
export const getProjectsApi = async (): Promise<ProjectResponse> => {
  const response = await apiClient.get<ProjectResponse>("/projects");
  return response.data;
};

// Create project (supports image upload)
export const createProjectApi = async (
  payload:FormData
): Promise<Project> => {
  const response = await apiClient.post<Project>("/projects", payload);
  return response.data;
};


export const updateProjectApi = async (
  id: number,
  payload: FormData | Record<string, any>
): Promise<Project> => {
  if (payload instanceof FormData) {
    payload.append("_method", "PUT");
  }

  const response = await apiClient.post<Project>(`/projects/${id}`, payload);
  return response.data;
};



// Delete project
export const deleteProjectApi = async (id: number): Promise<void> => {
  await apiClient.delete(`/projects/${id}`);
};
