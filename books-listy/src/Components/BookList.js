import BookShow from './BookShow';
import { useContext } from 'react';
import BooksContext from '../context/books';

function BookList({ books, onDelete, onUpdate }) {
  const renderBooks = books.map((book) => {
    return (
      <BookShow
        key={book.id}
        book={book}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    );
  });
  return <div className="book-list">{renderBooks}</div>;
}

export default BookList;
