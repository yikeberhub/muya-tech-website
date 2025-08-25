import axiosInstance from "./apiClient";
import { Testimonial, TestimonialPayload } from "../types/testimonialType";

// Fetch all testimonials
export const getTestimonialsApi = async (): Promise<Testimonial[]> => {
  const response = await axiosInstance.get<Testimonial[]>("/testimonials");
  return response.data;
};

// Fetch single testimonial
export const getTestimonialApi = async (id: number): Promise<Testimonial> => {
  const response = await axiosInstance.get<Testimonial>(`/testimonials/${id}`);
  return response.data;
};

// Create testimonial
export const createTestimonialApi = async (data: TestimonialPayload): Promise<Testimonial> => {
  const response = await axiosInstance.post<Testimonial>("/testimonials", data);
  return response.data;
};

// Update testimonial
export const updateTestimonialApi = async (id: number, data: Partial<TestimonialPayload>): Promise<Testimonial> => {
  const response = await axiosInstance.put<Testimonial>(`/testimonials/${id}`, data);
  return response.data;
};

// Delete testimonial
export const deleteTestimonialApi = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/testimonials/${id}`);
};
