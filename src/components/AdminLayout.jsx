import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-full h-20 fixed left-[20%] top-0 right-0 p-5 bg-amber-300">
      nav
    </nav>
  );
};

const AdminLayout = () => {
  return (
    <div className="w-full h-screen">
      <Sidebar />
      <Navbar />
      <div className="w-[80%] h-[calc(100vh-80px)] fixed left-[20%] top-20 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
