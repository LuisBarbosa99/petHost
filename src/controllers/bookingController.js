const Booking = require('../models/Booking');
const Pet = require('../models/Pet');
const Host = require('../models/Host');

module.exports = {
    async store(request,response){
        const {petId, hostUsername, date, description} = request.body;
        const {ownerUsername} = request.params;

        try {
            const owner = await User.findOne({username: ownerUsername});

            if(!owner)
                return response.status(400).send({error: 'User does not exist'});

            const pet = await Pet.findOne({_id: petId});

            if(!pet)
                return response.status(400).send({error: 'Pet does not exist'});
            
            const host  = await Host.findOne({username: hostUsername});

            if(!host)
                return response.status(400).send({error: 'Host does not exist'});
            
            const booking = await Booking.create({
                petName: pet.name,
                petId,
                hostUsername,
                ownerUsername,
                date,
                description,
            });

            if(!booking)
                return response.status(200).send({message: 'OK'});
    

            return response.status(201).send({message: 'Booking Created Successfully'});
        } catch (error) {
            return response.status(400).send({message: 'Booking Registration Failed'});
        }
    },
}