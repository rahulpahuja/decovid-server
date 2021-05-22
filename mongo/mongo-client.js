const mongoose = require("mongoose");
var result = require('dotenv').config({ silent: true }); 

console.log(process.env)
const DB_URI = process.env.DB_URI;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;

const MONGOURI = `mongodb+srv://${DB_USER}:${encodeURIComponent(
  DB_PASS
)}@${DB_URI}/${DB_NAME}?retryWrites=true&w=majority`;

const mongoInstantiate = async () => {
  try {
    console.log("Connecting to Mongo server: " + MONGOURI)
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB.");
  } catch (e) {
    console.log("MONGO ERROR" + e);
    throw e;
  }
};

module.exports = mongoInstantiate;
