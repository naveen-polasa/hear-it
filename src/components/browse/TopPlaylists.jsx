import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerSongFetch } from "../../features/playerSlice";
import { homeDataFetch } from "../../features/homeSlice";
import PlaylistCard from "../PlaylistCard";

const TopPlaylists = () => {
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
  console.log(playlists);
  return (
    <section>
      <h3 className="py-6 px-8 text-2xl font-semibold">Top Playlists</h3>
      <PlaylistCard data={playlists} />
    </section>
  );
};
export default TopPlaylists;
