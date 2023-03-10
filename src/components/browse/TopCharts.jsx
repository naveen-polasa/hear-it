import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerSongFetch } from "../../features/playerSlice";
import { homeDataFetch } from "../../features/homeSlice";
import MusicChartCard from "../MusicChartCard";

const TopCharts = () => {
  const { data, albums, playlists, charts, trending } = useSelector(
    (store) => store.home
  );
  // console.log(albums, playlists, charts, trending);
  // playlists => top playlists
  // charts => top charts
  // trending/albums => top albums
  // console.log(trending);

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
