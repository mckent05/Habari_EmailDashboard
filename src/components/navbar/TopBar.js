import React from "react";

const Topbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom px-3">
      <button
        className="btn btn-outline-secondary d-md-none me-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#mobileSidebar"
        aria-controls="mobileSidebar"
      >
        <i className="bi bi-list"></i>
      </button>

      <a className="navbar-brand fw-bold" href="#">
        📧 MailApp
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#topbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="topbarNav">
        <form className="ms-auto d-flex my-2 my-lg-0">
          <input
            className="form-control form-control-sm me-2"
            type="search"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>

        <ul className="navbar-nav ms-3 align-items-center">
          <li className="nav-item me-2">
            <button className="btn btn-link text-dark">
              <i className="bi bi-bell"></i>
            </button>
          </li>
          <li className="nav-item me-2">
            <button className="btn btn-link text-dark">
              <i className="bi bi-gear"></i>
            </button>
          </li>
          <li className="nav-item dropdown">
            <a
              href="#"
              className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
              id="profileDropdown"
              data-bs-toggle="dropdown"
            >
              <img
                src="https://via.placeholder.com/32"
                alt="profile"
                className="rounded-circle me-2"
              />
              <span>Ari Budin</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Topbar;
