// types/authTypes.ts

export interface User {
    id: string;
    name: string;
    email: string;
    profile_image:string;
    role?: string; 
  }
  
  export interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
  }
  

// Login request payload
export interface LoginPayload {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    token: string;
    user: User;
  }
  
  export interface RegisterPayload {
    name: string;
    email: string;
    role:string;
    password: string;
    confirmPassword: string;
  }
  
  export interface RegisterResponse {
    message: string;
    user: User;
  }
  

  