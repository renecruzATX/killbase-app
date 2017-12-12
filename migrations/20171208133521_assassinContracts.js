
exports.up = function(knex, Promise) {
  // create assassinContracts table
  return knex.schema.createTable('assassincontracts', function(table) {
    // id, assassinId, targetId, targetName, targetLocation, securityLevel, clientName
    table.increments();
    table.integer('assassinId', 40);
    table.integer('targetId', 40);
    table.string('targetName', 50);
    table.string('targetLocation', 50);
    table.string('securityLevel', 10);
    table.string('clientName', 50);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('assassincontracts');
};
