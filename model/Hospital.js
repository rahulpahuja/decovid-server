const mongoose = require("mongoose");

const HospitalSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required:true
  },
  location: {
    type: String,
    required:true
  },
  bedCapacity: {
      type:Number,
    required:true,
    default:10
  },
  currentBedOccupiedCount:{
      type:Number
  },
    website:{
        type:String
    },
    contactNumber:{
        type:String,
        required:true
    }
});

// export model supplier with SupplierSchema
module.exports = mongoose.model("Hospital", HospitalSchema);
