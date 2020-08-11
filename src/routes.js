const express = require('express');

const userController = require('./controllers/userController');
const petController = require('./controllers/petController');
const hostController = require('./controllers/hostController');
const bookingController = require('./controllers/bookingController');

const routes = express.Router();

//User
routes.post('/users', userController.store);
routes.get('/users', userController.show);
//Pet
routes.post('/:ownerUsername/pets', petController.store);
//Host
routes.post('/hosts', hostController.store);
routes.get('/hosts', hostController.index);
routes.get('/hosts/:username', hostController.show);
routes.put('/hosts/:username', hostController.update);
//Booking
routes.post('/:ownerUsername/bookings', bookingController.store);

module.exports = routes;