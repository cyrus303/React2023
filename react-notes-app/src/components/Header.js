import React from 'react';
import useNotesContext from '../hooks/UseNotesContextHook';

const Header = () => {
  const { setDarkMode } = useNotesContext();
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
