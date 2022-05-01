const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const connectDatabase = require('./config/db');

const PORT = process.env.PORT || 5000;

const app = express();

// Connect to mongoDB database
connectDatabase();

// Cors used to allow cross-origin communication on localserver between frontend and backend
app.use(cors());

app.use(express.json());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


//added test info from Zijie