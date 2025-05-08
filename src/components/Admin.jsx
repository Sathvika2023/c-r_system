import React, { useState } from 'react';

const Admin = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [domain, setDomain] = useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    // Simple password check for demo purposes
    if (password === 'admin123') {
      setIsSignedIn(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleAddBook = (e) => {
    e.preventDefault();
    if (title && subject && domain) {
      const newBook = {
        id: Date.now(),
        title,
        subject,
        domain,
      };
      setBooks([...books, newBook]);
      setTitle('');
      setSubject('');
      setDomain('');
    }
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  if (!isSignedIn) {
    return (
      <div className="p-4 max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Admin Sign In</h1>
        <form onSubmit={handleSignIn}>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 mb-4 w-full"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Sign In
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">Admin Panel - Manage Books</h1>
      <form onSubmit={handleAddBook} className="mb-4">
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 mr-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 mr-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Domain"
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 mr-2 mb-2 w-full"
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Book
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-2">Books List</h2>
      {books.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        <ul className="list-disc list-inside">
          {books.map((book) => (
            <li key={book.id} className="mb-1 flex justify-between items-center">
              <span>
                <strong>{book.title}</strong> - {book.subject} / {book.domain}
              </span>
              <button
                onClick={() => handleDeleteBook(book.id)}
                className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Admin;
