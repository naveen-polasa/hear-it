import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MusicCards from "../MusicCard";
import { playerSongFetch } from "../../features/playerSlice";
import { homeDataFetch } from "../../features/homeSlice";

const TopAlbums = () => {
  const { data, trending } = useSelector((store) => store.home);
  // console.log(albums, playlists, charts, trending);
  // playlists => top playlists
  // charts => top charts
  // trending/albums => top albums
  // console.log(trending);
  const { songs, albums } = trending;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homeDataFetch());
    dispatch(playerSongFetch());
  }, []);

  return (
    <section>
      <h3 className="py-6 px-8 text-2xl font-semibold">Top Albums</h3>
      <MusicCards data={albums} />
    </section>
  );
};
export default TopAlbums;
