import { useDispatch, useSelector } from "react-redux";
import { setVolumeBar } from "../../features/playerSlice";
import { FaVolumeUp, FaVolumeMute } from "../../utils/icons";

const Volume = ({ handleVolume, handleVolumeChange }) => {
  const { volume, volumeBar } = useSelector((store) => store.player);
  const dispatch = useDispatch();

  return (
    <>
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
    </>
  );
};
export default Volume;
