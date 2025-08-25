// src/redux/slices/servicesSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  getServicesApi,
  createServiceApi,
  updateServiceApi,
  deleteServiceApi,
} from "../../api/serviceApi";
import { Service, ServiceResponse } from "../../types/serviceType";

interface ServicesState {
  services: Service[];
  loading: boolean;
  error: string | null;
}

const initialState: ServicesState = {
  services: [],
  loading: false,
  error: null,
};

// Thunks
export const fetchServices = createAsyncThunk("services/fetch", async () => {
  return await getServicesApi();
});

export const addService = createAsyncThunk(
  "services/add",
  async (payload: FormData) => {
    return await createServiceApi(payload);
  }
);

export const editService = createAsyncThunk(
  "services/edit",
  async ({ id, payload }: { id: number; payload: FormData }) => {
    return await updateServiceApi(id, payload);
  }
);

export const removeService = createAsyncThunk(
  "services/remove",
  async (id: number) => {
    await deleteServiceApi(id);
    return id;
  }
);

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
        console.log("service fetch is pending");
        state.error = null;
      })
      .addCase(
        fetchServices.fulfilled,
        (state, action: PayloadAction<ServiceResponse>) => {
          state.loading = false;
          state.services = action.payload.services;
          console.log("service fetch is fulfilled", action.payload);
        }
      )
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch services";
      })

      // Add
      .addCase(addService.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("service add is pending");
      })
      .addCase(
        addService.fulfilled,
        (state, action: PayloadAction<Service>) => {
          state.services.push(action.payload);
          console.log("service is added");
        }
      )
      .addCase(addService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to add service";
        console.log("failed to add service", state.error);
      })

      // Edit
      .addCase(
        editService.fulfilled,
        (state, action: PayloadAction<Service>) => {
          const index = state.services.findIndex(
            (service) => service.id === action.payload.id
          );
          if (index !== -1) {
            state.services[index] = action.payload;
          }
        }
      )

      // Remove
      .addCase(
        removeService.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.services = state.services.filter(
            (service) => service.id !== action.payload
          );
        }
      );
  },
});

export default servicesSlice.reducer;
