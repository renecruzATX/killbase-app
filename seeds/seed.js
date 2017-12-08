
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('assassins').del()
    .then(function () {
      // Inserts seed entries for assassins
      return knex('assassins').insert([{
        id: 1,
        fullName: 'Alexander Duggan',
        codeName: 'The Jackal',
        weapon: 'Sniper Rifle',
        contactInfo: 'jackal@gmail.com',
        rating: 7.5,
        kills: 28,
        price: 45,
        age: 31
      }, {
        id: 2,
        fullName: 'Anton Chigurh',
        codeName: 'Old Man',
        weapon: 'Pneumatic bolt gun',
        contactInfo: 'pneujackcity@gmail.com',
        rating: 9,
        kills: 72,
        price: 40,
        age: 52
      }]);
    });
};
