const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db');  
const { Entity } = require('./models');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Cors
app.use(cors());

// Routes
app.use('/api/persons', require('./routes/personRoutes'));

// Synchronize models and start server
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
  
// Start Server
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

