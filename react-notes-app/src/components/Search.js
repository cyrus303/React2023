import React from 'react';
import { MdSearch } from 'react-icons/md';

const Search = ({ handleSearchNote }) => {
  const handleTextChange = (event) => {
    const text = event.target.value;
    handleSearchNote(text);
  };

  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        type="text"
        placeholder="type to search"
        onChange={handleTextChange}
      />
    </div>
  );
};

export default Search;
