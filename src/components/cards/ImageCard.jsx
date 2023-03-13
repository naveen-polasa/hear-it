import { FaHeart, FaPlay, FaRegHeart, SlOptions } from "../../utils/icons";
import { useDispatch, useSelector } from "react-redux";
import { handleIsPlaying, playSong } from "../../features/playerSlice";
import { useNavigate } from "react-router-dom";
import { addToHistory, addToStorage, removeFromStorage } from "../../features/storageSlice";
import { checkInLocalData } from "../../utils/utilFunctions";
import { useEffect, useState } from "react";

const ImageCard = ({ item, width, height }) => {
  const [render, setRender] = useState(false);

  const { id, image, name, type } = item;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (!e.target.classList.contains("image")) return;
    dispatch(playSong({ id, type }));
    dispatch(addToHistory({ ...item }));
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
          handleClick(e);
        }}
      >
        <span
          className="h-12 w-12 hover:h-14 hover:w-14 duration-300 bg-black opacity-70 rounded-full flex items-center justify-center"
          onClick={() => {
            dispatch(playSong({ id, type }));
            dispatch(addToHistory({ ...item }));
            dispatch(handleIsPlaying(true));
          }}
        >
          <FaPlay size="26px" className="ml-1 text-white" />
        </span>

        {checkInLocalData(id, `${type}s`) ? (
          <FaHeart
            size="26px"
            className="absolute bottom-2 left-4 text-red-500 hover:scale-125 duration-300 storage"
            onClick={() => {
              dispatch(removeFromStorage({ ...item }));
              setRender(!render);
            }}
          />
        ) : (
          <FaRegHeart
            size="24px"
            className="absolute bottom-2 left-4 text-white  hover:scale-125 duration-300 storage"
            onClick={() => {
              dispatch(addToStorage({ ...item }));
              setRender(!render);
            }}
          />
        )}
        {/* <SlOptions
          size="26px"
          className="absolute bottom-2 right-4 text-white "
        /> */}
      </div>
    </div>
  );
};
export default ImageCard;
