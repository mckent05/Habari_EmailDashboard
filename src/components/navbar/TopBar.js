import React from "react";
import { useSelector } from "react-redux";

const Topbar = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="main-content w-100">
      <nav className="navbar navbar-light bg-grey border-bottom px-3 top-nav">
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search..."
          />
        </form>
        <div className="d-flex align-items-center gap-3">
          <button className="btn btn-link position-relative">
            <i className="bi bi-gear"></i>
          </button>

          <button className="btn btn-link position-relative">
            <i className="bi bi-bell"></i>
          </button>

          <button className="btn btn-link position-relative">
            <i className="bi bi-envelope-fill"></i>
            <span className="noti-badge position-absolute start-90 translate-middle badge rounded-pill">
              {user?.unreadMessages}
            </span>
          </button>

          <button className="btn btn-link position-relative">
            <i className="bi bi-bell"></i>
            <span className="noti-badge position-absolute start-90 translate-middle badge rounded-pill">
              {user?.unreadNotifications}
            </span>
          </button>

          {user?.avatar ? (
            <img
              src="https://via.placeholder.com/30"
              alt="profile"
              className="rounded-circle"
            />
          ) : (
            <i className="bi bi-person-fill"></i>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Topbar;
