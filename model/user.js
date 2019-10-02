const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    project:[{
        title:String,
    }],
},
{
    timestamps: true
});


module.exports = mongoose.model('user', userSchema)