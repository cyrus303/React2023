import { useEffect, useContext } from 'react';
import NotesContext from './context/NotesContext';

import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const { fetchData, darkMode, searchText, notes } = useContext(NotesContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header />
        <Search />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
        />
      </div>
    </div>
  );
}

export default App;
