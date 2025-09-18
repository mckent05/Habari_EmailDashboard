import { useState, useMemo } from "react";
import EmailInfo from "./EmailInfo";
import SearchFilter from "./SearchFilter";
import DebounceHelper from "../../utils/debounceHelper";

const EmailList = ({ emails }) => {
  return (
    <div className="list-group flex-grow-1 overflow-auto">
      {emails?.length > 0 ? (
        emails?.map((mail, index) => <EmailInfo key={index} {...mail} />)
      ) : (
        <p>No Emails matched your search</p>
      )}
    </div>
  );
};

export default EmailList;
