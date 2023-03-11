import { FaRegHeart } from "../../utils/icons";
import { handleIsPlaying } from "../../features/playerSlice";
import { useDispatch, useSelector } from "react-redux";

const CardButtons = () => {
  const { isPlaying } = useSelector((store) => store.player);
  const dispatch = useDispatch();
  return (
    <div className="my-4 flex gap-4">
      <button
        className="text-2xl font-semibold px-9 py-2 text-white bg-red-400 rounded-3xl hover:scale-105 duration-200"
        onClick={() => !isPlaying && dispatch(handleIsPlaying(!isPlaying))}
      >
        Play
      </button>
      <button className="bg-white w-12 h-12 inline-flex justify-center items-center rounded-full border-2 border-gray-300 hover:border-gray-400 duration-300">
        <FaRegHeart
          size="32px"
          className="text-gray-500 pt-0.5 hover:scale-105 duration-200"
        />
      </button>
    </div>
  );
};
export default CardButtons;
