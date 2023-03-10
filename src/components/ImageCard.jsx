import { FaPlay, FaRegHeart } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { handleIsPlaying, playSong } from "../features/playerSlice";

const ImageCard = ({ item, height, width }) => {
  const { id, image, name, type } = item;
  const dispatch = useDispatch();
  return (
    <div>
      <img
        src={image[2].link}
        alt={name}
        className={`w-${width} h-${height} object-cover rounded-xl`}
      />
      <div
        className={`opacity-0 hover:opacity-100 w-${width} h-${height} absolute top-0 left-0 flex justify-center items-center bg-black rounded-xl bg-opacity-40 duration-700`}
      >
        <span
          className="h-12 w-12 hover:h-14 hover:w-14 duration-300 bg-black opacity-70 rounded-full flex items-center justify-center"
          onClick={() => {
            dispatch(playSong({ id, type }));
            dispatch(handleIsPlaying(true));
          }}
        >
          <FaPlay size="26px" className="ml-1 text-white" />
        </span>
        <FaRegHeart
          size="24px"
          className="absolute bottom-2 left-4 text-white "
        />
        <SlOptions
          size="26px"
          className="absolute bottom-2 right-4 text-white "
        />
      </div>
    </div>
  );
};
export default ImageCard;
