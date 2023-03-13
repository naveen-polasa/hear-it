import { useSelector } from "react-redux";
import MusicCard from "../../components/cards/MusicCard";

const History = () => {
  const { history } = useSelector((store) => store.storage);
  return (
    <section>
      <h3 className="py-6 px-8 text-2xl font-semibold">My History</h3>
      <MusicCard data={history} />
    </section>
  );
};
export default History;
