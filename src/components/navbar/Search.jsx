import { useDispatch, useSelector } from "react-redux";
import { handleIsActive, setSearchVal } from "../../features/searchSlice";
import SearchResult from "./SearchResult";
const Search = () => {
  const { searchVal, isActive } = useSelector((store) => store.search);
  const dispatch = useDispatch();

  // outline-none right-[9vw] md:right-0 left-[10vw] focus:shadow-lg focus:w-[82vw]  focus:duration-500 focus:mx-auto
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className={`px-6 mr-5 sm:mr-7 md:mr-0 w-40 sm:w-60 h-12 rounded-3xl border-2 
          ${
            isActive &&
            "focus:absolute outline-none border-b-0 top-4 rounded-b-none focus:duration-300 right-0 md:right-[6%] left-[12.6%] sm:left-[11.8%] md:left-[15%] 2xl:right-[5%] 2xl:left-[10%] shadow-lg focus:w-[77%] md:focus:w-[80%] 2xl:focus:w-[85%] focus:mx-auto"
          }`}
          placeholder={`${!isActive ? "Search..." : ""}`}
          value={searchVal}
          onChange={(e) => dispatch(setSearchVal(e.target.value))}
          onSelect={() => {
            dispatch(handleIsActive(true));
          }}
        />
      </form>
      <div
        className={`pl-6 w-40 rounded-t-lg rounded-b-3xl border-2 bg-white ${
          isActive
            ? "absolute z-10 top-[4rem] right-0 md:right-[6%] left-[12.6%] sm:left-[11.8%] md:left-[15%] 2xl:right-[5%] 2xl:left-[10%] shadow-lg w-[77%] md:w-[80%] 2xl:w-[85%] mx-auto rounded-t-none"
            : "hidden"
        }
           `}
        onMouseEnter={() => dispatch(handleIsActive(true))}
        onMouseLeave={() => dispatch(handleIsActive(false))}
        onClick={() => dispatch(handleIsActive(false))}
      >
        <SearchResult />
      </div>
    </div>
  );
};
export default Search;
