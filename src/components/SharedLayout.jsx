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
      <div
        className="absolute top-0 md:ml-60 mt-20 p-2 h-[calc(100vh-5rem)] py-3 w-screen md:w-[calc(100%-15rem)]
     max-w-[75rem] pb-24 overflow-y-scroll border-r-2"
      >
        <Outlet />
      </div>
      <div>
        <Player />
      </div>
    </div>
  );
};
export default SharedLayout;
