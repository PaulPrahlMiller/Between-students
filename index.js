const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const connectDatabase = require('./config/db');
const modelController = require('./models/models_controller')

const PORT = process.env.PORT || 5000;

const app = express();
modelController.insertMany(8)
console.log('hi')
// Connect to mongoDB database
connectDatabase();

// Cors used to allow cross-origin communication on localserver between frontend and backend
app.use(cors());

app.use(express.json());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
