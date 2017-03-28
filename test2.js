const settings = require("./settings"); // settings.json
var inputName = process.argv[2];

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


knex.select('*').from('famous_people')
.where('last_name', '=', inputName)
.limit(10)
.asCallback(function(err, rows) {
      if (err) return console.error(err);
      console.log(rows);
    });



