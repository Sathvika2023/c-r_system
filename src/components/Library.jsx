import React, { useState } from 'react';

const initialBooks = [
  { id: 1, title: 'Introduction to Algorithms', subject: 'Computer Science', domain: 'Algorithms', cover: 'https://via.placeholder.com/80x100?text=Algorithms' },
  { id: 2, title: 'Operating System Concepts', subject: 'Computer Science', domain: 'Operating Systems', cover: 'https://via.placeholder.com/80x100?text=OS' },
  { id: 3, title: 'Database System Concepts', subject: 'Computer Science', domain: 'Databases', cover: 'https://via.placeholder.com/80x100?text=DB' },
  { id: 4, title: 'Artificial Intelligence: A Modern Approach', subject: 'Computer Science', domain: 'AI', cover: 'https://via.placeholder.com/80x100?text=AI' },
  { id: 5, title: 'Linear Algebra Done Right', subject: 'Mathematics', domain: 'Algebra', cover: 'https://via.placeholder.com/80x100?text=Algebra' },
  { id: 6, title: 'Calculus', subject: 'Mathematics', domain: 'Calculus', cover: 'https://via.placeholder.com/80x100?text=Calculus' },
];

const Library = () => {
  const [books] = useState(initialBooks);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDomain, setSelectedDomain] = useState(null);

  const filteredBooks = books.filter(
    (book) =>
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.domain.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedDomain ? book.domain === selectedDomain : true)
  );

  const domains = [...new Set(books.map((book) => book.domain))];

  const recentBooks = books.slice(-3).reverse();

  return (
    <div className="p-4 flex space-x-6">
      {/* Domains Sidebar */}
      <div className="w-48 border-r border-gray-300 pr-4">
        <h2 className="font-semibold mb-2">Domains</h2>
        <ul>
          <li
            className={`cursor-pointer mb-1 ${selectedDomain === null ? 'font-bold' : ''}`}
            onClick={() => setSelectedDomain(null)}
          >
            All
          </li>
          {domains.map((domain) => (
            <li
              key={domain}
              className={`cursor-pointer mb-1 ${selectedDomain === domain ? 'font-bold' : ''}`}
              onClick={() => setSelectedDomain(domain)}
            >
              {domain}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Library Management</h1>
          <input
            type="text"
            placeholder="Search books"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded px-2 py-1 w-48"
          />
        </div>

        <p className="mb-4">Total Books: {filteredBooks.length}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredBooks.map((book) => (
            <div key={book.id} className="flex items-center border border-gray-300 rounded p-2">
              <img src={book.cover} alt={book.title} className="w-20 h-24 object-cover mr-4" />
              <div>
                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-600">{book.subject} / {book.domain}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Books Sidebar */}
      <div className="w-48 border-l border-gray-300 pl-4">
        <h2 className="font-semibold mb-2">Recent Books</h2>
        <ul>
          {recentBooks.map((book) => (
            <li key={book.id} className="flex items-center mb-2">
              <img src={book.cover} alt={book.title} className="w-12 h-16 object-cover mr-2" />
              <span className="text-sm">{book.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Library;
