import { createSlice } from "@reduxjs/toolkit";
import { checkInLocalData, removeItem } from "../utils/utilFunctions";

const initialState = {
  lastPlayed: {},
  songs: JSON.parse(localStorage.getItem("songs")) || [],
  albums: JSON.parse(localStorage.getItem("albums")) || [],
  playlists: JSON.parse(localStorage.getItem("playlists")) || [],
};

const storageSlice = createSlice({
  name: "storageData",
  initialState,
  reducers: {
    addLastPlayed: (state, { payload }) => {
      state.lastPlayed = payload;
      localStorage.setItem("lastPlayed", JSON.stringify(payload));
    },
    addToStorage: (state, { payload }) => {
      const { id, type } = payload;

      switch (type) {
        case "song": {
          if (checkInLocalData(id, "songs")) return;
          state.songs = [...state.songs, payload];
          localStorage.setItem("songs", JSON.stringify(state.songs));
          return;
        }
        case "album": {
          if (checkInLocalData(id, "albums")) return;
          state.albums = [...state.albums, payload];
          localStorage.setItem("albums", JSON.stringify(state.albums));
          return;
        }
        case "playlist": {
          if (checkInLocalData(id, "playlists")) return;
          state.playlists = [...state.playlists, payload];
          localStorage.setItem("playlists", JSON.stringify(state.playlists));
        }
      }
    },
    removeFromStorage: (state, { payload }) => {
      const { id, type } = payload;
      switch (type) {
        case "song": {
          state.songs = removeItem(id, "songs");
          return;
        }
        case "album": {
          state.albums = removeItem(id, "albums");
          return;
        }
        case "playlist": {
          state.playlists = removeItem(id, "playlists");
        }
      }
    },
  },
});

export const { addLastPlayed, addToStorage, removeFromStorage } = storageSlice.actions;

export default storageSlice.reducer;
