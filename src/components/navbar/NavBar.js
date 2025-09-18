import React from "react";
import Topbar from "./TopBar";
import Sidebar from "./SideBar";
import "./sidebar.css";

const NavBar = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <Topbar />
    </div>
  );
};

export default NavBar;
