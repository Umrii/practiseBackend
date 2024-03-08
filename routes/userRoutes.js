// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');


router.post('/signup', async (req, res, next) => {
  const { username, password } = req.body;
  try {
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
