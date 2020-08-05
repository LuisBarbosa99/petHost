const mongoose = require('../database');

const BookingSchema = new mongoose.Schema({
    petName:{
        type: String,
        required: true,
    },
    petId:{
        type: String,
        required: true,
    },
    hostUsername:{
        type: String,
        required: true,
    },
    ownerUsername:{
        type: String,
        required: true,
    },
    date:{
        type: [String],
        required: true,
    },
    description:{
        type: String,
    },
    createdAt :{
        type: Date,
        default: Date.now,
    }
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = Booking;