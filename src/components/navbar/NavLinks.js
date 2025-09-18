import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = ({ icon, pathName, isOpen, hasChildren }) => {
  return (
    <div className="d-flex justify-content-between align-items-center px-3 py-2">
      <NavLink
        to={pathName === "inbox" ? `/app/${pathName}` : "/"}
        className="nav-link nav-item d-flex"
      >
        <i className={`${icon} me-2`}></i>
        <div className="d-flex justify-content-between w-100">
          <span className="text-capitalize fw-bold">{pathName}</span>
          {hasChildren && (
            <i
              className={`bi ${isOpen ? "bi-chevron-up" : "bi-chevron-down"}`}
            ></i>
          )}
        </div>
      </NavLink>
    </div>
  );
};

export default NavLinks;
