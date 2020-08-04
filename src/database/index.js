const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://pitu:dr4c4rys@cluster0-yn5rs.mongodb.net/petHost?retryWrites=true&w=majority', 
    {   
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
);
mongoose.Promise = global.Promise;

module.exports = mongoose;