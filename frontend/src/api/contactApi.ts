// api/contactApi.ts
import apiClient from "./apiClient";
import { Contact, ContactsResponse } from "../types/contactType";

// Fetch all contacts
export const fetchContactsApi = async (): Promise<ContactsResponse> => {
  const res = await apiClient.get<ContactsResponse>("/contacts/");
  return res.data;
};

// Create a new contact
export const createContactApi = async (payload: FormData): Promise<Contact> => {
  const res = await apiClient.post<Contact>("/contacts/", payload);
  return res.data;
};

// Update contact
export const updateContactApi = async (id: number, payload: FormData): Promise<Contact> => {
  payload.append("_method", "PUT"); 
  const res = await apiClient.post<Contact>(`/contacts/${id}/`, payload);
  return res.data;
};

// Delete contact
export const deleteContactApi = async (id: number): Promise<number> => {
  await apiClient.delete(`/contacts/${id}/`);
  return id;
};
