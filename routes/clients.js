// routes/clients.js
// File to define the routes.
const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientsController');

// Route to get all clients
router.get('/', clientsController.getAllClients);

module.exports = router;
