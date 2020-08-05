const mongoose = require('../database');

const HostSchema = new mongoose.Schema({
    userId:{
        type: String,
        unique: true,
        required: true,
    },
    username:{
        type: String,
        unique: true,
        required: true,
    },
    rating:{
        type: Number,
        default: 0.0,
    },
    bio:{
        type: String,
    }
    
});

const Host = mongoose.model('Host', HostSchema);

module.exports = Host;