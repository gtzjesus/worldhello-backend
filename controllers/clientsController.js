// controllers/clientsController.js
// File to handle the logic for client-related routes
const db = require('../models/db');

// Function to get all clients
const getAllClients = (req, res) => {
  const sql = 'SELECT * FROM clients';
  db.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching clients:', err);
      return res
        .status(500)
        .json({ error: 'An error occurred while fetching clients' });
    }
    res.json(results);
  });
};

module.exports = {
  getAllClients,
};
