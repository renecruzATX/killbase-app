
exports.seed = function(knex, Promise) {
  // Assassins table
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
      }, {
        id: 3,
        fullName: '',
        codeName: 'Ghost Dog',
        weapon: 'Pistol',
        contactInfo: 'ghostdog@gmail.com',
        rating: 6.5,
        kills: 35,
        price: 20,
        age: 28
      }, {
        id: 4,
        fullName: 'Jason Bourne',
        codeName: '',
        weapon: 'Parkour',
        contactInfo: 'jb@gmail.com',
        rating: 7,
        kills: 48,
        price: 25,
        age: 27
      }, {
        id: 5,
        fullName: 'John Wick',
        codeName: 'Baba Yaga',
        weapon: 'Lots of guns',
        contactInfo: 'babayaga@gmail.com',
        rating: 9.5,
        kills: 433,
        price: 50,
        age: 35
      }, {
        id: 6,
        fullName: 'Jules Winnfield',
        codeName: '',
        weapon: 'Pistol',
        contactInfo: 'bmf@gmail.com',
        rating: 6.5,
        kills: 13,
        price: 15,
        age: 26
      }, {
        id: 7,
        fullName: 'Leon',
        codeName: 'The Professional',
        weapon: 'Everything',
        contactInfo: 'leon@gmail.com',
        rating: 8.5,
        kills: 87,
        price: 30,
        age: 41
      }, {
        id: 8,
        fullName: 'Nikita Mears',
        codeName: 'Nikita',
        weapon: 'Silenced pistols',
        contactInfo: 'nikita@gmail.com',
        rating: 7,
        kills: 32,
        price: 30,
        age: 28
      }, {
        id: 9,
        fullName: 'Nikita Mears',
        codeName: 'La Femme Nikita',
        weapon: 'Silenced pistols',
        contactInfo: 'nikita@gmail.com',
        rating: 7,
        kills: 32,
        price: 30,
        age: 28
      }, {
        id: 10,
        fullName: 'Pickle Rick',
        codeName: 'Solenya',
        weapon: 'Lasers and office supplies',
        contactInfo: 'rsanchez@gmail.com',
        rating: 8,
        kills: 24,
        price: 0,
        age: 60
      }]);
    });


  // Contracts table
  // Deletes ALL existing entries
  return knex('contracts').del()
    .then(function () {
      // Inserts seed entries for contracts
      return knex('contracts').insert([{
        id: 1,
        targetName: 'Butch Coolidge',
        targetLocation: 'Los Angeles',
        budget: 40
      }, {
        id: 2,
        targetName: 'The Jaguar',
        targetLocation: 'Russian Embassy',
        budget: 70
      }, {
        id: 3,
        targetName: 'Norman Stansfield',
        targetLocation: 'Manhattan',
        budget: 35
      }, {
        id: 4,
        targetName: "Santino D'Antonio",
        targetLocation: 'Continental Hotel',
        budget: 25
      }, {
        id: 5,
        targetName: 'Sonny Valerio',
        targetLocation: 'Queens',
        budget: 10
      }]);
    });


  // Targets table
  // Deletes ALL existing entries
  return knex('targets').del()
    .then(function () {
      // Inserts seed entries for targets
      return knex('targets').insert([{
        id: 1,
        fullNameTarget: 'Butch Coolidge',
        location: 'Los Angeles',
        photo: 'https://goo.gl/LCquZj',
        securityLevel: 3
      }, {
        id: 2,
        fullNameTarget: 'The Jaguar',
        location: 'Russian Embassy',
        photo: 'https://goo.gl/6JWsiv',
        securityLevel: 9
      }, {
        id: 3,
        fullNameTarget: 'Norman Stansfield',
        location: 'Manhattan',
        photo: 'https://i.imgur.com/mdIk33E.jpg',
        securityLevel: 7
      }, {
        id: 4,
        fullNameTarget: "Santino D'Antonio",
        location: 'Continental Hotel',
        photo: 'https://goo.gl/fUPkYy',
        securityLevel: 10
      }, {
        id: 5,
        fullNameTarget: 'Sonny Valerio',
        location: 'Queens',
        photo: 'https://goo.gl/8DHYUS',
        securityLevel: 4
      }]);
    });


  // Clients table
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries for clients
      return knex('clients').insert([{
        id: 1,
        clientName: 'Marcellus Wallace'
      }, {
        id: 2,
        clientName: 'Concerto'
      }, {
        id: 3,
        clientName: 'Mathilda'
      }, {
        id: 4,
        clientName: 'Winston'
      }, {
        id: 5,
        clientName: 'Ray Vargo'
      }]);
    });

};
