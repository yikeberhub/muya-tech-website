export interface CompanyInfo {
  id: number;
  company_name: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
  map_embed_url?: string;
  logo?: string
  created_at?: string;
  updated_at?: string;
}

export interface CompanyInfoPayload {
  company_name: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postal_code?: string;
  map_embed_url?: string;
  logo_url?: File | string;
}
