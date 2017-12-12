
exports.seed = function(knex, Promise) {
  // Targets table
  // Deletes ALL existing entries
  return knex('targets').del()
    .then(function () {
      // Inserts seed entries for targets
      return knex('targets').insert([{
        fullNameTarget: 'Butch Coolidge',
        location: 'Los Angeles',
        photo: 'https://goo.gl/LCquZj',
        securityLevel: 3
      }, {
        fullNameTarget: 'The Jaguar',
        location: 'Russian Embassy',
        photo: 'https://goo.gl/6JWsiv',
        securityLevel: 9
      }, {
        fullNameTarget: 'Norman Stansfield',
        location: 'Manhattan',
        photo: 'https://i.imgur.com/mdIk33E.jpg',
        securityLevel: 7
      }, {
        fullNameTarget: "Santino D'Antonio",
        location: 'Continental Hotel',
        photo: 'https://goo.gl/fUPkYy',
        securityLevel: 10
      }, {
        fullNameTarget: 'Sonny Valerio',
        location: 'Queens',
        photo: 'https://goo.gl/8DHYUS',
        securityLevel: 4
      }]);
    });

};
