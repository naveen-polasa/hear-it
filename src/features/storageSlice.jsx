import { createSlice } from "@reduxjs/toolkit";
import { removeItem, setUpHistory, setupStorage } from "../utils/utilFunctions";

const initialState = {
  lastPlayed: {},
  songs: JSON.parse(localStorage.getItem("songs")) || [],
  history: JSON.parse(localStorage.getItem("history")) || [],
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
    addToHistory: (state, { payload }) => {
      if (!payload) return;
      state.history = setUpHistory(payload);
    },
    addToStorage: (state, { payload }) => {
      const { type } = payload;
      switch (type) {
        case "": {
          state.songs = setupStorage(payload, "songs");
          return;
        }
        case "song": {
          state.songs = setupStorage(payload, "songs");
          return;
        }
        case "album": {
          state.albums = setupStorage(payload, "albums");
          return;
        }
        case "playlist": {
          state.playlists = setupStorage(payload, "playlists");
        }
      }
    },
    removeFromStorage: (state, { payload }) => {
      const { id, type } = payload;
      switch (type) {
        case "": {
          state.songs = removeItem(id, "songs");
          return;
        }
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
    clearFromStorage: (state, { payload }) => {
      localStorage.removeItem(payload);
      state[payload] = [];
    },
  },
});

export const {
  addLastPlayed,
  addToHistory,
  addToStorage,
  removeFromStorage,
  clearFromStorage,
} = storageSlice.actions;

export default storageSlice.reducer;
