const mongoose = require("mongoose");

const SupplierSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  isActive: {
    type: Boolean,
  },
  isReported: {
    type: Boolean,
  },
  reportedCount: {
    type: String,
  },
  name: {
    type: String,
  },
  image: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  state: {
    type: String,
  },

  city: {
    type: String,
  },

  address: {
    type: String,
  },

  organization: {
    type: String,
  },

  supplies: [
    {
      type: [String], default: [] // enum: ['BLOOD','FOOD', 'OXYGEN', 'MEDICALDEVICES'],
    }
  ]
});

// export model supplier with SupplierSchema
module.exports = mongoose.model("Supplier", SupplierSchema);
