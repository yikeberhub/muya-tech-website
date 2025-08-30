// api/testimonialApi.ts
import apiClient from "./apiClient";
import TestimonialsResponse, { Testimonial } from "../types/testimonialType";

// Fetch all testimonials
export const fetchTestimonialsApi = async (): Promise<TestimonialsResponse> => {
  const res = await apiClient.get<TestimonialsResponse>("/testimonials/");
  return res.data;
};

// Create new testimonial
export const createTestimonialApi = async (payload: FormData): Promise<Testimonial> => {
  const res = await apiClient.post<Testimonial>("/testimonials/", payload);
  return res.data;
};

// Update testimonial
export const updateTestimonialApi = async (id: number, payload: FormData): Promise<Testimonial> => {
  payload.append("_method", "PUT");
  const res = await apiClient.post<Testimonial>(`/testimonials/${id}/`, payload);
  return res.data;
};

// Delete testimonial
export const deleteTestimonialApi = async (id: number): Promise<number> => {
  await apiClient.delete(`/testimonials/${id}/`);
  return id;
};
