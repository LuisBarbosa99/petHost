const Host = require('../models/Host');
const User = require('../models/User');

module.exports = {
    async store(request,response){
        try {
            const {username} = request.params;
            const {bio} = request.body;

            const user = await User.findOne(username);

            if(!user){
                return response.status(400).send({error: 'User does not exist'});
            }

            user.type = 'host';
            user.save();

            const host = await Host.create({
                userId: user._id,
                username,
                bio,
            });

            if(!host)
                return response.status(200).send({message: 'OK'});

            return response.status(201).send({message: 'Host Registered Successfully'});

        } catch (error){
            return response.status(400).send({message: 'Booking Registration Failed'});

        }
    }
}