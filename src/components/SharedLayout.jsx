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
      <div
        className="absolute top-0 md:ml-60 mt-20 p-2 h-[calc(100vh-5rem)] py-3 2xl:w-[calc(100%-20rem)] 
     max-w-[75rem] pb-20 overflow-y-scroll"
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