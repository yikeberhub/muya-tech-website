// src/redux/slices/teamMemberSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  getTeamMembersApi,
  createTeamMemberApi,
  updateTeamMemberApi,
  deleteTeamMemberApi,
} from "../../api/teamMemberApi";
import { TeamMember, TeamMemberPayload } from "../../types/teamMemberType";

interface TeamMemberState {
  data: TeamMember[];
  loading: boolean;
  error: string | null;
}

const initialState: TeamMemberState = {
  data: [],
  loading: false,
  error: null,
};

// Fetch all team members
export const fetchTeamMembers = createAsyncThunk(
  "teamMembers/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      return await getTeamMembersApi();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Add a team member
export const addTeamMember = createAsyncThunk(
  "teamMembers/add",
  async (payload: TeamMemberPayload, { rejectWithValue }) => {
    try {
      return await createTeamMemberApi(payload);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Update a team member
export const editTeamMember = createAsyncThunk(
  "teamMembers/edit",
  async ({ id, payload }: { id: number; payload: TeamMemberPayload }, { rejectWithValue }) => {
    try {
      return await updateTeamMemberApi(id, payload);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

// Delete a team member
export const removeTeamMember = createAsyncThunk(
  "teamMembers/remove",
  async (id: number, { rejectWithValue }) => {
    try {
      await deleteTeamMemberApi(id);
      return id;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const teamMemberSlice = createSlice({
  name: "teamMembers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchTeamMembers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTeamMembers.fulfilled, (state, action: PayloadAction<TeamMember[]>) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchTeamMembers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Add
      .addCase(addTeamMember.fulfilled, (state, action: PayloadAction<TeamMember>) => {
        state.data.push(action.payload);
      })
      // Edit
      .addCase(editTeamMember.fulfilled, (state, action: PayloadAction<TeamMember>) => {
        const index = state.data.findIndex((tm) => tm.id === action.payload.id);
        if (index !== -1) state.data[index] = action.payload;
      })
      // Remove
      .addCase(removeTeamMember.fulfilled, (state, action: PayloadAction<number>) => {
        state.data = state.data.filter((tm) => tm.id !== action.payload);
      });
  },
});

export default teamMemberSlice.reducer;
