const Pet = require('../models/Pet');
const User = require('../models/User');
const crypto = require('crypto');

module.exports = {
    async store(request, response){
        const {name, type, bio} = request.body;
        const {ownerUsername} = request.params;

        try {
            const owner = await User.findOne({username: ownerUsername});

            if(!owner)
                return response.status(400).json({error: 'User does not exist'});
            
            const id  = crypto.randomBytes(4).toString('HEX');

            const pet = await Pet.create({
                id,
                name,
                type,
                bio,
                ownerUsername,
            });

            if(!pet)
                return response.status(200).json({message: 'OK'});


            return response.status(201).json({message: 'Pet Created Successfully', id: id});

            
        } catch (err) {
            return response.status(400).json({message: 'Pet Registration Failed', error: err});
        }
    },
}