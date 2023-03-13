import { useDispatch, useSelector } from "react-redux";
import MusicCard from "../../components/cards/MusicCard";
import { clearFromStorage } from "../../features/storageSlice";
import EmptyHistory from "../../utils/EmptyHistory";

const History = () => {
  const { history } = useSelector((store) => store.storage);
  const dispatch = useDispatch();
  return (
    <section>
      <div className="flex items-center justify-between mb-3 sm:mb-0">
        <h3 className="py-3 md:py-6 px-8 sm:text-2xl font-semibold">My History</h3>
        {history.length > 0 && (
          <button
            className="py-1 md:py-2 my-2 mx-6 px-4 rounded-2xl bg-red-400 text-white hover:scale-105 duration-300"
            onClick={() => {
              dispatch(clearFromStorage("history"));
            }}
          >
            Clear History
          </button>
        )}
      </div>
      {history.length < 1 ? <EmptyHistory /> : <MusicCard data={history} />}
    </section>
  );
};
export default History;
