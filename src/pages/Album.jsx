import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SongCard, SongsCard } from "../components/cards";
import { homeDataFetch } from "../features/homeSlice";

const Album = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homeDataFetch());
  }, []);

  return (
    <article>
      <SongCard />
      <SongsCard />
    </article>
  );
};
export default Album;
