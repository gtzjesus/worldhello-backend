// controllers/clientsController.js
// file to handle the logic for client-related routes
const db = require('../models/db');

// Grab all clients
const getAllClients = (req, res) => {
  const sql = 'SELECT * FROM clients';
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).send('An error occurred while fetching clients');
    }
    res.json(results);
  });
};

module.exports = {
  getAllClients,
};
