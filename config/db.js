const mongoose = require('mongoose');
require('dotenv').config();
const signale = require('signale')
async function connectDatabase() {
  try {
    mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const db = mongoose.connection;
    db.on('connected', console.log.bind(signale.success(`Connected to MongoDB`)));
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectDatabase;
