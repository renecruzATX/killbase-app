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
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});



// GET route to retreive a specific assassin
app.get('/assassins/:id', function(req, res) {
  knex('assassins')
    .select('id', 'fullName', 'codeName', 'weapon', 'contactInfo', 'rating', 'kills', 'price', 'age')
    .where('id', req.params.id)
    .then(function(result) {
      res.send(result);
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});



// POST route to add a new assassin
app.post('/assassins', function(req, res) {
  knex('assassins')
    .insert({
      fullName: req.body.fullName,
      codeName: req.body.codeName,
      weapon: req.body.weapon,
      contactInfo: req.body.contactInfo,
      rating: req.body.rating,
      kills: req.body.kills,
      price: req.body.price,
      age: req.body.age
    }, '*')
    .then(function(result) {
      res.send(result);
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});



// UPDATE route to update an existing assassin
app.patch('/assassins/:id', function(req, res) {
  knex('assassins')
    .update({
      fullName: req.body.fullName,
      codeName: req.body.codeName,
      weapon: req.body.weapon,
      contactInfo: req.body.contactInfo,
      rating: req.body.rating,
      kills: req.body.kills,
      price: req.body.price,
      age: req.body.age
    }, '*')
    .where('id', req.params.id)
    .then(function(result) {
      res.send(result);
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});



// DELETE route to delete an assassin
app.delete('/assassins/:id', function(req, res) {
  knex('assassins')
    .del()
    .where('id', req.params.id)
    .then(function(result) {
      res.sendStatus(200);
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});






// GET route to retreive all contracts
app.get('/contracts', function(req, res) {
  knex('contracts')
    .select('id', 'targetName', 'targetLocation', 'budget')
    .then(function(result) {
      res.send(result);
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});



// GET route to retreive a specific contract
app.get('/contracts/;id', function(req, res) {
  knex('contracts')
    .select('id', 'targetName', 'targetLocation', 'budget')
    .where('id', req.params.id)
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
