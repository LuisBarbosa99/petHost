const mongoose = require('../database');

const PetSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name:{
        type: String,
        required: true,
    },
    type:{
        type: String,
    },
    bio:{
        type: String,
    },
    ownerUsername:{
        type: String,
        required: true,
    },
});

const Pet = mongoose.model('Pet', PetSchema);

module.exports = Pet;