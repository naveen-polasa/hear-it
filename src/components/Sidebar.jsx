import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <section className="hidden md:flex relative px-5 py-3 left-0 w-56 h-[calc(100vh-5rem)] flex-col gap-y-5 pb-20  overflow-y-scroll">
      <div>
        <h3 className="text-xl py-2 font-semibold">Browse</h3>
        <div className="flex flex-col gap-y-2 text-lg capitalize font-mono">
          <Link to="/">New Releases</Link>
          <Link to="top_charts">Top Charts</Link>
          <Link to="top_playlists">Top Playlists</Link>
          <Link to="top_albums">Top Albums</Link>
        </div>
      </div>
      <div>
        <h3 className="text-xl py-2 font-semibold">My Library</h3>
        <div className="flex flex-col gap-y-2 text-lg capitalize font-mono">
          <Link to="history">history</Link>
          <Link to="songs">songs</Link>
          <Link to="albums">albums</Link>
          <Link to="artists">artists</Link>
        </div>
      </div>
      <div>
        <h3 className="text-xl py-2 font-semibold">My Playlists</h3>
        <div className="flex flex-col gap-y-2 text-lg capitalize font-mono">
          {/* <Link to="library/my_playlists">podcasts</Link> */}
          <h3>my playlists</h3>
        </div>
      </div>
    </section>
  );
};
export default Sidebar;
