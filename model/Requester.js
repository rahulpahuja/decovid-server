const mongoose = require('mongoose')

const requesterScehma = new mongoose.Schema({
    firstName: {
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    phoneNumber: {
        type:String,
        required:true
    },
    state: {
        type:String,
        required:true
    },
    city: {
        type:String,
        required:true
    },
    address: {
        type:String,
        required:true
    }
});

module.exports = mongoose.model('Requester',requesterScehma);