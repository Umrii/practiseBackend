// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');

router.post('/login', async (req, res, next) => { // Change the endpoint to '/login'

    const { username, password } = req.body;
    const user = await User.findOne({ username, password });

    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }
    
    const token = jwt.sign({ username: user.username }, 'secret');
    res.json({ token });
});

module.exports = router;
