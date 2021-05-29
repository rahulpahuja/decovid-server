const mongoose = require("mongoose");

const SupplierAgreementSchema = mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  detail: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  isActive: {
    type: Boolean,
  }
});

// export model supplier with SupplierSchema
module.exports = mongoose.model("SupplierAgreement", SupplierAgreementSchema);
