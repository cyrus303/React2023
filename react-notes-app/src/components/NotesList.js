import Note from './Note';
import React from 'react';
import AddNote from './AddNote';

function NotesList({ notes, addNewNote, deleteNote }) {
  // console.log(notes);
  return (
    <div className="notes-list">
      {notes.map((note) => {
        return <Note note={note} key={note.id} deleteNote={deleteNote} />;
      })}
      <AddNote addNewNote={addNewNote} />
    </div>
  );
}

export default NotesList;
