// src/api/types.ts

// For user data that comes back from API
export interface UserData {
    id: string;
    email: string;
    name: string;
    role: 'member' | 'admin'; // Based on your backend User model
  }
  
  // For login request payload
  export interface LoginPayload {
    email: string;
    password: string;
  }
  
  // For login API response
  export interface LoginResponse {
    message: string;
    token: string;
    user: UserData;
  }
  
  // General API error structure (optional, but good for consistent error handling)
  export interface ApiError {
    message: string;
    errors?: { [key: string]: string } | string[]; // For validation errors
  }