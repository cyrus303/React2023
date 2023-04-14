import { useState } from 'react';
import useBooksContext from '../hooks/use-book-context';

function BookEdit({ book, onUpdate, onSubmit }) {
  const [editTitle, setEditTitle] = useState(book.title);
  const { editBookById } = useBooksContext();

  const handleChange = (event) => {
    setEditTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    editBookById(book.id, editTitle);
    onSubmit(false);
  };

  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        className="input"
        value={editTitle}
        onChange={handleChange}
      />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
