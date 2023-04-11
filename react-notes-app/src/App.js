import { useState, useEffect } from 'react';
import axios from 'axios';

import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3001/notes');
    setNotes(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addNewNote = async (noteText) => {
    const date = new Date();
    const response = await axios.post('http://localhost:3001/notes', {
      text: noteText,
      date: date.toLocaleDateString(),
    });
    const newNote = response.data;

    const updateNotes = [...notes, newNote];
    setNotes(updateNotes);
  };

  const deleteNote = async (id) => {
    await axios.delete('http://localhost:3001/notes/' + id);

    const updatedNotes = notes.filter((note) => {
      if (note.id !== id) {
        return note;
      }
    });

    setNotes(updatedNotes);
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />

        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          addNewNote={addNewNote}
          deleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
