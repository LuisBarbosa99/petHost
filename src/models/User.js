const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    type:{
        type: String,
        required: true,
        lowercase: true,
        default: 'owner',
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
        select: true,
    },
    location:{
        type: String,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

UserSchema.pre('save', async function(next){
    
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;

        next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
