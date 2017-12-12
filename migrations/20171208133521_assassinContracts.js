
exports.up = function(knex, Promise) {
  // create assassinContracts table
  return knex.schema.createTable('assassincontracts', function(table) {
    // id, assassinId, assassinName, targetId, targetName
    table.integer('assassinId', 40);
    table.string('assassinName', 50);
    table.integer('targetId', 40);
    table.string('targetName');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('assassincontracts');
};
