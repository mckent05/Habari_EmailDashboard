import React, { useState } from "react";
import { Button, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

function Sidebar({ handleFilter }) {
  const { user } = useSelector((state) => state.user);

  const { unreadCount } = useSelector((state) => state.emails);

  const [activeKey, setActiveKey] = useState("inbox");

  const navItems = [
    { key: "inbox", label: "Inbox", icon: "bi-inbox", count: unreadCount, onClick: () => handleFilter(false) },
    { key: "starred", label: "Starred", icon: "bi-star", onClick: () => handleFilter(true) },
    { key: "sent", label: "Sent", icon: "bi-send" },
    { key: "important", label: "Important", icon: "bi-exclamation-circle" },
    { key: "drafts", label: "Drafts", icon: "bi-file", count: 30 },
    { key: "trash", label: "Trash", icon: "bi-trash" },
  ];

  return (
    <div className="d-flex flex-column h-100 p-3 sidebar bg-white">

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
          <h6 className="mb-0">{user?.name || "User"}</h6>
          <p className="text-muted mb-0" style={{ fontSize: "0.85rem" }}>
            Web developer
          </p>
        </div>
      </div>

      <Button className="d-flex justify-content-center align-items-center w-100 mb-4 compose-btn">
        <i className="bi bi-pencil-square me-2"></i>
        <p className="mb-0 fw-semibold">Compose</p>
      </Button>


      <div className="flex-column gap-2 mb-4">
        {navItems.map((item) => (
          <div
            key={item.key}
            onClick={() => {
              setActiveKey(item.key);
              item.onClick?.();
            }}
            className={`d-flex justify-content-between align-items-center w-100 px-2 py-2 fw-semibold rounded ${
              activeKey === item.key ? "active-nav" : ""
            }`}
          >
            <div className="d-flex align-items-center">
              <i className={`bi ${item.icon} me-2`}></i>
              <p className="mb-0">{item.label}</p>
            </div>
            {item.count && <p className="mb-0 text-muted">{item.count}</p>}
          </div>
        ))}
      </div>

      <hr />


      <p className="text-muted fw-semibold mb-2">Labels</p>
      <Nav className="flex-column gap-2">
        {["Work", "Family", "Friends", "Office"].map((label) => (
          <Nav.Link
            key={label}
            onClick={() => setActiveKey(label.toLowerCase())}
            className={`d-flex align-items-center px-2 py-2 rounded ${
              activeKey === label.toLowerCase() ? "active-nav" : ""
            }`}
          >
            <i className="bi bi-tag me-2"></i>
            <p className="mb-0">{label}</p>
          </Nav.Link>
        ))}
      </Nav>
    </div>
  );
}

export default Sidebar;
