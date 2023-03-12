import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatTime } from "../../utils/utilFunctions";
import { SlOptions } from "../../utils/icons";
import {
  handleIsPlaying,
  setProgressBarWidth,
  setVolume,
  setCurrentTime,
  playerSongFetch,
} from "../../features/playerSlice";
import { SongDetails, SongControls, Download, Volume } from "./index";

const Player = () => {
  const [mousedown, setMouseDown] = useState(false);
  const ref = useRef(null);

  const {
    currentSongData,
    id: songId,
    type,
    songsList,
    isPlaying,
    volume,
    currentTime,
    progressBarWidth,
  } = useSelector((store) => store.player);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(playerSongFetch({ songId, type }));
  }, [songId, type]);

  const { downloadUrl, name, primaryArtists, image } = currentSongData;

  useEffect(() => {
    if (!isPlaying) return;
    ref.current.play();
    const interval = setInterval(() => {
      let time = Math.floor(ref.current?.currentTime);
      dispatch(setCurrentTime(time));
    }, 1000);
    return () => clearTimeout(interval);
  }, [isPlaying, currentSongData]);

  const handlePlay = () => {
    dispatch(handleIsPlaying(!isPlaying));
    if (!isPlaying) {
      ref.current.play();
      return;
    } else {
      ref.current.pause();
    }
  };

  useEffect(() => {
    if (currentTime < 1) return;
    const totalTime = ref.current?.duration;
    const percentage = ((currentTime / Math.floor(totalTime)) * 100).toFixed(8);
    dispatch(setProgressBarWidth(percentage));
  }, [currentTime]);

  const handleMouseDown = (e, flag) => {
    if (flag && !e.target.classList.contains("progress")) return;
    const currentPoint = e.clientX - e.target.getBoundingClientRect().left;
    const totalWidth = e.currentTarget.clientWidth;
    let percentage = ((currentPoint / totalWidth) * 100).toFixed(8);
    if (percentage > 100) percentage = 100;
    const newTime = Math.floor((percentage / 100) * ref.current.duration);
    dispatch(setCurrentTime(newTime));
    ref.current.currentTime = newTime;
    dispatch(setProgressBarWidth(percentage));
  };

  const handleVolume = (e) => {
    if (e.target.classList.contains("input")) return;
    if (volume > 0) {
      dispatch(setVolume(0));
      ref.current.muted = true;
      return;
    } else dispatch(setVolume(1));
    ref.current.muted = false;
  };
  const handleVolumeChange = (e) => {
    dispatch(setVolume(e.target.value));
    ref.current["volume"] = volume;
  };

  return (
    <section className="fixed bottom-0 h-20 bg-red-100 w-[100vw] max-w-[1440px] rounded-t-lg border-x-2 border-red-200 z-20">
      <audio
        src={downloadUrl?.[1]?.link}
        ref={ref}
        type="audio/mp3"
        preload="metadata"
      ></audio>
      <div
        onClick={(e) => {
          handleMouseDown(e, true);
        }}
        onMouseMove={(e) => {
          if (mousedown && e.target.classList.contains("progress")) {
            handleMouseDown(e, false);
          }
        }}
        onMouseDown={() => setMouseDown(true)}
        onMouseLeave={() => setMouseDown(false)}
        className="w-[99.6%] progress border-t-[5px] border-red-300 relative mx-auto"
      >
        <div
          style={{ width: `${progressBarWidth}%` }}
          className="relative -top-1 border-t-[5px] border-t-red-500"
        >
          <span
            className="absolute -top-2.5 -right-3 w-4 h-4 hover:scale-110 rounded-full bg-red-800 "
            onMouseUp={() => setMouseDown(false)}
          ></span>
        </div>
      </div>
      <div className="flex justify-between px-4 items-center h-20 pb-5">
        <SongDetails
          name={name}
          primaryArtists={primaryArtists}
          image={image}
        />
        <SongControls songsList={songsList} handlePlay={handlePlay} />
        <div className="flex items-center gap-x-6 px-4">
          <span>
            <span>
              {formatTime(Math.floor(ref.current?.currentTime || 0))}{" "}
            </span>
            / <span>{formatTime(Math.floor(ref.current?.duration || 0))}</span>
          </span>
          <button>
            <SlOptions size="28px" />
          </button>
          <Download downloadUrl={downloadUrl} />
          <Volume
            handleVolume={handleVolume}
            handleVolumeChange={handleVolumeChange}
          />
        </div>
      </div>
    </section>
  );
};
export default Player;
