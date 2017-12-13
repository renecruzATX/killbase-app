
const config = require('./knexfile.js')['development'];
const knex = require('knex')(config);

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

// middleware
let morgan = require('morgan');
let bodyParser = require('body-parser');


app.disable('x-powered-by');
app.use(morgan('short'));
app.use(bodyParser.json());


let assassinsroutes = require('./routes/assassinsroutes.js');
let contractsroutes = require('./routes/contractsroutes.js');
let assassincontractsroutes = require('./routes/assassincontractsroutes.js');


app.use(assassinsroutes);
app.use(contractsroutes);
app.use(assassincontractsroutes);



app.use(function(req, res) {
  res.sendStatus(404);
});



app.listen(port, function() {
  console.log('Listening on port', port);
});






module.exports = app;
