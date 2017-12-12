
let fs = require('fs');


// import assassins csv file.
let assassinsCsv = fs.readFileSync('./data/assassins.csv', 'utf8');
console.log('Original csv file: ', assassinsCsv);
// replace quotes and split file into an array of lines.
let assassinsLines = assassinsCsv.trim().replace(/"/g, '').split('\n');
console.log('Replaced quotes and split new lines: ', assassinsLines);
// split headers line by commas.
let assassinsHeaders = assassinsLines[0].split(', ');
console.log('Split header line: ', assassinsHeaders);

let assassins = [];

// iterate over each assassin (which is a new line).
for (let i = 1; i < assassinsLines.length; i++) {
  let assassinsObject = {};
  // split each new line to get the values.
  let newLine = assassinsLines[i].split(', ');
  // loop over headers line to get the keys.
  for (let j=0; j < assassinsHeaders.length; j++) {
    // loop through headers and assign headers and values to new object.
    assassinsObject[assassinsHeaders[j]] = newLine[j];
  }
  // push new objects into array.
  assassins.push(assassinsObject);
}
console.log('Assassin objects: ', assassins);





exports.seed = function(knex, Promise) {
  // Assassins table
  // Deletes ALL existing entries
  return knex('assassins').del()
    .then(function () {
      // Inserts seed entries for assassins
      return knex('assassins').insert([{
        fullName: 'Alexander Duggan',
        codeName: 'The Jackal',
        weapon: 'Sniper Rifle',
        contactInfo: 'jackal@gmail.com',
        rating: 7.5,
        kills: 28,
        price: 45,
        age: 31
      }, {
        fullName: 'Anton Chigurh',
        codeName: 'Old Man',
        weapon: 'Pneumatic bolt gun',
        contactInfo: 'pneujackcity@gmail.com',
        rating: 9,
        kills: 72,
        price: 40,
        age: 52
      }, {
        fullName: '',
        codeName: 'Ghost Dog',
        weapon: 'Pistol',
        contactInfo: 'ghostdog@gmail.com',
        rating: 6.5,
        kills: 35,
        price: 20,
        age: 28
      }, {
        fullName: 'Jason Bourne',
        codeName: '',
        weapon: 'Parkour',
        contactInfo: 'jb@gmail.com',
        rating: 7,
        kills: 48,
        price: 25,
        age: 27
      }, {
        fullName: 'John Wick',
        codeName: 'Baba Yaga',
        weapon: 'Lots of guns',
        contactInfo: 'babayaga@gmail.com',
        rating: 9.5,
        kills: 433,
        price: 50,
        age: 35
      }, {
        fullName: 'Jules Winnfield',
        codeName: '',
        weapon: 'Pistol',
        contactInfo: 'bmf@gmail.com',
        rating: 6.5,
        kills: 13,
        price: 15,
        age: 26
      }, {
        fullName: 'Leon',
        codeName: 'The Professional',
        weapon: 'Everything',
        contactInfo: 'leon@gmail.com',
        rating: 8.5,
        kills: 87,
        price: 30,
        age: 41
      }, {
        fullName: 'Nikita Mears',
        codeName: 'Nikita',
        weapon: 'Silenced pistols',
        contactInfo: 'nikita@gmail.com',
        rating: 7,
        kills: 32,
        price: 30,
        age: 28
      }, {
        fullName: 'Nikita Mears',
        codeName: 'La Femme Nikita',
        weapon: 'Silenced pistols',
        contactInfo: 'nikita@gmail.com',
        rating: 7,
        kills: 32,
        price: 30,
        age: 28
      }, {
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
