// types/testimonialType.ts
export interface Testimonial {
  id: number;
  name: string;
  position?: string;
  company?: string;
  message: string;
  rating: number;
  image_url?: string;
  created_at?: string;
  updated_at?: string;
}

export default interface TestimonialsResponse{
    testimonials: Testimonial[]
    message?: string

}