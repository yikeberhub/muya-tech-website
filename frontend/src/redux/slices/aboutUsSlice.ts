import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { About, AboutPayload } from "../../types/aboutUsType";
import {
  getAboutApi,
  createAboutApi,
  updateAboutApi,
  deleteAboutApi,
} from "../../api/aboutUs";

interface AboutState {
  abouts: About[];
  loading: boolean;
  error: string | null;
}

const initialState: AboutState = {
  abouts: [],
  loading: false,
  error: null,
};

// Thunks
export const fetchAbouts = createAsyncThunk("about/fetchAbouts", async () => {
  return await getAboutApi();
});

export const addAbout = createAsyncThunk(
  "about/addAbout",
  async (payload: AboutPayload) => {
    return await createAboutApi(payload);
  }
);

export const editAbout = createAsyncThunk(
  "about/editAbout",
  async ({ id, payload }: { id: number; payload: AboutPayload }) => {
    return await updateAboutApi(id, payload);
  }
);

export const removeAbout = createAsyncThunk(
  "about/removeAbout",
  async (id: number) => {
    await deleteAboutApi(id);
    return id;
  }
);

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch
    builder.addCase(fetchAbouts.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchAbouts.fulfilled, (state, action: PayloadAction<About[]>) => {
      state.loading = false;
      state.abouts = action.payload;
    });
    builder.addCase(fetchAbouts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "Failed to fetch abouts";
    });

    // Add
    builder.addCase(addAbout.fulfilled, (state, action: PayloadAction<About>) => {
      state.abouts.push(action.payload);
    });

    // Edit
    builder.addCase(editAbout.fulfilled, (state, action: PayloadAction<About>) => {
      const index = state.abouts.findIndex((about) => about.id === action.payload.id);
      if (index !== -1) {
        state.abouts[index] = action.payload;
      }
    });

    // Delete
    builder.addCase(removeAbout.fulfilled, (state, action: PayloadAction<number>) => {
      state.abouts = state.abouts.filter((about) => about.id !== action.payload);
    });
  },
});

export default aboutSlice.reducer;
