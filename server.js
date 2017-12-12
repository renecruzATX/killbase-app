
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


app.use(assassinsroutes);
app.use(contractsroutes);




// assassincontracts
app.post('/assassincontracts', function(req, res) {
  knex('assassincontracts')
    .select('assassins.id')
    .join('contracts', 'contracts.id')
    .then(function(result) {
      res.send(result);
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});






app.use(function(req, res) {
  res.sendStatus(404);
});



app.listen(port, function() {
  console.log('Listening on port', port);
});






module.exports = app;
