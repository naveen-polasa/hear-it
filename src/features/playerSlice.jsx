import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { songByIdUrl, albumByIdUrl, playlistByIdUrl } from "../utils/constants";

const initialState = {
  isPlaying: false,
  volume: 1,
  currentTime: 0,
  progressBarWidth: 0,
  volumeBar: false,
  currentSong: null,
  currentSongData: [],
  isLoading: false,
  isError: false,
  id: "Hpd68_cZ",
  type: "song",
};

export const playerSongFetch = createAsyncThunk(
  "playerData",
  async (_, thunkAPI) => {
    try {
      console.log(thunkAPI.getState().player.type);
      if (thunkAPI.getState().player.type === "song") {
        const { data: resp } = await axios(
          `${songByIdUrl}${thunkAPI.getState().player.id}`
        );
        const { data } = resp;
        return data;
      } else if (thunkAPI.getState().player.type === "album") {
      } else if (thunkAPI.getState().player.type === "playlist") {
      }
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
      // console.log(id,type)
    },
    setCurrentSong: (state, payload) => {
      state.currentSong = payload;
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(playerSongFetch.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(playerSongFetch.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentSongData = payload[0];
      })
      .addCase(playerSongFetch.rejected, (state) => {
        state.isError = true;
      });
  },
});

export const {
  setCurrentSong,
  playSong,
  handleIsPlaying,
  setProgressBarWidth,
  setVolume,
  setCurrentTime,
  setVolumeBar,
} = playerSlice.actions;

export default playerSlice.reducer;
