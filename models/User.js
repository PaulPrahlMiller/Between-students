const { date } = require('@hapi/joi');
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
  address: {
    type: String,
    min: 2,
    max: 60,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    min: 6,
    max: 255,
    required: true
  },
  date_registration: {
    type: Date,
    default: Date.now
  }
});

module.exports = model('User', userSchema);
