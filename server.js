'use strict';

let fs = require('fs');
let path = require('path');

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



// GET route to retreive all assassins
app.get('/assassins', function(req, res) {
  knex('assassins')
    .select('id', 'fullName', 'codeName', 'weapon', 'contactInfo', 'rating', 'kills', 'price', 'age')
    .then(function(result) {
      res.send(result);
      knex.destroy();
    })
    .catch(function(err) {
      console.log(err);
      knex.destroy();
      process.exit(1);
    });
});








app.use(function(req, res) {
  res.sendStatus(404);
});



app.listen(port, function() {
  console.log('Listening on port', port);
});






module.exports = app;
