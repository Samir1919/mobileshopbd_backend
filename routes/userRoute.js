const express = require('express');
const router = express.Router();
// jwt auth
var auth = require('../middleware/auth');
// Model
const User = require('../models/user');

// Create a new user
router.post('/', auth.refreshAuthenticateUser, async (req, res) => {
  try {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        isAdmin: req.body.isAdmin,
        vendor: req.body.vendor,
        password: req.body.password
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err);
  }
});

// Get a specific user
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// const user = await User.findOne({ where: { email } });
// const hashedPassword = user.password;
// const providedPassword = 'userProvidedPassword';

// const hashedProvidedPassword = crypto.SHA256(providedPassword).toString();

// if (hashedProvidedPassword === hashedPassword) {
//     // Password matches
// } else {
//     // Password mismatch
// }

// Update a user
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete a user
router.delete('/:id', async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;