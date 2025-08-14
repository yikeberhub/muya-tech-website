export interface User {
    id: number;
    name: string;
    email: string;
    profile_image?: string;
    role: string;
    phone_number?: string;
    bio?: string;
    created_at?: string;
    updated_at?: string;
  }
  
  // Optional: For create/update payloads
  export interface UserPayload {
    name: string;
    email: string;
    password?: string;
    profile_image?: string;
    role: string;
    phone_number?: string;
    bio?: string;
  }
  