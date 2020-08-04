const User = require('../models/User');

module.exports = {
    async store(request, response){
        const { email } = request.body;

        try {
            if(await User.findOne({email}))
                return response.status(400).send({error: 'User already exists'});
            
            const user = await User.create(request.body);
            user.password = undefined;

            if(!user){
                return response.status(200).send({message: 'OK'});
            }else{
                return response.status(201).send({message: 'User Created'});
            }
            
        } catch (error) {
            return response.status(400).send({message: 'User Registration Failed'});
        }
    },

}