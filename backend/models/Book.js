// // 📁 backend/models/Book.js
// module.exports = (conn) => {
//     const mongoose = require('mongoose');
  
//     const BookSchema = new mongoose.Schema({
//       ssn: String,
//       title: String,
//       author: String,
//       version: String,
//       domain: String,
//     },
//     { collection: 'Books' }
// );
//     return conn.model('Book', BookSchema);
//   };
  
// 📁 backend/models/Book.js

const mongoose = require('mongoose');

module.exports = (libraryDB) => {
  const BookSchema = new mongoose.Schema(
    {
      ssn: String,
      title: String,
      author: String,
      version: String,
      domain: String,
    },
    { collection: 'Books' }
  );

  return libraryDB.model('Book', BookSchema);
};
