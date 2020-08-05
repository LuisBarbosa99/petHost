const express = require('express');

const authController = require('./controllers/authController');

const routes = express.Router();

routes.post('/users', authController.store);
routes.get('/users', authController.show);

module.exports = routes;