const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const authController = require('./controllers/authController');
const calController = require('./controllers/calController');
const slackController = require('./controllers/slackController');

const rosieURL = 'https://hooks.slack.com/services/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';

const PORT = 8080;
// const db = `postgres://icgdoqir:DS6zvF0G1MJijrBwz0y7UvGdt55t0x5x@pellefant.db.elephantsql.com:5432/icgdoqir`;
const app = express();

app.use('/', express.static(path.join(__dirname, '../client/static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('ok'));

app.post('/sendSlack', slackController.sendSlack);

app.listen(PORT, () =>
  console.log(`Listening on port ${PORT}.`)
);
