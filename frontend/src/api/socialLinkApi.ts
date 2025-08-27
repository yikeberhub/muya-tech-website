import apiClient from "./apiClient";
import { SocialLink, SocialLinkPayload } from "../types/socialLinkType";

// Fetch social links
export const getSocialLinksApi = async (): Promise<SocialLink[]> => {
  const response = await apiClient.get("/social-links");
  return response.data.data;
};

// Add social link
export const createSocialLinkApi = async (
  payload: FormData
): Promise<SocialLink> => {
  const response = await apiClient.post("/social-links", payload);
  return response.data;
};

// Update social link
export const updateSocialLinkApi = async (
  id: number,
  payload: FormData
): Promise<SocialLink> => {
  if (payload instanceof FormData) {
    payload.append("_method", "PUT");
  }
  const response = await apiClient.post(`/social-links/${id}`, payload);
  return response.data;
};

// Delete social link
export const deleteSocialLinkApi = async (id: number): Promise<void> => {
  await apiClient.delete(`/social-links/${id}`);
};
