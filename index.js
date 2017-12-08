let config = require('./knexfile.js')['development'];
let knex = require('knex')(config);





knex.destroy();
