import React, { useEffect, useState } from "react";
import navLinks from "./links";
import NavLinks from "./NavLinks";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation()

  const [activeParent, setActiveParent] = useState("app");
  const [activeChild, setActiveChild] = useState("email");

  const handleParentClick = (parent, hasChildren) => {
    if (hasChildren) {
      setActiveParent(activeParent === parent ? "" : parent);
      setActiveChild("");
    } else {
      setActiveParent(parent);
    }
  };

  const handleChildClick = (e, child) => {
    e.stopPropagation();
    setActiveChild(child);
  };

  useEffect(() => {
    if(location.pathname === "/") {
      setActiveParent("marketing")
      setActiveChild("")
    }
  }, [location.pathname])

  return (
    <nav className="sidenav">
      <div className="brand px-3 py-3">
        <span className="logo">B</span>rutalism
      </div>
      <ul className="nav flex-column">
        {navLinks.map((navLink) => (
          <li
            key={navLink.pathName}
            className={`nav-item ${
              activeParent === navLink.pathName ? "active-parent" : ""
            }`}
            onClick={() =>
              handleParentClick(navLink.pathName, navLink.hasChildren)
            }
          >
            <NavLinks
              pathName={navLink.pathName}
              icon={navLink.icon}
              isOpen={activeParent === navLink.pathName}
              hasChildren={navLink.hasChildren}
            />

            {activeParent === navLink.pathName &&
              navLink.subLinks &&
              navLink.subLinks.length > 0 && (
                <ul className="nav flex-column ms-3">
                  {navLink.subLinks.map((link) =>
                    link === "email" ? (
                      <li
                        key={link}
                        className={`nav-item ${
                          activeChild === link ? "active-child" : ""
                        }`}
                        onClick={(e) => handleChildClick(e, link)}
                      >
                        <NavLink
                          to={`/app/${link}s`}
                          className="child-link email"
                        >
                          {link}
                        </NavLink>
                      </li>
                    ) : (
                      <li
                        key={link}
                        className={`nav-item ${
                          activeChild === link ? "active-child" : ""
                        }`}
                        onClick={(e) => handleChildClick(e, link)}
                      >
                        <p className="child-link">{link}</p>
                      </li>
                    )
                  )}
                </ul>
              )}
          </li>
        ))}
      </ul>
      <div className="upgrade-btn d-flex flex-column justify-content-center">
        <h5>Upgrade to Pro</h5>
        <p>Are you looking for more fetaures checkout our pro version</p>
        <button className="d-flex justify-content-between align-items-center gap-1">
          <i class="bi bi-arrow-right"></i>
          Upgrade Now
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
