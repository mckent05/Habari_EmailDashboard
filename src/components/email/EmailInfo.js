import React from "react";

const EmailInfo = ({ subject, body, createdAt, hasAttachments, isStarred }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    const now = new Date();

    const isToday =
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear();

    const yesterday = new Date();
    yesterday.setDate(now.getDate() - 1);
    const isYesterday =
      date.getDate() === yesterday.getDate() &&
      date.getMonth() === yesterday.getMonth() &&
      date.getFullYear() === yesterday.getFullYear();

    if (isToday) {
      return date.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else if (isYesterday) {
      return "Yesterday";
    } else {
      return date.toLocaleDateString([], {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    }
  };

  return (
    <div className="list-group-item d-flex align-items-center justify-content-between">
      {/* Left Section */}
      <div className="d-flex align-items-start">
        <input type="checkbox" className="form-check-input me-3 mt-1" />

        {/* Star */}
        <span className="me-3" style={{ fontSize: "1.1rem" }}>
          {isStarred ? (
            <i className="bi bi-star-fill text-warning"></i>
          ) : (
            <i className="bi bi-star-fill"></i>
          )}
        </span>

        {/* Email Content */}
        <div className="d-flex flex-column">
          <span className="text-dark fw-semibold">{subject}</span>
          <small
            className="text-muted text-truncate"
            style={{ maxWidth: "400px" }}
          >
            {body}
          </small>
        </div>
      </div>

      {/* Right Section */}
      <div className="d-flex justify-content-between align-items-center gap-3 w-40">
        {hasAttachments && <i className="bi bi-paperclip text-muted"></i>}
        <small className="text-muted">{formatDate(createdAt)}</small>
      </div>
    </div>
  );
};

export default EmailInfo;
