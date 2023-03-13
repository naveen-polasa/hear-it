import { useSelector } from "react-redux";
import PlaylistCard from "../../components/cards/PlaylistCard";
import Loading from "../../utils/Loading";
import NotFound from "../../utils/NotFound";

const TopPlaylists = () => {
  const { playlists, isLoading, isError } = useSelector((store) => store.home);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <NotFound />;
  }

  return (
    <section>
      <h3 className="py-3 md:py-6 px-8 text-2xl font-semibold">
        Top Playlists
      </h3>
      <PlaylistCard data={playlists} />
    </section>
  );
};
export default TopPlaylists;
