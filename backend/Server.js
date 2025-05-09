// // 📁 backend/server.js
// const express = require('express');
// const { libraryConn, academicsConn } = require('./ConnectDB');

// const getBookModel = require('./models/Book');
// // const getStudentModel = require('./models/Student');

// const Book = getBookModel(libraryConn);
// // const Student = getStudentModel(academicsConn);

// const app = express();
// app.use(express.json());

// // Sample routes
// app.get('/books', async (req, res) => {
//   try {
//     const books = await Book.find();
//     res.json(books);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// // app.get('/students', async (req, res) => {
// //   try {
// //     const students = await Student.find();
// //     res.json(students);
// //   } catch (err) {
// //     res.status(500).json({ error: err.message });
// //   }
// // });

// // const PORT = 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server running on http://localhost:${PORT}`);
// // });

// app.listen(5000, () => {
//     console.log('Server running on http://localhost:5000');
//   });

// const cors = require('cors');
// app.use(cors());
const express = require('express');
const cors=require('cors');
const connectDatabases = require('./ConnectDB');
const createBookModel = require('./models/Book');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

(async () => {
  const { libraryDB, academicsDB } = await connectDatabases();

  // Load models using the respective DB connections
  const Book = createBookModel(libraryDB);

  // Welcome Route
app.get('/', (req, res) => {
  res.send('Welcome');
});

  
  // Route to get books
  app.get('/books', async (req, res) => {
    try {
      const books = await Book.find();
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching books' });
    }
  });

  const authRoutes = require('./routes/auth');
  app.use('/api/auth', authRoutes);
    
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})();

