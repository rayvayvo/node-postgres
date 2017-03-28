const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});


  client.connect((err, callback) => {

var inputName = process.argv[2];

    if (err) {
      return console.error("Connection Error", err);
    }
    client.query(`SELECT * FROM famous_people WHERE last_name = '${inputName}'`, (err, result) => {
      if (err) {
        return console.error("error running query", err);
      }

      console.log(result.rows[0]); //output: 1

    });
  });


