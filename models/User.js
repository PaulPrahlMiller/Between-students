const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  firstname: {
    type: String,
    min: 2,
    max: 32,
    required: true
  },
  lastname: {
    type: String,
    min: 2,
    max: 32,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    min: 6,
    max: 255,
    required: true
  }
});

module.exports = model('User', userSchema);
