// src/redux/slices/socialLinkSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  getSocialLinksApi,
  createSocialLinkApi,
  updateSocialLinkApi,
  deleteSocialLinkApi,
} from "../../api/socialLinkApi";
import { SocialLink, SocialLinkPayload } from "../../types/socialLinkType";

interface SocialLinkState {
  data: SocialLink[];
  loading: boolean;
  error: string | null;
}

const initialState: SocialLinkState = {
  data: [],
  loading: false,
  error: null,
};

// Fetch all social links
export const fetchSocialLinks = createAsyncThunk(
  "socialLinks/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      return await getSocialLinksApi();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Add social link
export const addSocialLink = createAsyncThunk(
  "socialLinks/add",
  async (payload: SocialLinkPayload, { rejectWithValue }) => {
    try {
      return await createSocialLinkApi(payload);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Update social link
export const editSocialLink = createAsyncThunk(
  "socialLinks/edit",
  async ({ id, payload }: { id: number; payload: SocialLinkPayload }, { rejectWithValue }) => {
    try {
      return await updateSocialLinkApi(id, payload);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Delete social link
export const removeSocialLink = createAsyncThunk(
  "socialLinks/remove",
  async (id: number, { rejectWithValue }) => {
    try {
      await deleteSocialLinkApi(id);
      return id;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const socialLinkSlice = createSlice({
  name: "socialLinks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchSocialLinks.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSocialLinks.fulfilled, (state, action: PayloadAction<SocialLink[]>) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchSocialLinks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Add
      .addCase(addSocialLink.fulfilled, (state, action: PayloadAction<SocialLink>) => {
        state.data.push(action.payload);
      })
      // Edit
      .addCase(editSocialLink.fulfilled, (state, action: PayloadAction<SocialLink>) => {
        const index = state.data.findIndex((sl) => sl.id === action.payload.id);
        if (index !== -1) state.data[index] = action.payload;
      })
      // Remove
      .addCase(removeSocialLink.fulfilled, (state, action: PayloadAction<number>) => {
        state.data = state.data.filter((sl) => sl.id !== action.payload);
      });
  },
});

export default socialLinkSlice.reducer;
