const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const signale = require('signale');
const { registerValidation, loginValidation } = require('../validation');

exports.register = async (req, res) => {
  signale.pending('A user is trying to register!');
  try {
    // Validate User
    const { error } = registerValidation(req.body);

    if (error) {
      return res.status(400).json({ message: error.details[0].message }); // The message is form the joi object in validation.js
    }
    // if existing user
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) {
      signale.fatal('But Email exists already');
      return res
        .status(409)
        .json({ message: 'A user with that email already exists' });
    }
    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashPssword = await bcrypt.hash(req.body.password, salt);

    // Create new User
    let user = new User({
      email: req.body.email,
      password: hashPssword
    });

    user = await user.save();

    const jwtPayload = {
      user: {
        id: user._id
      }
    };

    const token = jwt.sign(jwtPayload, process.env.TOKEN_SECRET);
    signale.complete('User registered!');
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.login = async (req, res) => {
  signale.pending('A user trying to log in!');

  // Validate User
  const { error } = loginValidation(req.body);
  if (error) {
    signale.fatal('Login validation failed');
    return res.status(400).json({ error: error.details[0].message });
  }

  // If existing email
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      signale.fatal('Email not found');
      return res.status(400).json({ message: 'Email is not found' });
    }

    // Password correct?
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      signale.fatal('Invalid password');
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Create object to sign JWT with
    const jwtPayload = {
      user: {
        id: user._id
      }
    };

    // Create and assign token
    const token = jwt.sign(jwtPayload, process.env.TOKEN_SECRET);
    signale.complete('Login succeeded!');
    res.json({ token }); // attached token to the header OR WE CAN DO THE REDIRECTING HERE
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
};
