const express = require('express');

const authController = require('./controllers/authController');

const routes = express.Router();

routes.post('/users', authController.store);

module.exports = routes;