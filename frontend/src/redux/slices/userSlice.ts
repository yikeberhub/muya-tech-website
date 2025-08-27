import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User, UserPayload, UsersResponse } from "../../types/userType";
import {
  getUsersApi,
  getUserApi,
  updateUserApi,
  deleteUserApi,
  createUserApi,
} from "../../api/userApi";

interface UserState {
  users: User[];
  user: User | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  user: null,
  loading: false,
  error: null,
};

// Fetch all users
export const fetchUsers = createAsyncThunk<UsersResponse>(
  "users/fetchUsers",
  async () => {
    const res = await getUsersApi();
    return res; 
  }
);

// Fetch single user
export const fetchUser = createAsyncThunk<User, number>(
  "users/fetchUser",
  async (id) => await getUserApi(id)
);

// Create user
export const createUser = createAsyncThunk<User, FormData>(
  "users/addUser",
  async (user) => await createUserApi(user)
);

// Update user
export const updateUser = createAsyncThunk<
  User,
  { id: number; data: Partial<FormData> }
>("users/updateUser", async ({ id, data }) => await updateUserApi(id, data));

// Delete user
export const deleteUser = createAsyncThunk<number, number>(
  "users/deleteUser",
  async (id) => {
    await deleteUserApi(id);
    return id;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch users
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<UsersResponse>) => {
        state.loading = false;
        state.users = action.payload.users;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      })

      // Fetch single user
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch user";
      })

      // Add user
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to add user";
      })

      // Update user
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.users = state.users.map((u) =>
          u.id === action.payload.id ? action.payload : u
        );
        if (state.user?.id === action.payload.id) state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update user";
      })

      // Delete user
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action: PayloadAction<number>) => {
        state.loading = false;
        state.users = state.users.filter((u) => u.id !== action.payload);
        if (state.user?.id === action.payload) state.user = null;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to delete user";
      });
  },
});

export default userSlice.reducer;
