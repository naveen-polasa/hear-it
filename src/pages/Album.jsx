import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SongCard, SongsCard } from "../components/cards";
import { homeDataFetch } from "../features/homeSlice";
import { handleIsPlaying } from "../features/playerSlice";

const Album = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homeDataFetch());
    dispatch(handleIsPlaying(false));
  }, []);

  return (
    <article>
      <SongCard />
      <SongsCard />
    </article>
  );
};
export default Album;
