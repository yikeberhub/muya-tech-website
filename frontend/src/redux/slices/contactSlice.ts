// redux/slices/contactSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Contact } from "../../types/contactType";
import {
  fetchContactsApi,
  createContactApi,
  updateContactApi,
  deleteContactApi,
} from "../../api/contactApi";

interface ContactState {
  contacts: Contact[];
  loading: boolean;
  error: string | null;
}

const initialState: ContactState = {
  contacts: [],
  loading: false,
  error: null,
};

// Async thunks
export const fetchContacts = createAsyncThunk("contacts/fetch", async () => {
  return await fetchContactsApi();
});

export const addContact = createAsyncThunk("contacts/add", async (data: FormData) => {
  return await createContactApi(data);
});

export const editContact = createAsyncThunk(
  "contacts/edit",
  async ({ id, payload }: { id: number; payload: FormData }) => {
    return await updateContactApi(id, payload);
  }
);

export const removeContact = createAsyncThunk("contacts/delete", async (id: number) => {
  return await deleteContactApi(id);
});

// Slice
const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchContacts.pending, (state) => { state.loading = true; })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        console.log('fetched contacts',action.payload.contacts);
        state.contacts = action.payload.contacts;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch contacts";
      })

      // Add
      .addCase(addContact.pending, (state) => { state.loading = true; })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to add contact";
      })

      // Edit
      .addCase(editContact.pending, (state) => { state.loading = true; })
      .addCase(editContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = state.contacts.map(c => c.id === action.payload.id ? action.payload : c);
      })
      .addCase(editContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to update contact";
      })

      // Delete
      .addCase(removeContact.pending, (state) => { state.loading = true; })
      .addCase(removeContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contacts = state.contacts.filter(c => c.id !== action.payload);
      })
      .addCase(removeContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to delete contact";
      });
  },
});

export default contactSlice.reducer;
