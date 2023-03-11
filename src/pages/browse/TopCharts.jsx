import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerSongFetch } from "../../features/playerSlice";
import { homeDataFetch } from "../../features/homeSlice";
import MusicChartCard from "../../components/cards/MusicChartCard";

const TopCharts = () => {
  const { charts } = useSelector((store) => store.home);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homeDataFetch());
    dispatch(playerSongFetch());
  }, []);

  return (
    <section>
      <h3 className="py-6 px-8 text-2xl font-semibold">Top Music Charts</h3>
      <MusicChartCard data={charts} />
    </section>
  );
};
export default TopCharts;
