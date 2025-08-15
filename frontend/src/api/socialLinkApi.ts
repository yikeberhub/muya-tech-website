import axiosInstance from "./axiosInstance";
import { SocialLink, SocialLinkPayload } from "../types/socialLinkType";

// Fetch social links
export const getSocialLinksApi = async (): Promise<SocialLink[]> => {
  const response = await axiosInstance.get("/social-links");
  return response.data;
};

// Add social link
export const createSocialLinkApi = async (
  payload: SocialLinkPayload
): Promise<SocialLink> => {
  const response = await axiosInstance.post("/social-links", payload);
  return response.data;
};

// Update social link
export const updateSocialLinkApi = async (
  id: number,
  payload: SocialLinkPayload
): Promise<SocialLink> => {
  const response = await axiosInstance.put(`/social-links/${id}`, payload);
  return response.data;
};

// Delete social link
export const deleteSocialLinkApi = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/social-links/${id}`);
};
