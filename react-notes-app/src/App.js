import { useEffect } from 'react';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

import useNotesContext from './hooks/UseNotesContextHook';

function App() {
  const { fetchData, darkMode, notes, searchText } = useNotesContext();

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
