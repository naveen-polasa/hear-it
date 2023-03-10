import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://saavn.me/modules?language=hindi,english";
const initialState = {
  data: [],
  albums: [],
  playlists: [],
  charts: [],
  trending: [],
  isLoading: false,
  isError: false,
  play: null,
};

export const homeDataFetch = createAsyncThunk("homeData", async () => {
  try {
    const { data: resp } = await axios(url);
    const { data } = resp;
    return data;
  } catch (error) {
    console.log(error.response);
  }
});

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(homeDataFetch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(homeDataFetch.fulfilled, (state, { payload }) => {
        const { albums, playlists, charts, trending } = payload;
        return { ...state, albums, playlists, charts, trending, data: payload };
      })
      .addCase(homeDataFetch.rejected, (state, { payload }) => {
        state.isError = false;
        console.log(payload);
      });
  },
});

export const {} = homeSlice.actions;

export default homeSlice.reducer;
