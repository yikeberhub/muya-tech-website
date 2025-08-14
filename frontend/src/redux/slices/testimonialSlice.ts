import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Testimonial, TestimonialPayload } from "../../types/testimonialType";
import { getTestimonialsApi, getTestimonialApi, createTestimonialApi, updateTestimonialApi, deleteTestimonialApi } from "../../api/testimonialApi";

interface TestimonialState {
  testimonials: Testimonial[];
  testimonial: Testimonial | null;
  loading: boolean;
  error: string | null;
}

const initialState: TestimonialState = {
  testimonials: [],
  testimonial: null,
  loading: false,
  error: null,
};

export const fetchTestimonials = createAsyncThunk<Testimonial[]>(
  "testimonials/fetchTestimonials",
  async () => await getTestimonialsApi()
);

export const fetchTestimonial = createAsyncThunk<Testimonial, number>(
  "testimonials/fetchTestimonial",
  async (id) => await getTestimonialApi(id)
);

export const addTestimonial = createAsyncThunk<Testimonial, TestimonialPayload>(
  "testimonials/addTestimonial",
  async (data) => await createTestimonialApi(data)
);

export const updateTestimonial = createAsyncThunk<Testimonial, { id: number; data: Partial<TestimonialPayload> }>(
  "testimonials/updateTestimonial",
  async ({ id, data }) => await updateTestimonialApi(id, data)
);

export const deleteTestimonial = createAsyncThunk<number, number>(
  "testimonials/deleteTestimonial",
  async (id) => {
    await deleteTestimonialApi(id);
    return id;
  }
);

const testimonialSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch all
      .addCase(fetchTestimonials.pending, (state) => { state.loading = true; })
      .addCase(fetchTestimonials.fulfilled, (state, action: PayloadAction<Testimonial[]>) => {
        state.loading = false;
        state.testimonials = action.payload;
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch testimonials";
      })
      // fetch single
      .addCase(fetchTestimonial.pending, (state) => { state.loading = true; })
      .addCase(fetchTestimonial.fulfilled, (state, action: PayloadAction<Testimonial>) => {
        state.loading = false;
        state.testimonial = action.payload;
      })
      .addCase(fetchTestimonial.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch testimonial";
      })
      // add
      .addCase(addTestimonial.pending, (state) => { state.loading = true; })
      .addCase(addTestimonial.fulfilled, (state, action: PayloadAction<Testimonial>) => {
        state.loading = false;
        state.testimonials.push(action.payload);
      })
      .addCase(addTestimonial.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to add testimonial";
      })
      // update
      .addCase(updateTestimonial.pending, (state) => { state.loading = true; })
      .addCase(updateTestimonial.fulfilled, (state, action: PayloadAction<Testimonial>) => {
        state.loading = false;
        state.testimonials = state.testimonials.map(t => t.id === action.payload.id ? action.payload : t);
        if (state.testimonial?.id === action.payload.id) state.testimonial = action.payload;
      })
      .addCase(updateTestimonial.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update testimonial";
      })
      // delete
      .addCase(deleteTestimonial.pending, (state) => { state.loading = true; })
      .addCase(deleteTestimonial.fulfilled, (state, action: PayloadAction<number>) => {
        state.loading = false;
        state.testimonials = state.testimonials.filter(t => t.id !== action.payload);
        if (state.testimonial?.id === action.payload) state.testimonial = null;
      })
      .addCase(deleteTestimonial.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to delete testimonial";
      });
  },
});

export default testimonialSlice.reducer;
