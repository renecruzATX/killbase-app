
exports.seed = function(knex, Promise) {
  // Contracts table
  // Deletes ALL existing entries
  return knex('contracts').del()
    .then(function () {
      // Inserts seed entries for contracts
      return knex('contracts').insert([{
        targetName: 'Butch Coolidge',
        targetLocation: 'Los Angeles',
        budget: 40
      }, {
        targetName: 'The Jaguar',
        targetLocation: 'Russian Embassy',
        budget: 70
      }, {
        targetName: 'Norman Stansfield',
        targetLocation: 'Manhattan',
        budget: 35
      }, {
        targetName: "Santino D'Antonio",
        targetLocation: 'Continental Hotel',
        budget: 25
      }, {
        targetName: 'Sonny Valerio',
        targetLocation: 'Queens',
        budget: 10
      }]);
    });

};
