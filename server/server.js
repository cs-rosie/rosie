const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const calController = require('./controllers/calController');
const slackController = require('./controllers/slackController');

const PORT = 8080;
const app = express();

app.use('/', express.static(path.join(__dirname, '../client/static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('ok'));
app.post('/addEvents', calController.addEvents);
app.post('/sendSlack', slackController.sendSlack);

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
