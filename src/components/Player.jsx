import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import { SlOptions } from "react-icons/sl";
import { formatTime } from "../utils/utilFunctions";
const Player = () => {
  const [play, setPlay] = useState(true);
  const [volume, setVolume] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(1);
  const [volumeBar, setVolumeBar] = useState(false);
  const audio = useRef();

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      let time = Math.floor(audio.current?.currentTime);
      setCurrentTime(time);
    }, 1000);
    return () => clearTimeout(interval);
  }, [isPlaying]);

  useEffect(() => {}, [currentTime]);

  const handlePlay = () => {
    setPlay(!play);
    if (play) {
      audio.current.play();
      setIsPlaying(true);
      return;
    }
    setIsPlaying(false);
    audio.current.pause();
  };

  useEffect(() => {
    if (currentTime < 1) return;
    const totalTime = audio.current?.duration;
    const percentage = ((currentTime / Math.floor(totalTime)) * 100).toFixed(8);
    setProgressBarWidth(percentage);
  }, [currentTime]);

  const handleMouseDown = (e) => {
    const currentPoint = e.clientX - e.target.getBoundingClientRect().left;
    const totalWidth = e.currentTarget.clientWidth;
    let percentage = ((currentPoint / totalWidth) * 100).toFixed(8);
    if (percentage > 100) percentage = 100;
    const newTime = Math.floor((percentage / 100) * audio.current.duration);
    setCurrentTime(newTime);
    audio.current.currentTime = newTime;

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
      audio.current.muted = true;
      return;
    } else setVolume(1);
    audio.current.muted = false;
  };
  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    audio.current["volume"] = volume;
  };

  return (
    <section className="fixed bottom-0 h-20 bg-red-200 w-[100vw] max-w-[1440px]">
      <audio
        src="../src/assets/test.mp3"
        ref={audio}
        preload="metadata"
        className=""
      ></audio>
      <div onClick={handleMouseDown} className="w-[100%]">
        <div
          style={{ width: `${progressBarWidth}%` }}
          className="relative border-t-[5px] border-t-red-400"
        >
          <span className="absolute -top-2.5 -right-3 w-4 h-4 rounded-full bg-red-800"></span>
        </div>
      </div>
      <div className="flex justify-between px-4 items-center h-20">
        <div className="flex items-center gap-3">
          <img src="../src/assets/logo.png" alt="image" className="w-12 h-12 rounded-lg" />
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
            {play ? <FaPlay size="28px" /> : <FaPause size="28px" />}
          </button>
          <button>
            <GiNextButton size="28px" />
          </button>
        </div>
        <div className="flex items-center gap-x-6 px-4">
          <span>
            <span>
              {formatTime(Math.floor(audio.current?.currentTime || 0))}{" "}
            </span>
            /<span>{formatTime(Math.floor(audio.current?.duration || 0))}</span>
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
