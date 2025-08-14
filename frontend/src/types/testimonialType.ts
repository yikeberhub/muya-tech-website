export interface Testimonial {
    id: number;
    name: string;
    position: string;
    message: string;
    image_url?: string;
    rating?: number;
    created_at?: string;
    updated_at?: string;
  }
  
  // Payload for creating or updating a testimonial
  export interface TestimonialPayload {
    name: string;
    position: string;
    message: string;
    image_url?: string;
    rating?: number;
  }
  