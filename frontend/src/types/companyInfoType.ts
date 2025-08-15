export interface CompanyInfo {
    id: number;
    name: string;
    address: string;
    phone: string;
    email: string;
    description?: string;
    created_at?: string;
    updated_at?: string;
  }
  
  export interface CompanyInfoPayload {
    name: string;
    address: string;
    phone: string;
    email: string;
    description?: string;
  }
  