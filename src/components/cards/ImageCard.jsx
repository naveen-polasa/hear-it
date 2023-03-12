import { FaPlay, FaRegHeart, SlOptions } from "../../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { handleIsPlaying, playSong } from "../../features/playerSlice";
import { useNavigate } from "react-router-dom";

const ImageCard = ({ item, width, height }) => {
  const { id, image, name, type } = item;
  const { singlePage } = useSelector((store) => store.player);
  const dispatch = useDispatch();
  // console.log(singlePage);

  const navigate = useNavigate();

  const handleClick = (e) => {
    if (!e.target.classList.contains("image")) return;
    dispatch(handleIsPlaying(false));
    const path = `${type}/${id}`;
    navigate(path);
  };

  return (
    <div>
      <img
        src={image[2].link}
        alt={name}
        style={{ height: `${height}rem` }}
        className={`w-${width} h-44 object-cover rounded-xl`}
      />
      <div
        style={{ height: `${height}rem` }}
        className={`opacity-0 hover:opacity-100 w-${width} absolute top-0 left-0 flex justify-center items-center bg-black rounded-xl bg-opacity-40 duration-700 image`}
        onClick={(e) => {
          dispatch(playSong({ id, type }));
          handleClick(e);
        }}
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
