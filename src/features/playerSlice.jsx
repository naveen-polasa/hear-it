import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  baseURL,
  songByIdUrl,
  albumByIdUrl,
  playlistByIdUrl,
} from "../utils/constants";

const initialState = {
  isPlaying: false,
  volume: 1,
  currentTime: 0,
  progressBarWidth: 0,
  volumeBar: false,
  download: false,
  currentSongData: [],
  isLoading: false,
  isError: false,
  id: "Hpd68_cZ",
  type: "song",
  songsList: [],
  songNum: 0,
  prev: null,
  next: null,
};

export const playerSongFetch = createAsyncThunk(
  "playerData",
  async ({ songId, type }, thunkAPI) => {
    try {
      // const url = `https://saavn.me/${thunkAPI.getState().player.type}s?id=${thunkAPI.getState().player.id}`;
      const url = `https://saavn.me/${type}s?id=${songId}`;
      const { data: resp } = await axios(url);
      const { data } = resp;
      return data;
    } catch (error) {
      console.log(error.response);
    }
  }
);

const playerSlice = createSlice({
  name: "playerSlice",
  initialState,
  reducers: {
    playSong: (state, { payload }) => {
      const { id, type } = payload;
      state.id = id;
      state.type = type;
    },
    handleIsPlaying: (state, { payload }) => {
      state.isPlaying = payload;
    },
    setProgressBarWidth: (state, { payload }) => {
      state.progressBarWidth = payload;
    },
    setVolume: (state, { payload }) => {
      state.volume = payload;
    },
    setCurrentTime: (state, { payload }) => {
      state.currentTime = payload;
    },
    setVolumeBar: (state, { payload }) => {
      state.volumeBar = payload;
    },
    setDownload: (state, { payload }) => {
      state.download = payload;
    },
    handleControls: (state, { payload }) => {
      if (payload === "prev") {
        state.songNum--;
        console.log(state.songNum);
        if (state.songNum < 0) {
          state.songNum = state.songsList.length - 1;
        }
      } else if (payload === "next") {
        state.songNum++;
        if (state.songNum > state.songsList.length - 1) {
          state.songNum = 0;
        }
      }
      state.currentSongData = state.songsList?.[state.songNum];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(playerSongFetch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(playerSongFetch.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        switch (state.type) {
          case "song": {
            // todo in singlepage
            state.currentSongData = payload?.[0];
            state.songsList = payload;
            return;
          }
          case "album": {
            // todo in singlepage
            const { songs } = payload;
            state.songsList = songs;
            state.currentSongData = songs?.[0];
            return;
          }
          case "playlist": {
            // todo in singlepage
            const { songs } = payload;
            state.songsList = songs;
            state.currentSongData = songs?.[0];
            return;
          }
        }
      })
      .addCase(playerSongFetch.rejected, (state) => {
        state.isError = true;
      });
  },
});

export const {
  playSong,
  handleIsPlaying,
  setProgressBarWidth,
  setVolume,
  setCurrentTime,
  setVolumeBar,
  setDownload,
  handleControls,
} = playerSlice.actions;

export default playerSlice.reducer;
