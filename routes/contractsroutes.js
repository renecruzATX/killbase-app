
const config = require('../knexfile.js')['development'];
const knex = require('knex')(config);

const express = require('express');
const router = express.Router();



// GET route to retreive all contracts
router.get('/contracts', function(req, res) {
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
router.get('/contracts/:id', function(req, res) {
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



// POST route to add a new contract
router.post('/contracts', function(req, res) {
  knex('contracts')
    .insert({
      targetName: req.body.targetName,
      targetLocation: req.body.targetLocation,
      budget: req.body.budget
    }, '*')
    .then(function(result) {
      res.send(result);
    })
    .catch(function(err) {
      console.log(err);
      res.sendStatus(500);
    });
});



// UPDATE route to update an existing route
router.patch('/contracts/:id', function(req, res) {
  knex('contracts')
    .update({
      targetName: req.body.targetName,
      targetLocation: req.body.targetLocation,
      budget: req.body.budget
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



// DELETE route to delete a contract
router.delete('/contracts/:id', function(req, res) {
  knex('contracts')
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






module.exports = router;
