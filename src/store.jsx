import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./features/homeSlice";
import playerSlice from "./features/playerSlice";
import searchSlice from "./features/searchSlice";
import storageSlice from "./features/storageSlice";

export const store = configureStore({
  reducer: {
    player: playerSlice,
    home: homeSlice,
    search: searchSlice,
    storage: storageSlice,
  },
});
