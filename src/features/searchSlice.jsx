import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { searchAllUrl } from "../utils/constants";

const initialState = {
  searchVal: "",
  isActive: false,
  result: {},
};

export const searchValFetch = createAsyncThunk(
  "searchData",
  async (searchvalue) => {
    try {
      const url = `${searchAllUrl}${searchvalue}`;
      const { data: resp } = await axios(url);
      const { data } = resp;
      return data;
    } catch (error) {
      console.log(error.response);
    }
  }
);

const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setSearchVal: (state, { payload }) => {
      state.searchVal = payload;
    },
    handleIsActive: (state, { payload }) => {
      state.isActive = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchValFetch.pending, (state) => {})
      .addCase(searchValFetch.fulfilled, (state, { payload }) => {
        state.result = payload;
      })
      .addCase(searchValFetch.rejected, (state, { payload }) => {
        console.log(payload);
      });
  },
});

export const { setSearchVal, handleIsActive } = searchSlice.actions;
export default searchSlice.reducer;
