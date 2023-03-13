import { useSelector } from "react-redux";
import MusicCard from "../../components/cards/MusicCard";

const MyAlbums = () => {
  const { albums } = useSelector((store) => store.storage);
  return (
    <section>
      <h3 className="py-6 px-8 text-2xl font-semibold">My Albums</h3>
      <MusicCard data={albums} />
    </section>
  );
};
export default MyAlbums;
