let config = require('./knexfile.js')['development'];
let knex = require('knex')(config);

// let assassinsCsv = require('./assassins.csv');
//
// console.log(assassinsCsv);


// $.ajax({
//   url: 'assassins.csv',
//   dataType: 'text'
// }).done(convertAssassinsCsv)
//
//
// function convertAssassinsCsv(data){
//
//
//   $('body').append(data)
//   // console.log(assassins);
// }








knex.destroy();
