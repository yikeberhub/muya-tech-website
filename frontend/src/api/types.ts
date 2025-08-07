// src/api/types.ts

export interface UserData {
    id: string;
    email: string;
    name: string;
    role: 'member' | 'admin';
  }
  
  export interface LoginPayload {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    message: string;
    token: string;
    user: UserData;
  }
  
  export interface ApiError {
    message: string;
    errors?: { [key: string]: string } | string[]; // For validation errors
  }