import { useDispatch } from "react-redux";
import { addToHistory } from "../../features/storageSlice";
import { formatName } from "../../utils/utilFunctions";

const SearchResCard = ({ songs, albums, topQuery, handlePlay }) => {
  const dispatch = useDispatch();
  let data = [];
  if (songs) data = songs;
  else if (albums) data = albums;
  else data = topQuery;
  return (
    <>
      {data?.results?.map((res) => {
        const { title, description, image, type, id } = res;

        return (
          <div
            key={id}
            className={`flex gap-x-5 my-3  ${
              type !== "artist" && "hover:cursor-pointer"
            } `}
            onClick={() => {
              if (type !== "artist") {
                handlePlay(id, type);
                dispatch(addToHistory(res));
              }
            }}
          >
            <img
              src={image?.[1].link}
              alt={title}
              className="w-14 rounded-lg shrink-0"
              onClick={() => handlePlay(id, type)}
            />
            <div>
              <p className="truncate w-40 sm:w-64 capitalize font-semibold">
                {formatName(title)}
              </p>
              <p className="capitalize truncate w-40 sm:w-64">{description} </p>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default SearchResCard;
