import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./features/homeSlice";
import playerSlice from "./features/playerSlice";

export const store = configureStore({
  reducer: {
    player: playerSlice,
    home: homeSlice,
  },
});
