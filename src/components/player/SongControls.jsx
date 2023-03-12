import { useDispatch, useSelector } from "react-redux";
import { handleControls } from "../../features/playerSlice";
import {
  GiPreviousButton,
  GiNextButton,
  FaPlay,
  FaPause,
} from "../../utils/icons";

const SongControls = ({ songsList, handlePlay }) => {
  const { isPlaying } = useSelector((store) => store.player);
  const dispatch = useDispatch();
  return (
    <div className="flex gap-x-4 md:gap-x-6 ">
      <button
        onClick={() => dispatch(handleControls("prev"))}
        className={`${songsList.length < 2 ? "opacity-75" : null}`}
      >
        <GiPreviousButton className="w-5 h-5 md:w-7 md:h-7" />
      </button>
      <button onClick={handlePlay}>
        {!isPlaying ? (
          <FaPlay className="w-5 h-5 md:w-7 md:h-7" />
        ) : (
          <FaPause className="w-5 h-5 md:w-7 md:h-7" />
        )}
      </button>
      <button
        onClick={() => dispatch(handleControls("next"))}
        className={`${songsList.length < 2 ? "opacity-75" : null}`}
      >
        <GiNextButton className="w-5 h-5 md:w-7 md:h-7" />
      </button>
    </div>
  );
};
export default SongControls;
