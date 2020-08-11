const Host = require('../models/Host');
const User = require('../models/User');
const { show } = require('./userController');

module.exports = {
    async index(request,response){

    },
    async show(request,response){
        const {id} = request.body;

        const host = await Host.findById(id);

        response.status(200).json(host);
    },

    async store(request,response){
        const {username} = request.headers;
        const {bio} = request.body;

        try {
            const user = await User.findOne({username});
                        
            if(!user) return response.status(400).json({error: 'User does not exist'});
            
            const host = Host.findOne({username});

            if(host) return response.status(409).json({error: 'Conflict: Host already exists'});

            user.type = 'host';
            user.save();
           
            host = await Host.create({
                userId: user._id,
                username,
                bio,
            });

            if(!host) return response.status(200).json({message: 'OK'});

            return response.status(201).json({message: 'Host Registered Successfully'});

        } catch (err){
            return response.status(400).json({message: 'Host Registration Failed', error: `${err}`});

        }
    },
    async update(request,response){
        const {rating} = request.body;
        const {username} = request.params;

        try{
            const host = await Host.findOne({username});
            
            await host.updateOne(
                {_id: host._id},
                {rating: rating}
            );

            return response.status(200).json({message: 'Host updated', object: host});
        }catch(err){
            return response.status(409).json({message: 'Error in updating Host', error: err});
        }
    }
}