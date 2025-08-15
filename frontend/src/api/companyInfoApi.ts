import axiosInstance from "./axiosInstance";
import { CompanyInfo, CompanyInfoPayload } from "../types/companyInfoType";

// Fetch company info
export const getCompanyInfoApi = async (): Promise<CompanyInfo[]> => {
  const response = await axiosInstance.get("/company-info");
  return response.data;
};

// Add company info
export const createCompanyInfoApi = async (
  payload: CompanyInfoPayload
): Promise<CompanyInfo> => {
  const response = await axiosInstance.post("/company-info", payload);
  return response.data;
};

// Update company info
export const updateCompanyInfoApi = async (
  id: number,
  payload: CompanyInfoPayload
): Promise<CompanyInfo> => {
  const response = await axiosInstance.put(`/company-info/${id}`, payload);
  return response.data;
};

// Delete company info
export const deleteCompanyInfoApi = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/company-info/${id}`);
};
