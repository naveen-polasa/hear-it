import { useSelector } from "react-redux";
import SearchTrending from "./SearchTrending";

const SearchResult = () => {
  const { searchVal } = useSelector((store) => store.search);
  if (!searchVal) {
    return <>
    <p className="text-xl py-2 font-semibold font-mono">Trending</p>
    <SearchTrending />
    </> 
  }
  return <div>SearchResult</div>;
};
export default SearchResult;
