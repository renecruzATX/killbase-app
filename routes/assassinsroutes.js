
const config = require('../knexfile.js')['development'];
const knex = require('knex')(config);

const express = require('express');
const router = express.Router();



// GET route to retreive all assassins
router.get('/assassins', function(req, res) {
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
router.get('/assassins/:id', function(req, res) {
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
router.post('/assassins', function(req, res) {
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
router.patch('/assassins/:id', function(req, res) {
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
router.delete('/assassins/:id', function(req, res) {
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






module.exports = router;
