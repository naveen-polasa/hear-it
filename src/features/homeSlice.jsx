import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { homeDataFetchUrl } from "../utils/constants";

const initialState = {
  data: [],
  albums: [],
  playlists: [],
  charts: [],
  trending: [],
  isLoading: false,
  isError: false,
  play: null,
  menu: false,
};

export const homeDataFetch = createAsyncThunk(
  "homeData",
  async (_, thunkAPI) => {
    try {
      const { data: resp } = await axios(homeDataFetchUrl);
      const { data } = resp;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    handleMenu: (state, { payload }) => {
      if (payload === "open") {
        state.menu = true;
        return;
      } else {
        state.menu = false;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(homeDataFetch.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(homeDataFetch.fulfilled, (state, { payload }) => {
        const { albums, playlists, charts, trending } = payload;
        return {
          ...state,
          albums,
          playlists,
          charts,
          trending,
          data: payload,
          isLoading: false,
          isError: false,
        };
      })
      .addCase(homeDataFetch.rejected, (state, { payload }) => {
        console.log(payload);
        console.log(payload);
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { handleMenu } = homeSlice.actions;

export default homeSlice.reducer;
