import apiClient from "./apiClient";
import { TeamMember, TeamMemberPayload } from "../types/teamMemberType";

// Fetch team members
export const getTeamMembersApi = async (): Promise<TeamMember[]> => {
  const response = await apiClient.get("/team-members");
  console.log('response teams data',response.data);

  return response.data;
};

// Add team member
export const createTeamMemberApi = async (
  payload: FormData
): Promise<TeamMember> => {
  const response = await apiClient.post("/team-members", payload);
  console.log('response teams data',response.data);
  return response.data;
};

// Update team member
export const updateTeamMemberApi = async (
  id: number,
  payload: FormData
): Promise<TeamMember> => {
  if (payload instanceof FormData) {
    payload.append("_method", "PUT");
  }
  const response = await apiClient.post(`/team-members/${id}`, payload);
  return response.data;
};

// Delete team member
export const deleteTeamMemberApi = async (id: number): Promise<void> => {
  await apiClient.delete(`/team-members/${id}`);
};
