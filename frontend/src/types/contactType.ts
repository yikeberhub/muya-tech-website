// types/contactType.ts
export interface Contact {
    id: number;
    name: string;
    email: string;
    subject?:string;
    phone_number?: string;
    message?: string;
    is_read?: boolean;
    created_at?: string;
    updated_at?: string;
  }
  

export interface ContactsResponse{
    contacts:Contact[],
    message?:string
}