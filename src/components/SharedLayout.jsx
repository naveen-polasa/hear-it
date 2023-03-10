import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Player from "./Player";
import Sidebar from "./Sidebar";

const SharedLayout = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Sidebar />
      </div>
      <div className="absolute top-0 md:ml-60 mt-24 p-2 h-[calc(100vh-6rem)] py-5 2xl:w-[calc(100%-24rem)] max-w-[74rem] pb-20 overflow-y-scroll">
        <Outlet />
      </div>
      <div>
        <Player />
      </div>
    </div>
  );
};
export default SharedLayout;
