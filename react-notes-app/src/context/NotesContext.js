import { createContext, useState } from 'react';
import axios from 'axios';

const NotesContext = createContext();

function Provider({ children }) {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:3001/notes');
    setNotes(response.data);
  };

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

  const valueToShare = {
    fetchData,
    notes,
    addNewNote,
    deleteNote,
    searchText,
    setSearchText,
    darkMode,
    setDarkMode,
  };

  return (
    <NotesContext.Provider value={valueToShare}>
      {children}
    </NotesContext.Provider>
  );
}

export { Provider };
export default NotesContext;
