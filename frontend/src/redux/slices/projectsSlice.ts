// src/redux/slices/projectsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  getProjectsApi,
  createProjectApi,
  updateProjectApi,
  deleteProjectApi,
} from "../../api/projectsApi";
import { Project, ProjectPayload } from "../../types/projectType";

interface ProjectsState {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

const initialState: ProjectsState = {
  projects: [],
  loading: false,
  error: null,
};

// Thunks
export const fetchProjects = createAsyncThunk("projects/fetch", async () => {
  return await getProjectsApi();
});

export const addProject = createAsyncThunk(
  "projects/add",
  async (payload: ProjectPayload) => {
    return await createProjectApi(payload);
  }
);

export const editProject = createAsyncThunk(
  "projects/edit",
  async ({ id, payload }: { id: number; payload: ProjectPayload }) => {
    return await updateProjectApi(id, payload);
  }
);

export const removeProject = createAsyncThunk(
  "projects/remove",
  async (id: number) => {
    await deleteProjectApi(id);
    return id;
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchProjects.fulfilled,
        (state, action: PayloadAction<Project[]>) => {
          state.loading = false;
          state.projects = action.payload;
        }
      )
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch projects";
      })
      // Add
      .addCase(
        addProject.fulfilled,
        (state, action: PayloadAction<Project>) => {
          state.projects.push(action.payload);
        }
      )
      // Edit
      .addCase(
        editProject.fulfilled,
        (state, action: PayloadAction<Project>) => {
          const index = state.projects.findIndex(
            (project) => project.id === action.payload.id
          );
          if (index !== -1) {
            state.projects[index] = action.payload;
          }
        }
      )
      // Remove
      .addCase(removeProject.fulfilled, (state, action: PayloadAction<number>) => {
        state.projects = state.projects.filter(
          (project) => project.id !== action.payload
        );
      });
  },
});

export default projectsSlice.reducer;
