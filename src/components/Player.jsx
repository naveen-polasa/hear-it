import { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { GiPreviousButton, GiNextButton } from "react-icons/gi";
import { SlOptions } from "react-icons/sl";
const Player = () => {
  const [play, setPlay] = useState(true);
  const [volume, setVolume] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const audio = useRef();

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      let time = Math.floor(audio.current.currentTime);
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
    const totalTime = audio.current.duration;
    const percentage = ((currentTime / Math.floor(totalTime)) * 100).toFixed(8);
    setProgressBarWidth(percentage);
  }, [currentTime]);
  const handleVolume = () => {
    setVolume(!volume);
  };

  return (
    <section className="fixed bottom-0 h-16 bg-red-200 w-[100vw] max-w-[1440px]">
      <audio
        src="../src/assets/test.mp3"
        ref={audio}
        preload="metadata"
        className=""
      ></audio>
      <div
        style={{ width: `${progressBarWidth}%` }}
        className="relative border-t-4 border-t-red-500"
      >
        <span className="absolute -top-2.5 -right-3 w-4 h-4 rounded-full bg-red-800"></span>
      </div>  
      <div className="flex justify-between px-4 items-center h-16">
        <div className="flex items-center gap-3">
          <img src="" alt="image" />
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
            <span>0:00</span>/<span>2:00</span>
          </span>
          <button>
            <SlOptions size="28px" />
          </button>
          <button onClick={handleVolume}>
            {volume ? <FaVolumeUp size="28px" /> : <FaVolumeMute size="28px" />}
          </button>
        </div>
      </div>
    </section>
  );
};
export default Player;
