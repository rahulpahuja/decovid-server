const mongoose = require('mongoose')

const requesterScehma = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Requester',requesterScehma);