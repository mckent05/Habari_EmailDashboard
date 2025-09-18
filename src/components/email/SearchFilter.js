import React, { useState, useEffect } from "react";
import useDebounce from "../../utils/debounceHelper";

const SearchFilter = ({ onSearch, initialValue = "" }) => {
  const [inputValue, setInputValue] = useState(initialValue);
  const debouncedValue = useDebounce(inputValue, 500);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className="flex-1 p-2 border rounded header-input"
      aria-label="Search emails"
    />
  );
};

export default SearchFilter;
