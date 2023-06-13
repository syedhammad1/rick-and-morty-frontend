import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../apiClient";

export const fetchLocations = createAsyncThunk(
  "api/fetchLocations",
  async ({ pageNum }: { pageNum: number }) => {
    const response = await axiosClient.get(`/locations/?pageno=${pageNum}`);
    return response.data;
  }
);

const apiSlice = createSlice({
  name: "user",
  initialState: {
    locations: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLocations.fulfilled, (state, action) => {
        state.loading = false;
        state.locations = action.payload;
      })
      .addCase(fetchLocations.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default apiSlice.reducer;
