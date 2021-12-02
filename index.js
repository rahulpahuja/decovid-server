require('dotenv').config({path: __dirname + '/.env'});

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');
const swaggerJSDocs = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
//For Swagger
//https://www.youtube.com/watch?v=RMzwNIz_Iac
const swaggerOptions = {
  definition:{
    openapi:'3.0.0',
    info: {
      title:'Decovid Management API',
      version:'1.0.0',
      description:'APIS',
      contact:{
        name:'Decvoid Contact',
        url:'www.google.com',
        email:'decovidindia@gmail.com'
      },
      servers:["http://localhost:9001"]
    }
  },
  apis:["index.js"]
}

/**
 * @swagger
 * definitions:
 *  Employee:
 */


const mongoInstantiate = require("./mongo/mongo-client");


var app = express();


const swaggerDocs = swaggerJSDocs(swaggerOptions);
//End point for swagger ui
app.use('/api-docs',swaggerUI.serve,swaggerUI.setup(swaggerDocs));




/*** Instantiate Mongo Server */
mongoInstantiate();
/******************************************************/


/*** IMPORT ROUTES */
const supplierRoute = require("./routes/suppliers");

const voulenteerRoute = require("./routes/voulenteer");
const hospitalRoute = require("./routes/hospital");


const requesterRoute = require("./routes/requester");

const stateRoute = require("./routes/state");

const cityRoute = require("./routes/City");
/******************************************************/

/***** CONFIGURATION *****/
const PORT = process.env.PORT || 5000

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
/******************************************************/




/*** APIS and ROUTING */
// API Extras
app.get('/hello',function(req,res){
  res.send('Hello World')
});

//HOME
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.use("/suppliers", supplierRoute);
app.use("/voulenteers", voulenteerRoute);
app.use("/hospital", hospitalRoute);

app.use("/requesters",requesterRoute);

app.use("/cities",cityRoute);

app.use("/states",stateRoute);
/******************************************************/

// START SERVER! (Comment this in case deploying on Lamda or GCP Functions)
app.listen(PORT, () => {
  console.log("Server listening on: " + PORT);
});

module.exports = {
  app,
};
