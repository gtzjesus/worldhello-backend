// routes/clients.js
// file to define the routes.
const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientsController');

router.get('/', clientsController.getAllClients);

module.exports = router;
