const express = require('express');
const path = require('path');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const productRoutes = require('./routes/products');
const connectDatabase = require('./config/db');
const PORT = process.env.PORT || 5000;
const signale = require('signale');
require('dotenv').config();

const app = express();

// Connect to mongoDB database
connectDatabase();

app.use(express.json());

// Cors used to allow cross-origin communication on localserver between frontend and backend
app.use(cors());

app.use('/', express.static(path.join(__dirname, 'public')));

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/products', productRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
} else {
  app.use('/', express.static(path.join(__dirname, 'public')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
  });
}

app.listen(PORT, () => {
  signale.success(`Server listening on port ${PORT}`);
});
