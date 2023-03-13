import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isPlaying: false,
  volume: 1,
  currentTime: 0,
  progressBarWidth: 0,
  volumeBar: false,
  download: false,
  currentSongData: {},
  isLoading: false,
  isError: false,
  id: JSON.parse(localStorage.getItem("lastPlayed"))?.id || "j8hvJDPs",
  type: JSON.parse(localStorage.getItem("lastPlayed"))?.type || "song",
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
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const playerSlice = createSlice({
  name: "playerSlice",
  initialState,
  reducers: {
    playSong: (state, { payload }) => {
      const { id, type } = payload;
      if (state.id === id) return;
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
    setSongNum: (state, { payload }) => {
      state.songNum = payload;
      state.currentSongData = state.songsList[state.songNum];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(playerSongFetch.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(playerSongFetch.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        switch (state.type) {
          case "song": {
            state.currentSongData = payload?.[0];
            state.songsList = payload;
            return;
          }
          case "album": {
            const { songs } = payload;
            state.songsList = songs;
            state.currentSongData = songs?.[0];
            return;
          }
          case "playlist": {
            const { songs } = payload;
            state.songsList = songs;
            state.currentSongData = songs?.[0];
          }
        }
      })
      .addCase(playerSongFetch.rejected, (state, { payload }) => {
        console.log(payload);
        state.currentSongData = initialState.currentSongData;
        state.songsList = initialState.songsList;
        state.isLoading = false;
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
  setSongNum,
} = playerSlice.actions;

export default playerSlice.reducer;
