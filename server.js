'use strict';

let fs = require('fs');
let path = require('path');
let assassinsPath = path.join(__dirname, 'localhost:8000/db/killbaseApp/assassins');

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

// middleware
let morgan = require('morgan');
let bodyParser = require('body-parser');


app.disable('x-powered-by');
app.use(morgan('short'));
app.use(bodyParser.json());



app.get('localhost:8000/db/killbaseApp/assassins', function(req, res) {
  fs.readFile(assassinsPath, 'utf8', function(err, assassinsJSON) {
    if (err) {
      console.log(err.stack);
      return res.sendStatus(500);
    }

    let assassins = JSON.parse(assassinsJSON);

    res.send(assassins);
  });
});








app.use(function(req, res) {
  res.sendStatus(404);
});



app.listen(port, function() {
  console.log('Listening on port', port);
});






module.exports = app;
