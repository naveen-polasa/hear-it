import { useEffect, useRef, useState } from "react";
import {
  FaPause,
  FaPlay,
  FaVolumeUp,
  FaVolumeMute,
  FaDownload,
} from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import { SlOptions } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { formatName, formatTime } from "../utils/utilFunctions";
import {
  handleIsPlaying,
  setProgressBarWidth,
  setVolume,
  setCurrentTime,
  setVolumeBar,
  setDownload,
  playerSongFetch,
  handleControls,
} from "../features/playerSlice";

const Player = () => {
  const [mousedown, setMouseDown] = useState(false);
  const ref = useRef(null);

  const {
    currentSongData,
    id: songId,
    type,
    songsList,
    songNum,
    isPlaying,
    volume,
    currentTime,
    progressBarWidth,
    volumeBar,
    download,
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
    <section className="fixed bottom-0 h-20 bg-red-100 w-[100vw] max-w-[1440px] rounded-t-lg">
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
        <div className="flex items-center gap-3 w-64">
          <img
            src={image?.[2]?.link}
            alt="image"
            className="w-12 h-12 rounded-lg"
          />
          <div>
            <h4 className="truncate w-64">{formatName(name)}</h4>
            <h5 className="truncate w-64">{formatName(primaryArtists)}</h5>
          </div>
        </div>
        <div className="flex gap-x-6 ">
          <button
            onClick={() => dispatch(handleControls("prev"))}
            className={`${songsList.length < 2 ? "opacity-75" : null}`}
          >
            <GiPreviousButton size="28px" />
          </button>
          <button onClick={handlePlay}>
            {!isPlaying ? <FaPlay size="28px" /> : <FaPause size="28px" />}
          </button>
          <button
            onClick={() => dispatch(handleControls("next"))}
            className={`${songsList.length < 2 ? "opacity-75" : null}`}
          >
            <GiNextButton size="28px" />
          </button>
        </div>
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
          <button
            className="relative"
            onMouseOver={() => dispatch(setDownload(true))}
            onMouseLeave={() => dispatch(setDownload(false))}
          >
            <FaDownload size="26px" />
            <div
              className={`absolute ${
                download ? "block" : "hidden"
              } bottom-6 -left-12 bg-green-50 p-2 border rounded-lg`}
            >
              {downloadUrl?.map((url) => {
                return (
                  <div
                    key={url.quality}
                    className="flex gap-x-4 w-[6.5rem] my-2 justify-between border rounded-lg p-0.5"
                  >
                    <p>{url.quality}</p>
                    <span>
                      <a href={url.link}>
                        <HiDownload size="24px" className="hover:scale-125 duration-200" />
                      </a>
                    </span>
                  </div>
                );
              })}
            </div>
          </button>
          <button
            onClick={handleVolume}
            onMouseOver={() => dispatch(setVolumeBar(true))}
            onMouseLeave={() => dispatch(setVolumeBar(false))}
            className="relative"
          >
            <div
              className={`absolute ${
                volumeBar ? "flex" : "hidden"
              }  bottom-[5.4rem] -left-16 pl-4 pr-2 py-1 border-2 rounded-xl bg-green-50 -rotate-90 `}
            >
              <input
                type="range"
                name="volume"
                min="0"
                max="1"
                step="0.05"
                value={volume}
                className="h-7 input"
                onChange={handleVolumeChange}
              />
            </div>
            {volume ? <FaVolumeUp size="28px" /> : <FaVolumeMute size="28px" />}
          </button>
        </div>
      </div>
    </section>
  );
};
export default Player;
