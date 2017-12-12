
exports.seed = function(knex, Promise) {
  // Clients table
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries for clients
      return knex('clients').insert([{
        clientName: 'Marcellus Wallace'
      }, {
        clientName: 'Concerto'
      }, {
        clientName: 'Mathilda'
      }, {
        clientName: 'Winston'
      }, {
        clientName: 'Ray Vargo'
      }]);
    });

};
