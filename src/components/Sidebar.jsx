import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <section className="relative px-5 py-5 left-0 w-60 h-[calc(100vh-6rem)] flex flex-col gap-y-5">
      <div>
        <h3 className="text-2xl py-2 font-semibold">Browse</h3>
        <div className="flex flex-col gap-y-2 text-lg capitalize">
          <Link to="browse/Songs">Songs</Link>
          <Link to="browse/albums">albums</Link>
          <Link to="browse/trending">trending</Link>
          <Link to="browse/playlists">playlists</Link>
          <Link to="browse/charts">charts</Link>
        </div>
      </div>
      <div>
        <h3 className="text-2xl py-2 font-semibold">My Library</h3>
        <div className="flex flex-col gap-y-2 text-lg capitalize">
          <Link to="library/history">history</Link>
          <Link to="library/albums">albums</Link>
          <Link to="library/podcasts">podcasts</Link>
          <Link to="library/artists">artists</Link>
          <Link to="library/songs">songs</Link>
        </div>
      </div>
    </section>
  );
};
export default Sidebar;
