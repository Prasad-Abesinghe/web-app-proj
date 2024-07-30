"use client";

import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiTable,
  HiUser,
} from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

const SideBar = () => {
  const { user } = useContext(AuthContext);
  return (

    <Sidebar
      className=" h-full relative"
    >
      <Sidebar.Logo
        href="#"
        className=" "
        img={user?.photoURL}
        imgAlt="{ }"
      >
        <p className=" text-black">{user?.displayName || "Demo User"}</p>
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/upload"
            icon={HiOutlineCloudUpload}
          >
            Upload Phone
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Phones
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/" icon={FaHome}>
            Back to Home
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>

  );
};

export default SideBar;
