import { useDispatch, useSelector } from "react-redux";
import { handleIsActive, setSearchVal } from "../../features/searchSlice";
const Search = () => {
  const { searchVal, isActive } = useSelector((store) => store.search);
  const dispatch = useDispatch();
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          className="px-6 mx-4 md:mx-0 lg:w-96 h-12 rounded-3xl border-2 
          focus:absolute top-4  right-16 md:right-0  md:left-[10vw] focus:shadow-lg sm:focus:w-[82vw]  focus:duration-1000 focus:mx-auto"
          placeholder={`${!isActive ? "Search..." : ""}`}
          value={searchVal}
          onChange={(e) => dispatch(setSearchVal(e.target.value))}
          onSelect={() => {
            dispatch(handleIsActive(true));
          }}
          onBlur={() => {
            dispatch(handleIsActive(false));
          }}
        />
      </form>
    </div>
  );
};
export default Search;
