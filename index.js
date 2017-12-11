
let config = require('./knexfile.js')['development'];
let knex = require('knex')(config);

const express = require('express');
const app = express();
const port = process.env.PORT || 8000;






knex.destroy();
