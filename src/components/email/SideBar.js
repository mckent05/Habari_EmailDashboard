import React from "react";
import { Button, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

function Sidebar({ handleFilter }) {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="d-flex flex-column h-100 p-3 sidebar bg-white">
      {/* User Profile */}
      <div className="d-flex align-items-center mb-4">
        {user?.avatar ? (
          <img
            src={user.avatar}
            alt="profile"
            className="rounded-circle me-3"
            style={{ width: "40px", height: "40px" }}
          />
        ) : (
          <i className="bi bi-person-circle fs-2 me-3"></i>
        )}
        <div>
          <h6 className="mb-0">{user?.name || "Temitope"}</h6>
          <p className="text-muted mb-0" style={{ fontSize: "0.85rem" }}>
            Web developer
          </p>
        </div>
      </div>

      {/* Compose Button */}
      <Button className="d-flex justify-content-center align-items-center w-100 mb-4 compose-btn">
        <i className="bi bi-pencil-square me-2"></i>
        <p className="mb-0 fw-semibold">Compose</p>
      </Button>

      {/* Navigation */}
      <Nav className="flex-column gap-2 mb-4">
        <Nav.Link
          active
          onClick={() => handleFilter(false)}
          className="d-flex justify-content-between align-items-center w-100 fw-semibold rounded px-2 py-2"
          style={{
            backgroundColor: "#f1f3f4",
            border: "1px solid black",
            color: "black",
          }}
        >
          <div className="d-flex align-items-center">
            <i className="bi bi-inbox me-2"></i>
            <p className="mb-0">Inbox</p>
          </div>
          <p className="mb-0 text-muted">24</p>
        </Nav.Link>

        <Nav.Link
          onClick={() => handleFilter(true)}
          className="d-flex align-items-center px-2 py-2"
        >
          <i className="bi bi-star me-2"></i>
          <p className="mb-0">Starred</p>
        </Nav.Link>

        <Nav.Link className="d-flex align-items-center px-2 py-2">
          <i className="bi bi-send me-2"></i>
          <p className="mb-0">Sent</p>
        </Nav.Link>

        <Nav.Link className="d-flex align-items-center px-2 py-2">
          <i className="bi bi-exclamation-circle me-2"></i>
          <p className="mb-0">Important</p>
        </Nav.Link>

        <Nav.Link className="d-flex justify-content-between align-items-center px-2 py-2">
          <div className="d-flex align-items-center">
            <i className="bi bi-file me-2"></i>
            <p className="mb-0">Drafts</p>
          </div>
          <p className="mb-0 text-muted">30</p>
        </Nav.Link>

        <Nav.Link className="d-flex align-items-center px-2 py-2">
          <i className="bi bi-trash me-2"></i>
          <p className="mb-0">Trash</p>
        </Nav.Link>
      </Nav>

      <hr />

      {/* Labels */}
      <p className="text-muted fw-semibold mb-2">Labels</p>
      <Nav className="flex-column gap-2">
        {["Work", "Family", "Friends", "Office"].map((label) => (
          <Nav.Link key={label} className="d-flex align-items-center px-2 py-2">
            <i className="bi bi-tag me-2"></i>
            <p className="mb-0">{label}</p>
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
}

export default Sidebar;
