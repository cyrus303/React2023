import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSubmit }) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleFormSubmit(event) {
    event.preventDefault();
    onSubmit(searchTerm);
  }

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <input value={searchTerm} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;
