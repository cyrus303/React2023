import { MdDeleteForever } from 'react-icons/md';

import { useContext } from 'react';
import NotesContext from '../context/NotesContext';

function Note({ note }) {
  const { deleteNote } = useContext(NotesContext);
  const { id, text, date } = note;

  const handleDeleteClick = () => {
    deleteNote(id);
  };

  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delete-icon"
          size="1.3em"
          onClick={handleDeleteClick}
        />
      </div>
    </div>
  );
}

export default Note;
