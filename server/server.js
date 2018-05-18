const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const calController = require('./controllers/calController');
const slackController = require('./controllers/slackController');
const db = require('./db');

const PORT = 8000;
const app = express();

app.use('/', express.static(path.join(__dirname, '../client/static')));
// app.use('/', express.static(path.join(__dirname, '../dist')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('ok'));
app.post('/addEvents', calController.addEvents, calController.getAllEvents);
app.post('/sendSlack', slackController.sendGeneralSlack);
app.post('/intCheckIn', calController.intCheckIn, slackController.sendIntSlack);
// for hard parts, requires req.body.message
app.post('/pubCheckIn', slackController.sendGeneralSlack);
// for deliveries, requires req.body.message
app.post('otherCheckIn', slackController.sendGeneralSlack);

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
