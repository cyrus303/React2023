import React from 'react';
import { MdSearch } from 'react-icons/md';
import { useContext } from 'react';
import NotesContext from '../context/NotesContext';

const Search = () => {
  const { setSearchText } = useContext(NotesContext);

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
