import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCompanyInfoApi,
  createCompanyInfoApi,
  updateCompanyInfoApi,
  deleteCompanyInfoApi,
} from "../../api/companyInfoApi";
import { CompanyInfo } from "../../types/companyInfoType";

interface CompanyInfoState {
  companyInfos: CompanyInfo[];
  loading: boolean;
  error: string | null;
}

const initialState: CompanyInfoState = {
  companyInfos: [],
  loading: false,
  error: null,
};

// Fetch all company info
export const fetchCompanyInfo = createAsyncThunk(
  "companyInfo/fetch",
  async () => await getCompanyInfoApi()
);

// Create new company info
export const createCompanyInfo = createAsyncThunk(
  "companyInfo/add",
  async (payload: FormData) => await createCompanyInfoApi(payload)
);

// Update company info
export const updateCompanyInfo = createAsyncThunk(
  "companyInfo/edit",
  async ({ id, data }: { id: number; data: FormData }) =>
    await updateCompanyInfoApi(id, data)
);

// Delete company info
export const deleteCompanyInfo = createAsyncThunk(
  "companyInfo/remove",
  async (id: number) => {
    await deleteCompanyInfoApi(id);
    return id;
  }
);

const companyInfoSlice = createSlice({
  name: "companyInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // FETCH
    builder.addCase(fetchCompanyInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCompanyInfo.fulfilled, (state, action) => {
      state.loading = false;
      console.log('company info datas',action.payload)
      state.companyInfos = action.payload;
    });
    builder.addCase(fetchCompanyInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch company info";
    });

    // CREATE
    builder.addCase(createCompanyInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createCompanyInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.companyInfos.push(action.payload);
    });
    builder.addCase(createCompanyInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to create company info";
    });

    // UPDATE
    builder.addCase(updateCompanyInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateCompanyInfo.fulfilled, (state, action) => {
      state.loading = false;
      const index = state.companyInfos.findIndex(
        (i) => i.id === action.payload.id
      );
      if (index !== -1) state.companyInfos[index] = action.payload;
    });
    builder.addCase(updateCompanyInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to update company info";
    });

    // DELETE
    builder.addCase(deleteCompanyInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteCompanyInfo.fulfilled, (state, action) => {
      state.loading = false;
      state.companyInfos = state.companyInfos.filter(
        (i) => i.id !== action.payload
      );
    });
    builder.addCase(deleteCompanyInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to delete company info";
    });
  },
});

export default companyInfoSlice.reducer;
