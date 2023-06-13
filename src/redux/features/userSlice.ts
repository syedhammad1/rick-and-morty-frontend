import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../apiClient";
export const fetchUsers = createAsyncThunk("api/fetchUsers", async () => {
  const response = await axiosClient.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

const apiSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default apiSlice.reducer;
