const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    city_id:{
        type:Number,
        required: true
    },
    city_name:{
        type:String,
        required: true
    },
    state_id:{
        type:Number,
        required: true
    }
});

module.exports = mongoose.model('city',citySchema);