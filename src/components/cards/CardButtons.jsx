import { FaHeart, FaRegHeart } from "../../utils/icons";
import { handleIsPlaying } from "../../features/playerSlice";
import { useDispatch, useSelector } from "react-redux";
import { checkInLocalData } from "../../utils/utilFunctions";
import { addToStorage, removeFromStorage } from "../../features/storageSlice";
import { useState } from "react";

const CardButtons = () => {
  const {currentSongData, isPlaying, type, id } = useSelector((store) => store.player);
  const [render, setRender] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="my-4 flex gap-4">
      <button
        className="text-2xl font-semibold px-9 py-2 text-white bg-red-400 rounded-3xl hover:scale-105 duration-200"
        onClick={() => {
          dispatch(handleIsPlaying(!isPlaying));
        }}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>

      {type == "song" && (
        <p className="bg-white w-12 h-12 inline-flex justify-center items-center rounded-full border-2 border-gray-300 hover:border-gray-400 duration-300">
          {/* <FaRegHeart
          size="32px"
          className="text-gray-500 pt-0.5 hover:scale-105 duration-200"
        /> */}
          {checkInLocalData(id, `${type}s`) ? (
            <FaHeart
              size="35px"
              className="text-red-500 pt-0.5 hover:scale-105 duration-200"
              onClick={() => {
                dispatch(removeFromStorage(currentSongData));
                setRender(!render);
              }}
            />
          ) : (
            <FaRegHeart
              size="35px"
              className="text-gray-500 pt-0.5 hover:scale-105 duration-200"
              onClick={() => {
                dispatch(addToStorage(currentSongData));
                setRender(!render);
              }}
            />
          )}
        </p>
      )}
    </div>
  );
};
export default CardButtons;
