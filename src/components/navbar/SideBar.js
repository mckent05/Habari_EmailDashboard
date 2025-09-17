import React, { useState, useEffect } from "react";
import navLinks from "./links";
import "./sidebar.css";

const Sidebar = () => {
  const [activeParent, setActiveParent] = useState("marketing");
  const [activeChild, setActiveChild] = useState("");

  const handleParentClick = (parent) => {
    setActiveParent(parent);
    setActiveChild("");
  };

  const handleChildClick = (e, child) => {
    e.stopPropagation();
    setActiveChild(child);
  };

  return (
    <nav className="sidenav">
      <div className="brand px-3 py-3">
        <span className="logo">B</span> brutalism
      </div>
      <ul className="nav flex-column">
        {navLinks.map((navLink) => (
          <li
            key={navLink.pathName}
            className={`nav-item ${
              activeParent === navLink.pathName ? "active-parent" : ""
            }`}
            onClick={() => handleParentClick(navLink.pathName)}
          >
            <span className="nav-link">{navLink.pathName}</span>

            {activeParent === navLink.pathName &&
              navLink.subLinks.length > 0 && (
                <ul className="nav flex-column ms-3">
                  {navLink.subLinks.map((link) => (
                    <li
                      key={link}
                      className={`nav-item ${
                        activeChild === link ? "active-child" : ""
                      }`}
                      onClick={(e) => handleChildClick(e, link)}
                    >
                      <span className="nav-link">{link}</span>
                    </li>
                  ))}
                </ul>
              )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
