import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar";
import { Player } from "./player";
import Sidebar from "./Sidebar";

const SharedLayout = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Sidebar />
      </div>
      <div className="absolute top-0 sm:ml-44 md:ml-60 mt-20 sm:p-2 h-[calc(100vh-10rem)] sm:h-[calc(100vh-5rem)] py-3 w-screen sm:w-[calc(100%-11rem)] md:w-[calc(100%-15rem)] max-w-[75rem] sm:pb-24 overflow-y-scroll scrollbar scroll-smooth border-r-2">
        <Outlet />
      </div>
      <div>
        <Player />
      </div>
    </div>
  );
};
export default SharedLayout;
