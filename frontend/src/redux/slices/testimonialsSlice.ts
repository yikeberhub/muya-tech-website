// redux/slices/testimonialSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Testimonial } from "../../types/testimonialType";
import {
  fetchTestimonialsApi,
  createTestimonialApi,
  updateTestimonialApi,
  deleteTestimonialApi,
} from "../../api/testimonialApi";

interface TestimonialState {
  testimonials: Testimonial[];
  loading: boolean;
  error: string | null;
}

const initialState: TestimonialState = {
  testimonials: [],
  loading: false,
  error: null,
};

// Async thunks
export const fetchTestimonials = createAsyncThunk("testimonials/fetch", async () => {
  return await fetchTestimonialsApi();
});

export const addTestimonial = createAsyncThunk("testimonials/add", async (data: FormData) => {
  return await createTestimonialApi(data);
});

export const editTestimonial = createAsyncThunk(
  "testimonials/edit",
  async ({ id, payload }: { id: number; payload: FormData }) => {
    return await updateTestimonialApi(id, payload);
  }
);

export const removeTestimonial = createAsyncThunk("testimonials/delete", async (id: number) => {
  return await deleteTestimonialApi(id);
});

// Slice
const testimonialSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchTestimonials.pending, (state) => { state.loading = true; })
      .addCase(fetchTestimonials.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonials = action.payload.testimonials;
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch testimonials";
      })

      // Add
      .addCase(addTestimonial.pending, (state) => { state.loading = true; })
      .addCase(addTestimonial.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonials.push(action.payload);
      })
      .addCase(addTestimonial.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to add testimonial";
      })

      // Edit
      .addCase(editTestimonial.pending, (state) => { state.loading = true; })
      .addCase(editTestimonial.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonials = state.testimonials.map(t => t.id === action.payload.id ? action.payload : t);
      })
      .addCase(editTestimonial.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update testimonial";
      })

      // Delete
      .addCase(removeTestimonial.pending, (state) => { state.loading = true; })
      .addCase(removeTestimonial.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonials = state.testimonials.filter(t => t.id !== action.payload);
      })
      .addCase(removeTestimonial.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to delete testimonial";
      });
  },
});

export default testimonialSlice.reducer;
