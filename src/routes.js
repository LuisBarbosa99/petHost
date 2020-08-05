const express = require('express');

const authController = require('./controllers/authController');
const petController = require('./controllers/petController');

const routes = express.Router();

routes.post('/users', authController.store);
routes.get('/users', authController.show);
routes.post('/:ownerUsername/pets', petController.store);

module.exports = routes;