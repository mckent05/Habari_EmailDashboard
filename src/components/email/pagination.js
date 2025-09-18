import React from "react";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  emailLength,
  totalLength,
  pageSize,
}) => {
  if (totalPages <= 1) return null;

  const start = totalLength === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalLength);

  return (
    <div className="d-flex justify-content-between align-items-center px-4 py-3 bg-white border-top">
      <p className="mb-0 text-muted fw-semibold">
        {start} – {end} of {totalLength}
      </p>

      <div className="d-flex align-items-center gap-2">
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="d-flex align-items-center justify-content-center rounded-circle bg-light text-dark border-0 p-2 disabled:opacity-50"
          style={{ width: "32px", height: "32px" }}
        >
          <i className="bi bi-chevron-left"></i>
        </button>

        <button
          type="button"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="d-flex align-items-center justify-content-center rounded-circle bg-light text-dark border-0 p-2 disabled:opacity-50"
          style={{ width: "32px", height: "32px" }}
        >
          <i className="bi bi-chevron-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
