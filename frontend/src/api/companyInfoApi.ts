import apiClient from "./apiClient";
import { CompanyInfo, CompanyInfoPayload } from "../types/companyInfoType";

// Fetch company info
export const getCompanyInfoApi = async (): Promise<CompanyInfo> => {
  const response = await apiClient.get("/company-info");
  return response.data.data;
};

// Add company info
export const createCompanyInfoApi = async (
  payload: FormData
): Promise<CompanyInfo> => {
  const response = await apiClient.post("/company-info", payload);
  return response.data;
};

// Update company info
export const updateCompanyInfoApi = async (
  id: number,
  payload: FormData
): Promise<CompanyInfo> => {
  if (payload instanceof FormData){
    payload.append("_method", "PUT");
    console.log('payload is form data')
  }
  for (let pair of payload.entries()) {
    console.log('yike',pair[0], pair[1]);
  }
  

  const response = await apiClient.post(`/company-info/${id}`, payload);
  return response.data;
};

// Delete company info
export const deleteCompanyInfoApi = async (id: number): Promise<void> => {
  await apiClient.delete(`/company-info/${id}`);
};
