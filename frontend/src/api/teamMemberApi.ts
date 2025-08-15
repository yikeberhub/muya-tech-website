import axiosInstance from "./axiosInstance";
import { TeamMember, TeamMemberPayload } from "../types/teamMemberType";

// Fetch team members
export const getTeamMembersApi = async (): Promise<TeamMember[]> => {
  const response = await axiosInstance.get("/team-members");
  return response.data;
};

// Add team member
export const createTeamMemberApi = async (
  payload: TeamMemberPayload
): Promise<TeamMember> => {
  const response = await axiosInstance.post("/team-members", payload);
  return response.data;
};

// Update team member
export const updateTeamMemberApi = async (
  id: number,
  payload: TeamMemberPayload
): Promise<TeamMember> => {
  const response = await axiosInstance.put(`/team-members/${id}`, payload);
  return response.data;
};

// Delete team member
export const deleteTeamMemberApi = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/team-members/${id}`);
};
