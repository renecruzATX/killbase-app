
exports.up = function(knex, Promise) {
  // create contracts table
  return knex.schema.createTable('contracts', function(table) {
    // id, targetName, targetLocation, budget
    table.increments();
    table.string('targetName', 50);
    table.string('targetLocation', 50);
    table.integer('budget').notNullable().defaultTo(0);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('contracts');
};
