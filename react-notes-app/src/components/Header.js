import React from 'react';
import { useContext } from 'react';
import NotesContext from '../context/NotesContext';

const Header = () => {
  const { setDarkMode } = useContext(NotesContext);

  const handleClick = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <div className="header">
      <h1>Notes</h1>
      <button className="save" onClick={handleClick}>
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
