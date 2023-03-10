import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MusicCards from "../components/MusicCards";
import { homeDataFetch } from "../features/homeSlice";

const Home = () => {
  const { data, albums, playlists, charts, trending } = useSelector(
    (store) => store.home
  );
  // console.log(albums, playlists, charts, trending);
  console.log(albums);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(homeDataFetch());
  }, []);

  return (
    <section>
      <h3 className="py-6 text-2xl font-semibold">New Songs</h3>
      <MusicCards data={albums} />
    </section>
  );
};
export default Home;
