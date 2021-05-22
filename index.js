const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))


var app = express();


  app.post('/hello',function(req,res){
  res.send('Hello World')
});

// express.get('/suppliers',function(req,res){
//  var object = {
//   "isActive": "false",
//   "name": "Rahul",
//   "phoneNumber": "8888888888",
//   "supplies": "{BLOOD,OXYGEN}",
//   "id": "1",
//   "state": "Madhya Pradesh",
//   "city": "Indore",
//   "address": "Raja Ram Nagar",
//   "organization": "Individual",
//   "isReported": "false",
//   "reportedCount": "0",
//   "image": "www.google.com"
// }
// var object1 = {
//   "isActive": "false",
//   "name": "Raj",
//   "phoneNumber": "8888888888",
//   "supplies": "{BLOOD,OXYGEN}",
//   "id": "2",
//   "state": "Madhya Pradesh",
//   "city": "Indore",
//   "address": "Raja Ram Nagar",
//   "organization": "Individual",
//   "isReported": "false",
//   "reportedCount": "0",
//   "image": "www.google.com"
// }
// var object2 = {
//   "isActive": "false",
//   "name": "Rock",
//   "phoneNumber": "8888888880",
//   "supplies": "{BLOOD,OXYGEN}",
//   "id": "3",
//   "state": "Madhya Pradesh",
//   "city": "Indore",
//   "address": "Raja Ram Nagar",
//   "organization": "Individual",
//   "isReported": "false",
//   "reportedCount": "0",
//   "image": "www.google.com"
// }

//   var myList = new Array();
//   myList.push(object1);
//   myList.push(object);
//   myList.push(object2);
//   myList.push(object);
//   myList.push(object);
//   myList.push(object1);
//   myList.push(object);
//   myList.push(object2);
//   myList.push(object2);
//   myList.push(object2);
//   res.send(myList)
// });