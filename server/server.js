const express = require('express');
const bodyParser = require('body-parser');
const authController = require('./controllers/authController');
const calController = require('./controllers/calController');
const slackController = require('./controllers/slackController');
const PORT = 8080;

// const db = `postgres://icgdoqir:DS6zvF0G1MJijrBwz0y7UvGdt55t0x5x@pellefant.db.elephantsql.com:5432/icgdoqir`;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Home page ok');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}. Go to /login to initiate spotify oAuth`));
