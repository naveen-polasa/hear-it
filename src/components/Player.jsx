import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import { SlOptions } from "react-icons/sl";
import { formatTime } from "../utils/utilFunctions";

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const [volumeBar, setVolumeBar] = useState(false);
  const [mousedown, setMouseDown] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      let time = Math.floor(ref.current?.currentTime);
      setCurrentTime(time);
    }, 1000);
    return () => clearTimeout(interval);
  }, [isPlaying]);

  const handlePlay = () => {
    setIsPlaying(!isPlaying);
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
    setProgressBarWidth(percentage);
  }, [currentTime]);

  const handleMouseDown = (e, flag) => {
    if (flag && !e.target.classList.contains("progress")) return;
    const currentPoint = e.clientX - e.target.getBoundingClientRect().left;
    const totalWidth = e.currentTarget.clientWidth;
    let percentage = ((currentPoint / totalWidth) * 100).toFixed(8);
    if (percentage > 100) percentage = 100;
    const newTime = Math.floor((percentage / 100) * ref.current.duration);
    setCurrentTime(newTime);
    ref.current.currentTime = newTime;
    setProgressBarWidth(percentage);
  };

  const handleMouseOver = () => {
    setVolumeBar(true);
  };
  const handleMouseLeave = () => {
    setVolumeBar(false);
  };

  const handleVolume = (e) => {
    if (e.target.classList.contains("input")) return;
    if (volume > 0) {
      setVolume(0);
      ref.current.muted = true;
      return;
    } else setVolume(1);
    ref.current.muted = false;
  };
  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    ref.current["volume"] = volume;
  };

  return (
    <section className="fixed bottom-0 h-20 bg-red-100 w-[100vw] max-w-[1440px] rounded-xl">
      <audio
        src="../src/assets/test.mp3"
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
        className="w-[99.2%] progress border-t-[5px] border-red-300 relative mx-auto"
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
      <div className="flex justify-between px-4 items-center h-20">
        <div className="flex items-center gap-3">
          <img
            src="../src/assets/logo.png"
            alt="image"
            className="w-12 h-12 rounded-lg"
          />
          <div>
            <h4>Hey Mama</h4>
            <h5>artists</h5>
          </div>
        </div>
        <div className="flex gap-x-6">
          <button>
            <GiPreviousButton size="28px" />
          </button>
          <button onClick={handlePlay}>
            {!isPlaying ? <FaPlay size="28px" /> : <FaPause size="28px" />}
          </button>
          <button>
            <GiNextButton size="28px" />
          </button>
        </div>
        <div className="flex items-center gap-x-6 px-4">
          <span>
            <span>
              {formatTime(Math.floor(ref.current?.currentTime || 0))}{" "}
            </span>
            /<span>{formatTime(Math.floor(ref.current?.duration || 0))}</span>
          </span>
          <button>
            <SlOptions size="28px" />
          </button>
          <button
            onClick={handleVolume}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
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
