const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

// Init app
const app = express();

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//// Middleware ////

// Body Parser
app.use(bodyParser.json());

//// Routes ////

// Index route - 404
app.get('/', (req, res) => {
  res.status(404).send('Invalid Entry');
});

// API Test
app.get('/api/test', (req, res) => {
  res.send('Hello, Friend');
});

// Start Server
app.listen(process.env.PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode`);
  console.log(`Server Started on port ${process.env.PORT}`);
});
