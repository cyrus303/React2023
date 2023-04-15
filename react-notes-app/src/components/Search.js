import React from 'react';
import { MdSearch } from 'react-icons/md';
import useNotesContext from '../hooks/UseNotesContextHook';

const Search = () => {
  const { setSearchText } = useNotesContext();

  const handleTextChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
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
