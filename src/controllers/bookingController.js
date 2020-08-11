const Booking = require('../models/Booking');
const Pet = require('../models/Pet');
const Host = require('../models/Host');
const User = require('../models/User');

module.exports = {
    async store(request,response){
        const {petId, hostUsername, date, description} = request.body;
        const {ownerUsername} = request.params;

        try {
            const owner = await User.findOne({username: ownerUsername});

            if(!owner)
                return response.status(400).json({error: 'User does not exist'});

            const pet = await Pet.findOne({id: petId});

            if(!pet)
                return response.status(400).json({error: 'Pet does not exist'});
            
            const host  = await Host.findOne({username: hostUsername});

            if(!host)
                return response.status(400).json({error: 'Host does not exist'});
            
            const booking = await Booking.create({
                petName: pet.name,
                petId,
                hostUsername,
                ownerUsername,
                date,
                description,
            });

            if(!booking)
                return response.status(200).json({message: 'OK'});
    
            return response.status(201).json({message: 'Booking Created Successfully'});
        } catch (err) {
            return response.status(400).json({message: 'Booking Registration Failed', error: err});
        }
    },
}