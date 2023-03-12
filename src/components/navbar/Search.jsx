import { useDispatch, useSelector } from "react-redux";
import { handleIsActive, setSearchVal } from "../../features/searchSlice";
import SearchResult from "./SearchResult";
const Search = () => {
  const { searchVal, isActive } = useSelector((store) => store.search);
  const dispatch = useDispatch();
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className={`px-6 mx-4 md:mx-0 w-56 lg:w-[33rem] h-12 rounded-3xl border-2 
          ${
            isActive &&
            "focus:absolute top-4 xl:focus:rounded-b-3xl right-[9vw] md:right-0 left-[10vw] focus:shadow-lg focus:w-[82vw]  focus:duration-500 focus:mx-auto outline-none"
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
        className={`px-6 mx-4 md:mx-0 w-[24rem] rounded-t-lg  rounded-b-3xl border-t-0 border-2 bg-white ${
          isActive
            ? "absolute z-10 top-[4rem] right-16 md:right-0 left-[13%] md:left-[15%] xl:left-[13%] shadow-lg w-[80%] xl:w-[85%] mx-auto "
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
