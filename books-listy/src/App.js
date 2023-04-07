import { useState } from 'react';
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';

function App() {
  const [books, setBooks] = useState([
    {
      id: 1234,
      title: 'Harry Potter',
    },
    {
      id: 5678,
      title: 'Naruto',
    },
  ]);

  const createBook = (title) => {
    let randomNumber = Math.round(Math.random() * 9999);
    const updatedBooks = [...books, { id: randomNumber, title: title }];
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    console.log('from app.js ', id);
    const updatedBooks = books.filter((books) => {
      return books.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBookById = (id, newTitle) => {
    console.log('from app.js, trying to update book', newTitle);
    const updateBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });

    setBooks(updateBooks);
  };

  console.log(books);
  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList
        books={books}
        onDelete={deleteBookById}
        onUpdate={editBookById}
      />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
