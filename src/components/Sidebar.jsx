import { Link, NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <section className="hidden md:flex relative px-5 py-3 left-0 w-56 h-[calc(100vh-5rem)] flex-col gap-y-5 pb-24  overflow-y-scroll border-x-2 scrollbar">
      <div>
        <h3 className="text-xl py-2 font-semibold">Browse</h3>
        <div className="flex flex-col gap-y-2 text-lg capitalize font-mono">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 scale-105 translate-x-2"
                : "duration-300 hover:translate-x-1"
            }
          >
            New Releases
          </NavLink>
          <NavLink
            to="top_charts"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 scale-105 translate-x-2"
                : "duration-300 hover:translate-x-1"
            }
          >
            Top Charts
          </NavLink>
          <NavLink
            to="top_playlists"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 scale-105 translate-x-2"
                : "duration-300 hover:translate-x-1"
            }
          >
            Top Playlists
          </NavLink>
          <NavLink
            to="top_albums"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 scale-105 translate-x-2"
                : "duration-300 hover:translate-x-1"
            }
          >
            Top Albums
          </NavLink>
        </div>
      </div>
      <div>
        <h3 className="text-xl py-2 font-semibold">My Library</h3>
        <div className="flex flex-col gap-y-2 text-lg capitalize font-mono">
          <NavLink
            to="history"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 scale-105 translate-x-2"
                : "duration-300 hover:translate-x-1"
            }
          >
            history
          </NavLink>
          <NavLink
            to="songs"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 scale-105 translate-x-2"
                : "duration-300 hover:translate-x-1"
            }
          >
            songs
          </NavLink>
          <NavLink
            to="albums"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 scale-105 translate-x-2"
                : "duration-300 hover:translate-x-1"
            }
          >
            albums
          </NavLink>
          <NavLink
            to="playlists"
            className={({ isActive }) =>
              isActive
                ? "text-red-500 scale-105 translate-x-2"
                : "duration-300 hover:translate-x-1"
            }
          >
            playlists
          </NavLink>
        </div>
      </div>
      {/* <div>
        <h3 className="text-xl py-2 font-semibold">My Playlists</h3>
        <div className="flex flex-col gap-y-2 text-lg capitalize font-mono">
          <Link to="library/my_playlists">podcasts</Link>
          <h3>my playlists</h3>
        </div>
      </div> */}
    </section>
  );
};
export default Sidebar;
