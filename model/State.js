const mongoose = require('mongoose')

const stateSchema = new mongoose.Schema({
    state_id:{
        type:Integer,
        required: true
    },
    state_name:{
        type:String,
        required: true
    },
    country:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model('State',stateSchema);