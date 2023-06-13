import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../apiClient";

export const fetchCharDetail = createAsyncThunk(
  "api/fetchCharDetail",
  async ({ charId }: { charId: number }) => {
    const response = await axiosClient.get(`/characters/${charId}`);
    return response.data;
  }
);

const apiSlice = createSlice({
  name: "user",
  initialState: {
    charData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharDetail.fulfilled, (state, action) => {
        state.loading = false;
        state.charData = action.payload;
      })
      .addCase(fetchCharDetail.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default apiSlice.reducer;
