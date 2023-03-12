import { Link } from "react-router-dom";
import Search from "./Search";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="relative h-20 flex items-center justify-between px-2 border-b-2 border-x-2">
      <div className="flex items-center gap-x-3 md:gap-x-9">
        <div className="px-3 shrink-0">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[70px] sm:w-24 md:w-28" />
          </Link>
        </div>
        <Link
          to="/"
          className="font-mono sm:text-xl md:hidden hover:border-b border-red-400 duration-150"
        >
          Home
        </Link>
      </div>
      <Search />
      <div className="gap-6 justify-center mx-16 hidden md:flex font-mono">
        <Link
          to="/"
          className="font-mono text-xl hidden md:flex hover:border-b border-red-400 duration-150"
        >
          Home
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
