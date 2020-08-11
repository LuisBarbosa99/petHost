const express = require('express');

const userController = require('./controllers/userController');
const petController = require('./controllers/petController');
const hostController = require('./controllers/hostController');
const bookingController = require('./controllers/bookingController');

const routes = express.Router();

routes.post('/users', userController.store);
routes.get('/users', userController.show);
routes.post('/:ownerUsername/pets', petController.store);
routes.post('/hosts', hostController.store);
routes.post('/:ownerUsername/bookings', bookingController.store);

module.exports = routes;