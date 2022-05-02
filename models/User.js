const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: 'Enter Email'
  },
  password: {
    type: String,
    required: 'Enter Password'
  },
  registration_date: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
