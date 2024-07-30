import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const DashBoardLayout = () => {
  return (
    <div className=" flex text-black h-full mr-0 ml-0 mb-0 bg-white gap-4 flex-col md:flex-row">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default DashBoardLayout;
