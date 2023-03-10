import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playerSongFetch } from "../../features/playerSlice";
import { homeDataFetch } from "../../features/homeSlice";
import PlaylistCard from "../PlaylistCard";

const TopPlaylists = () => {
  const { playlists } = useSelector((store) => store.home);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homeDataFetch());
    dispatch(playerSongFetch());
  }, []);

  return (
    <section>
      <h3 className="py-6 px-8 text-2xl font-semibold">Top Playlists</h3>
      <PlaylistCard data={playlists} />
    </section>
  );
};
export default TopPlaylists;
