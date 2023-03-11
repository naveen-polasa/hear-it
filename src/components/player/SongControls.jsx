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
  );
};
export default SongControls;
