
exports.up = function(knex, Promise) {
  // create clients table
  return knex.schema.createTable('clients', function(table) {
    // id, clientName
    table.increments();
    table.string('clientName', 50);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('clients');
};
