import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchVal: "",
  isActive: false,
};

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
  extraReducers: (builder) => {},
});

export const { setSearchVal, handleIsActive } = searchSlice.actions;
export default searchSlice.reducer;
