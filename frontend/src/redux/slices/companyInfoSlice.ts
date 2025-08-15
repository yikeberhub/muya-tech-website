import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCompanyInfoApi,
  createCompanyInfoApi,
  updateCompanyInfoApi,
  deleteCompanyInfoApi,
} from "../../api/companyInfoApi";
import { CompanyInfo, CompanyInfoPayload } from "../../types/companyInfoType";

interface CompanyInfoState {
  items: CompanyInfo[];
  loading: boolean;
  error: string | null;
}

const initialState: CompanyInfoState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchCompanyInfo = createAsyncThunk(
  "companyInfo/fetch",
  async () => {
    return await getCompanyInfoApi();
  }
);

export const addCompanyInfo = createAsyncThunk(
  "companyInfo/add",
  async (payload: CompanyInfoPayload) => {
    return await createCompanyInfoApi(payload);
  }
);

export const editCompanyInfo = createAsyncThunk(
  "companyInfo/edit",
  async ({ id, payload }: { id: number; payload: CompanyInfoPayload }) => {
    return await updateCompanyInfoApi(id, payload);
  }
);

export const removeCompanyInfo = createAsyncThunk(
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
    builder
      .addCase(fetchCompanyInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCompanyInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchCompanyInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to load company info";
      })
      .addCase(addCompanyInfo.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(editCompanyInfo.fulfilled, (state, action) => {
        const index = state.items.findIndex((i) => i.id === action.payload.id);
        if (index !== -1) state.items[index] = action.payload;
      })
      .addCase(removeCompanyInfo.fulfilled, (state, action) => {
        state.items = state.items.filter((i) => i.id !== action.payload);
      });
  },
});

export default companyInfoSlice.reducer;
