const express = require('express');
const { getAllUsers } = require('../Controllers/UserController.js');

const router = express.Router();

// Routes
router.get('/users', getAllUsers);

module.exports = router;
