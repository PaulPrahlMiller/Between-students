const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const connectDatabase = require('./config/db');
const modelController = require('./models/models_controller')
const PORT = process.env.PORT || 5000;
const signale = require('signale')

const app = express();


// Connect to mongoDB database
connectDatabase();

// Populating initial Database ...
// ------ modelController.insertManyProducts()
// ------ modelController.insertManyUsers()


// Cors used to allow cross-origin communication on localserver between frontend and backend
app.use(cors());

app.use(express.json());

app.use('/api', apiRoutes);

app.listen(PORT, () => {
  signale.success(`Server listening on port ${PORT}`)
})
