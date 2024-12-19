const path = require('path');
const crypto = require('crypto-js');
// Model
const User = require('../models/user');

exports.loginPage = (req, res) => {
  res.render("authentication/sign-in", {
    layout: path.join(__dirname, "../layouts/main"),
    navigation: false,
    footer: false,
  });
};


exports.login = async (req, res) => {
  const { email, phone, password } = req.body;
  const acceptHeader = req.headers['accept'];

  try {
    // Find user by either email or phone
    let user;
    if (email) {
      user = await User.findOne({ where: { email } });
    } else if (phone) {
      user = await User.findOne({ where: { phone } });
    }

    if (!user) {
      return res.status(401).json({ error: 'Invalid email/phone' }); // Generic error message
    }

    // Verify the password using Crypto-JS SHA256
    const hashedPassword = crypto.SHA256(password).toString();
    if (hashedPassword !== user.password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Create a session (assuming you have a session management mechanism in place)
    req.session.userId = user.id;

    // Return a successful login response with limited user information
    const sanitizedUser = { id: user.id, email: user.email, phone: user.phone }; // Avoid sending sensitive data

    // res.redirect('/admin'); for web
    // res.json({ message: 'Login successful', user: sanitizedUser }); use this for api
    if (acceptHeader.includes('text/html')) {
      // Handle web request
      res.redirect('/admin');
    } else {
      // Handle API request
      res.status(200).json({ message: 'Login successful', user: sanitizedUser });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' }); // Generic error message
  }
};