import { useSelector } from "react-redux";
import { SongCard, SongsCard } from "../components/cards";
import Loading from "../utils/Loading";
import NotFound from "../utils/NotFound";

const Song = () => {
  const { isLoading, isError } = useSelector((store) => store.player);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <NotFound />;
  }

  return (
    <article className="px-1">
      <SongCard />
      <SongsCard />
    </article>
  );
};
export default Song;
