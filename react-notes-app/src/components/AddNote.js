import { useState } from 'react';
import useNotesContext from '../hooks/UseNotesContextHook';

const AddNote = () => {
  const { addNewNote } = useNotesContext();
  const [noteText, setNoteText] = useState('');
  const charLimit = 200;
  const remainingChar = charLimit - noteText.length;

  const handleTextInput = (event) => {
    if (charLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value);
    }
  };

  const handleClick = (event) => {
    if (noteText.trim().length > 0 && remainingChar >= 0) {
      addNewNote(noteText);
      setNoteText('');
    }
  };

  return (
    <div className="note new">
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a note..."
        value={noteText}
        onChange={handleTextInput}
      ></textarea>

      <div className="note-footer">
        <small>{`${remainingChar} Remaining`}</small>
        <button className="save" onClick={handleClick}>
          save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
