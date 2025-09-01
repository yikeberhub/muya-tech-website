export interface AuthTokens {
  access_token: string;
  refresh_token?: string;
  expires_in?: number;
}

export interface AuthUser {
  id: number;
  name: string;
  email: string;
  role: string;
  profile_image?: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  role?: string;
  phone_number?: string;
  bio?: string;
}

