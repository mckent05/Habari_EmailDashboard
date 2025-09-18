import React from "react";
import SearchFilter from "./SearchFilter";
import Pagination from "./pagination";

function MainHeader({
  searchQuery,
  onSearch,
  onPageChange,
  currentPage,
  totalPages,
  emailLength,
  totalLength,
  pageSize,
}) {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center p-2 border-bottom">
        <p className="fw-bold mb-0">Inbox</p>
        <SearchFilter onSearch={onSearch} initialValue={searchQuery} />
      </div>

      <div className="d-flex justify-content-between align-items-center p-2">
        <div className="d-flex align-items-center">
          <input type="checkbox" className="form-check-input me-2" />
          <button className="btn btn-light btn-sm">
            <i className="bi bi-arrow-clockwise"></i>
          </button>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
          emailLength={emailLength}
          totalLength={totalLength}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
}

export default MainHeader;
