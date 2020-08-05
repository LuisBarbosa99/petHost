const Pet = require('../models/Pet');
const User = require('../models/User');

module.exports = {
    async store(request, response){
        const {name, type, bio} = request.body;
        const {ownerUsername} = request.params;

        try {
            const owner = await User.findOne({username: ownerUsername});

            if(!owner)
                return response.status(400).send({error: 'User does not exist'});

            const pet = await Pet.create({
                name,
                type,
                bio,
                ownerUsername,
            });

            if(!pet)
                return response.status(200).send({message: 'OK'});


            return response.status(201).send({message: 'Pet Created Successfully'});

            
        } catch (error) {
            return response.status(400).send({message: 'Pet Registration Failed'});
        }
    },
}