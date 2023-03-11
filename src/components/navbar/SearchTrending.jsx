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
    <article
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-3 pb-5 pt-2 flex-wrap shrink-0"
    
    >
      {songs?.slice(0, 3).map((song) => {
        const { name, image, type, id } = song;
        return (
          <div key={id} className="flex gap-x-5">
            <button onClick={() => handlePlay(id, type)} className="shrink-0">
              <img
                src={image?.[1].link}
                alt={name}
                className="w-14 rounded-lg"
                onClick={() => handlePlay(id, type)}
              />
            </button>
            <div>
              <p className="truncate w-64 hover:font-semibold">
                <button onClick={() => handlePlay(id, type)}>
                  {formatName(name)}
                </button>
              </p>
              <p className="capitalize">{type}</p>
            </div>
          </div>
        );
      })}
      {albums?.slice(0, 6).map((album) => {
        const { name, image, type, id } = album;
        return (
          <div key={id} className="flex gap-x-5">
            <button onClick={() => handlePlay(id, type)} className="shrink-0">
              <img
                src={image?.[1].link}
                alt={name}
                className="w-14 rounded-lg"
              />
            </button>
            <div>
              <p className="truncate w-64 hover:font-semibold">
                <button onClick={() => handlePlay(id, type)}>
                  {formatName(name)}
                </button>
              </p>
              <p className="capitalize">{type}</p>
            </div>
          </div>
        );
      })}
    </article>
  );
};
export default SearchTrending;
