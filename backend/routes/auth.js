const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register Route
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) return res.status(400).json({ msg: 'Email already exists' });

        // create user
        const user = new User({ username, email, password });
        await user.save();
        res.json({ msg: 'User registered successfully' });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'User not found' });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

        // Generate token
        const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

module.exports = router;
