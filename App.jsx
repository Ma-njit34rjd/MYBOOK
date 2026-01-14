import React, { useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import SearchFilter from './components/SearchFilter';

const initialBooks = [
  { id: 1, title: '1984', author: 'George Orwell', genre: 'Dystopian', year: '1949', description: 'Dystopian novel.', status: 'Not Started' },
  { id: 2, title: 'The Alchemist', author: 'Paulo Coelho', genre: 'Adventure', year: '1988', description: 'Spiritual journey.', status: 'In Progress' }
];

function App() {
  const [books, setBooks] = useState(initialBooks);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [editBook, setEditBook] = useState(null);

  const handleAddBook = (book) => {
    if (book.id) {
      setBooks(prev => prev.map(b => b.id === book.id ? book : b));
    } else {
      setBooks(prev => [...prev, { ...book, id: Date.now() }]);
    }
    setEditBook(null);
  };

  const handleDeleteBook = (id) => {
    setBooks(prev => prev.filter(book => book.id !== id));
  };

  const handleEditBook = (book) => {
    setEditBook(book);
  };

  const handleStatusChange = (id, status) => {
    setBooks(prev => prev.map(book => book.id === id ? { ...book, status } : book));
  };

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(search.toLowerCase()) ||
                          book.author.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filter === 'All' || book.status === filter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">📚 Book Manager</h1>
      <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} />
      <BookForm onSubmit={handleAddBook} editBook={editBook} />
      <BookList books={filteredBooks} onDelete={handleDeleteBook} onEdit={handleEditBook} onStatusChange={handleStatusChange} />
    </div>
  );
}

export default App;