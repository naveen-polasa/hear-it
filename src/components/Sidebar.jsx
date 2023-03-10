import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <section className="hidden md:flex relative px-5 py-5 left-0 w-56 h-[calc(100vh-6rem)] flex-col gap-y-5">
      <div>
        <h3 className="text-xl py-2 font-semibold">Browse</h3>
        <div className="flex flex-col gap-y-2 text-lg capitalize font-mono">
          <Link to="browse/new_releases">New Releases</Link>
          <Link to="browse/top_charts">Top Chart</Link>
          <Link to="browse/top_playlists">Top Playlists</Link>
          <Link to="browse/albums">Albums</Link>
        </div>
      </div>
      <div>
        <h3 className="text-xl py-2 font-semibold">My Library</h3>
        <div className="flex flex-col gap-y-2 text-lg capitalize font-mono">
          <Link to="library/history">history</Link>
          <Link to="library/songs">songs</Link>
          <Link to="library/albums">albums</Link>
          <Link to="library/artists">artists</Link>
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
