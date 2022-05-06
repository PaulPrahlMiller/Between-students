const User = require('../models/User');
const signale = require('signale');

require('dotenv').config(); // Needed to access environment variables

exports.getLoggedInUser = async (req, res) => {
  try {
    // Find user in database and return all data except the password
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (error) {
    signale.fatal('Server error when retrieving user');
    res.status(500).json('Server error');
  }
};

exports.getUsers = async (req, res) => {
  const users = await User.find({});
  res.json({ message: 'Now you are looking for users', data: users });
};
