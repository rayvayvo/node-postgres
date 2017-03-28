const settings = require("./settings"); // settings.json
var inputFirst = process.argv[2];
var inputLast = process.argv[3];
var date = process.argv[4];

var knex = require('knex')({
  client: 'pg',
  connection: {
    user : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});
console.log("inserting: ", inputFirst + " " + inputLast + " " + date);
knex('famous_people').insert({first_name: inputFirst, last_name: inputLast, birthdate: date}).finally(() => {knex.destroy(); });

