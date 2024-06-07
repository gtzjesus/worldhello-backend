const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const clientsRoutes = require('./routes/clients');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS for all routes with specific origins
const corsOptions = {
  origin: [
    'http://localhost:3000', // Allow local frontend
    'https://worldhello.us', // Allow production frontend
  ],
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Use the clients routes
app.use('/clients', clientsRoutes);

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
