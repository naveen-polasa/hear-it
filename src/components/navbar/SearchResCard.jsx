import { formatName } from "../../utils/utilFunctions";

const SearchResCard = ({ songs, albums, topQuery, handlePlay }) => {
  let data = [];
  if (songs) data = songs;
  else if (albums) data = albums;
  else data = topQuery;
  return (
    <>
      {data?.results?.map((res) => {
        const { title, description, image, type, id } = res;
        return (
          <div key={id} className="flex gap-x-5 my-3">
            <button onClick={() => handlePlay(id, type)} className="shrink-0">
              <img
                src={image?.[1].link}
                alt={title}
                className="w-14 rounded-lg"
                onClick={() => handlePlay(id, type)}
              />
            </button>
            <div>
              <p className="truncate w-64  hover:font-semibold">
                <button
                  className="capitalize"
                  onClick={() => handlePlay(id, type)}
                >
                  {formatName(title)}
                </button>
              </p>
              <p className="capitalize truncate w-64 ">{description} </p>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default SearchResCard;
