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
      <div className="absolute top-0 ml-60 mt-24 p-2 h-[calc(100vh-6rem)] w-[100%] py-5 2xl:w-[calc(100%-21rem)] max-w-[74rem] ">
        <Outlet />
      </div>
      <Player />
    </div>
  );
};
export default SharedLayout;
