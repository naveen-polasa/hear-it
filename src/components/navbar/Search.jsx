import { useDispatch, useSelector } from "react-redux";
import {
  handleIsActive,
  setSearchVal,
  handleIsSearchActive,
} from "../../features/searchSlice";
import SearchResult from "./SearchResult";
const Search = () => {
  const { searchVal, isActive, isSearchActive } = useSelector(
    (store) => store.search
  );
  const dispatch = useDispatch();

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className={`px-6 sm:mr-7 md:mr-0 w-44 sm:w-60 lg:w-[30rem] h-12 rounded-3xl border-2 
          ${
            isActive &&
            isSearchActive &&
            "focus:absolute z-20 outline-none border-b-0 top-4 rounded-b-none focus:duration-300  md:right-[6%] left-[7%] right-0 sm:left-[11.8%] md:left-[15%] 2xl:right-[5%] 2xl:left-[10%] shadow-lg focus:w-[77%] md:focus:w-[80%] 2xl:focus:w-[85%] focus:mx-auto"
          }`}
          placeholder={`${!isActive ? "Search..." : ""}`}
          value={searchVal}
          onChange={(e) => dispatch(setSearchVal(e.target.value))}
          onSelect={() => {
            dispatch(handleIsActive(true));
            dispatch(handleIsSearchActive(true));
          }}
          onMouseLeave={() => {
            dispatch(handleIsSearchActive(false));
          }}
        />
      </form>
      <div
        className={`pl-3 sm:pl-6 w-40 rounded-t-lg rounded-b-3xl border-2 bg-white ${
          isActive && isSearchActive
            ? "absolute z-20 top-[4rem] md:right-[6%] left-[7%] right-0 sm:left-[11.8%] md:left-[15%] 2xl:right-[5%] 2xl:left-[10%] shadow-lg w-[77%] md:w-[80%] 2xl:w-[85%] mx-auto rounded-t-none"
            : "hidden"
        }
           `}
        onMouseEnter={() => {
          dispatch(handleIsSearchActive(true));
        }}
        onMouseLeave={() => {
          dispatch(handleIsActive(false));
        }}
        onClick={() => dispatch(handleIsActive(false))}
      >
        <SearchResult />
      </div>
    </div>
  );
};
export default Search;
