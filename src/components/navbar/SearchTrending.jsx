import { useDispatch, useSelector } from "react-redux";
import { addToHistory } from "../../features/storageSlice";
import { formatName } from "../../utils/utilFunctions";

const SearchTrending = ({ handlePlay }) => {
  const { trending } = useSelector((store) => store.home);
  const dispatch = useDispatch();
  const { songs, albums } = trending;

  return (
    <article className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-3 pb-5 pt-2 flex-wrap shrink-0 overflow-x-hidden overflow-y-scroll scrollbar h-[calc(100vh-13rem)] md:h-fit">
      {songs?.slice(0, 3).map((song) => {
        const { name, image, type, id } = song;
        return (
          <div
            key={id}
            className="flex gap-x-5 items-center hover:cursor-pointer"
            onClick={() => {
              if (type !== "artist") {
                handlePlay(id, type);
                dispatch(addToHistory({ ...song }));
              }
            }}
          >
            <img
              src={image?.[1].link}
              alt={name}
              className="w-14 rounded-lg "
              onClick={() => handlePlay(id, type)}
            />
            <div>
              <p className="truncate w-40 md:w-64 font-semibold">
                {formatName(name)}
              </p>
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
            className={`flex gap-x-5  items-center ${
              type !== "artist" && "hover:cursor-pointer"
            }`}
            onClick={() => {
              if (type !== "artist") {
                handlePlay(id, type);
                dispatch(addToHistory({ ...album }));
              }
            }}
          >
            <img
              src={image?.[1].link}
              alt={name}
              className="w-14 rounded-lg shrink-0"
            />
            <div>
              <p className="truncate w-40 md:w-64 font-semibold">
                {formatName(name)}
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
