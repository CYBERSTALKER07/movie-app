// src/components/searchheader/SearchHeader.jsx

import React from 'react';
import './Searchheader.css';

const SearchHeader = () => {
  return (
    <header className="search-header">
      <input type="text" placeholder="Search..." className="search-input" />
    </header>
  );
};

export default SearchHeader;