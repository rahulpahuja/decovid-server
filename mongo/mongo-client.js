const mongoose = require("mongoose");
var result = require('dotenv').config({ silent: true }); 
const envs = result.parsed;

console.log(envs)
const DB_URI = envs.DB_URI;
const DB_USER = envs.DB_USER;
const DB_PASS = envs.DB_PASSWORD;
const DB_NAME = envs.DB_NAME;

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
