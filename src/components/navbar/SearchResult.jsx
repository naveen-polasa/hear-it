import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleIsPlaying, playSong } from "../../features/playerSlice";
import { searchValFetch } from "../../features/searchSlice";
import { formatName } from "../../utils/utilFunctions";
import SearchResCard from "./SearchResCard";
import SearchTrending from "./SearchTrending";

const SearchResult = () => {
  const { searchVal, result } = useSelector((store) => store.search);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handlePlay = (id, type) => {
    dispatch(playSong({ id, type }));
    dispatch(handleIsPlaying(true));
    const path = `${type}/${id}`;
    navigate(path);
  };
  useEffect(() => {
    if (!searchVal) return;
    dispatch(searchValFetch(searchVal));
  }, [searchVal]);

  if (!searchVal) {
    return (
      <>
        <p className="text-xl py-2 font-semibold font-mono">Trending</p>
        <SearchTrending />
      </>
    );
  }
  const { topQuery, songs, albums } = result;

  console.log(topQuery);
  return (
    <article className="grid md:grid-cols-2 xl:grid-cols-3 gap-y-3 pb-5 pt-2 flex-wrap shrink-0 overflow-y-scroll h-[calc(100vh-10rem)]">
      <div>
        <p className="text-lg py-2 font-semibold font-mono">Top Result</p>
        <SearchResCard topQuery={topQuery} handlePlay={handlePlay} />
      </div>
      <div>
        <p className="text-lg py-2 font-semibold font-mono">Albums</p>
        <SearchResCard albums={albums} handlePlay={handlePlay} />
      </div>
      <div>
        <p className="text-lg py-2 font-semibold font-mono">Songs</p>
        <SearchResCard songs={songs} handlePlay={handlePlay} />
      </div>
    </article>
  );
};
export default SearchResult;
