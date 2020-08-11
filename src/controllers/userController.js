const User = require('../models/User');

module.exports = {
    async show(request,response){
        const {id} = request.body;

        const user = await User.findById(id);

        response.status(200).json(user);
    },
    
    async store(request, response){
        const { email } = request.body;

        try {
            if(await User.findOne({email}))
                return response.status(400).json({error: 'User already exists'});
            
            const user = await User.create(request.body);
            user.password = undefined;

            if(!user)
                return response.status(200).json({message: 'OK'});
    

            return response.status(201).json({message: 'User Created Successfully'});
            
        } catch (err) {
            return response.status(400).json({message: 'User Registration Failed', error: `${err}`});
        }
    }
}