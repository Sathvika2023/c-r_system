// 📁 backend/routes/books.js
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const books = await req.db.Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch books' });
  }
});

module.exports = router;
