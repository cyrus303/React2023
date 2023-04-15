import Note from './Note';
import React from 'react';
import AddNote from './AddNote';

function NotesList({ notes }) {
  return (
    <div className="notes-list">
      {notes.map((note) => {
        return <Note note={note} key={note.id} />;
      })}
      <AddNote />
    </div>
  );
}

export default NotesList;
