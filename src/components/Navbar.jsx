import { Link } from "react-router-dom";
import Search from "./navbar/Search";
import Languages from "./navbar/Languages";
import Profile from "./navbar/Profile";

const Navbar = () => {
  return (
    <div className="h-20 flex items-center justify-between px-2">
      <div className="flex items-center gap-x-9">
        <div className="px-3 shrink-0">
          <Link to="/">
            <img
              src="/src/assets/logo.png"
              alt="logo"
              className="w-24 md:w-28"
            />
          </Link>
        </div>
        <Link to="/music" className="font-mono text-xl hidden lg:flex">
          Music
        </Link>
        <Link to="podcasts" className="font-mono text-xl hidden lg:flex">
          Podcasts
        </Link>
      </div>
      <Search />
      <div className="gap-6 justify-center mx-16 hidden md:flex font-mono">
        <Languages />
        <Profile />
      </div>
    </div>
  );
};
export default Navbar;
