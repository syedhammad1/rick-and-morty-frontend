import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../../apiClient";

export const fetchCharacters = createAsyncThunk(
  "api/fetchCharacters",
  async ({ locationId }: { locationId: number }) => {
    const response = await axiosClient.post(`/characters`, { locationId });
    return response.data;
  }
);

const apiSlice = createSlice({
  name: "characters",
  initialState: {
    characters: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.loading = false;
        state.characters = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default apiSlice.reducer;
