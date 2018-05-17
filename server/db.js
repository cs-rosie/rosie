const { Client } = require('pg');

const connectionString =
  'postgres://mryjfuno:IIb3EEIixXF-WlCxHvCV2lFsj-we4vOU@baasu.db.elephantsql.com:5432/mryjfuno';

const db = new Client({
  connectionString,
});

db.connect();

db.query('SELECT NOW()', (err, res) => {
  if (err) console.log(err);
  else console.log(res);
});


module.exports = db;
