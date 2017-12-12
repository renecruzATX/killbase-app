
exports.up = function(knex, Promise) {
  // create targets table
  return knex.schema.createTable('targets', function(table) {
    // id, fullNameTarget, location, photo, securityLevel
    table.increments();
    table.string('fullNameTarget', 50);
    table.string('location', 50);
    table.string('photo', 150);
    table.integer('securityLevel').notNullable().defaultTo(0);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('targets');
};
