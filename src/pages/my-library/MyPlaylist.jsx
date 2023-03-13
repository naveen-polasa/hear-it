import { useSelector } from "react-redux";
import PlaylistCard from "../../components/cards/PlaylistCard";

const MyPlaylist = () => {
  const { playlists } = useSelector((store) => store.storage);
  return (
    <section>
      <h3 className="py-6 px-8 text-2xl font-semibold">My Playlists</h3>
      <PlaylistCard data={playlists} />
    </section>
  );
}
export default MyPlaylist