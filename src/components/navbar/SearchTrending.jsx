import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleIsPlaying, playSong } from "../../features/playerSlice";
import { handleIsActive } from "../../features/searchSlice";
import { formatName } from "../../utils/utilFunctions";

const SearchTrending = () => {
  const { trending } = useSelector((store) => store.home);
  const dispatch = useDispatch();

  const { songs, albums } = trending;
  const navigate = useNavigate();

  const handlePlay = (id, type) => {
    dispatch(playSong({ id, type }));
    dispatch(handleIsPlaying(true));
    const path = `${type}/${id}`;
    navigate(path);
  };

  return (
    <article className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-3 pb-5 pt-2 flex-wrap shrink-0 overflow-x-hidden overflow-y-scroll h-[calc(100vh-13rem)]">
      {songs?.slice(0, 3).map((song) => {
        const { name, image, type, id } = song;
        return (
          <div
            key={id}
            className="flex gap-x-5 hover:cursor-pointer"
            onClick={() => {
              if (type !== "artist") {
                handlePlay(id, type);
              }
            }}
          >
            <img
              src={image?.[1].link}
              alt={name}
              className="w-14 rounded-lg shrink-0"
              onClick={() => handlePlay(id, type)}
            />
            <div>
              <p className="truncate w-64 font-semibold">{formatName(name)}</p>
              <p className="capitalize">{type}</p>
            </div>
          </div>
        );
      })}
      {albums?.slice(0, 6).map((album) => {
        const { name, image, type, id } = album;
        return (
          <div
            key={id}
            className={`flex gap-x-5 hover:cursor-pointer ${
              type !== "artist" && "hover:cursor-pointer"
            }`}
            onClick={() => {
              if (type !== "artist") {
                handlePlay(id, type);
              }
            }}
          >
            <img
              src={image?.[1].link}
              alt={name}
              className="w-14 rounded-lg shrink-0"
            />
            <div>
              <p className="truncate w-64 font-semibold">{formatName(name)}</p>
              <p className="capitalize">{type}</p>
            </div>
          </div>
        );
      })}
    </article>
  );
};
export default SearchTrending;
