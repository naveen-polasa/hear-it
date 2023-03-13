import { useSelector } from "react-redux";
import MusicCard from "../../components/cards/MusicCard";
import Loading from "../../utils/Loading";
import NotFound from "../../utils/NotFound";
const NewReleases = () => {
  const { albums, isLoading, isError } = useSelector((store) => store.home);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <NotFound />;
  }
  return (
    <section className="overflow-x-hidden">
      <h3 className="py-3 md:py-6 px-8 text-2xl font-semibold">New Songs</h3>
      <MusicCard data={albums} />
    </section>
  );
};
export default NewReleases;
