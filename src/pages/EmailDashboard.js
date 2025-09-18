import React, { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import MainHeader from "../components/email/MainHeader";
import Sidebar from "../components/email/SideBar";
import EmailList from "../components/email/EmailList";
import useDebounce from "../utils/debounceHelper";
import { fetchEmails } from "../store/emails/fetchEmails";
import "./email-dashboard.css";

const PAGE_SIZE = 15;

const EmailDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [isStarred, setIsStarred] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const debouncedSearch = useDebounce(searchQuery, 500);

  const queryParams = {
    search: debouncedSearch,
    filter,
    page: currentPage,
    limit: PAGE_SIZE,
    ...(isStarred === true && { isStarred: true }),
  };

  const { data, isLoading } = useQuery({
    queryKey: ["emails", queryParams],
    queryFn: fetchEmails,
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
  });

  const emails = data?.data || [];
  const totalLength = data?.pagination.total || 0;
  const totalPages = data?.pagination.totalPages;

  return (
    <div className="d-flex dashboard_cont">
      <Sidebar handleFilter={setIsStarred} />
      <div className="d-flex flex-column header_list">
        <MainHeader
          searchQuery={searchQuery}
          onSearch={setSearchQuery}
          currentPage={currentPage}
          totalPages={totalPages}
          emailLength={emails.length}
          totalLength={totalLength}
          onPageChange={setCurrentPage}
          pageSize={PAGE_SIZE}
        />
        <EmailList emails={emails} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default EmailDashboard;
