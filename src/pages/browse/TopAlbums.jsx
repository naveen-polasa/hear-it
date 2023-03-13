import { useSelector } from "react-redux";
import MusicCard from "../../components/cards/MusicCard";
import Loading from "../../utils/Loading";
import NotFound from "../../utils/NotFound";

const TopAlbums = () => {
  const { trending, isLoading, isError } = useSelector((store) => store.home);
  const { songs, albums } = trending;

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <NotFound />;
  }

  return (
    <section>
      <h3 className="py-3 md:py-6 px-8 text-2xl font-semibold">Top Albums</h3>
      <MusicCard data={albums} />
    </section>
  );
};
export default TopAlbums;
