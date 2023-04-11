import React from 'react';

const Header = ({ handleToggleDarkMode }) => {
  const handleClick = () => {
    handleToggleDarkMode((prevState) => !prevState);
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
