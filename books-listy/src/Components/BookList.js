import BookShow from './BookShow';
import { useContext } from 'react';
import BooksContext from '../context/books';

function BookList({ books, onDelete, onUpdate }) {
  const { count, incrementCount } = useContext(BooksContext);
  // const value = useContext(BooksContext);
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
  return (
    <div className="book-list">
      {count}
      <button onClick={incrementCount}>Click</button>

      {renderBooks}
    </div>
  );
}

export default BookList;
