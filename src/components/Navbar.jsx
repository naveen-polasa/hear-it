import { Link } from "react-router-dom";
import Search from "./navbar/Search";
import Languages from "./navbar/Languages";
import Profile from "./navbar/Profile";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      <div className="flex items-center gap-x-9">
        <div className="px-3 shrink-0">
          <img src="/src/assets/logo.png" alt="logo" className="w-28 md:w-32" />
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
