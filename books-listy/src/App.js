import { useState, useEffect } from 'react';
import BookCreate from './Components/BookCreate';
import BookList from './Components/BookList';
import axios from 'axios';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const fetchDataFromAPI = async () => {
    const response = await axios.get('http://localhost:3001/books');
    const updatedBookList = response.data;
    setBooks(updatedBookList);
  };

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', { title });
    const newBook = response.data;
    const updateBooks = [...books, newBook];
    setBooks(updateBooks);
  };

  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((books) => {
      return books.id !== id;
    });
    setBooks(updatedBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updateBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(updateBooks);
  };

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
