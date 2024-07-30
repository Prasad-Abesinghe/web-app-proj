"use client";

import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import {
  HiChartPie,

} from "react-icons/hi";

const ShopSideBar = () => {
  return (
    <div className="fixed bg-black h-full sm:h-50">
      <Sidebar aria-label="Sidebar with content separator example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#">
              <h1>Select Your Mobile Brand</h1>
            </Sidebar.Item>

          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};

export default ShopSideBar;
