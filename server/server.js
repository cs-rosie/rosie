const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const calController = require('./controllers/calController');
const slackController = require('./controllers/slackController');
const db = require('./db');

const PORT = 8080;
const app = express();

app.use('/', express.static(path.join(__dirname, '../client/static')));
// app.use('/', express.static(path.join(__dirname, '../dist')))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('ok'));
// route to /addEvents after authorizing
// returns in response ==> 
// { _id: 5afe03e7e3b9cd76fa683428,
//   description: 'Event Details:\nInvitee: Benjamin Gummelt\nInvitee Email: ben@codesmith.io\n\nAdditional details:\nPhone Number:: 8181234567\n\nEvent Type Description:\nSome description\nNote: Should you need to cancel or reschedule the event, we recommend you use the cancel and reschedule features from your Calendly Dashboard.',
//   firstName: 'Benjamin',
//   lastName: 'Gummelt',
//   email: 'ben@codesmith.io',
//   summary: 'Benjamin Gummelt: Codesmith Initial Chat: On-site',
//   type: 'cultural',
//   interviewer: 'fakeshanda@codesmith.io',
//   start: 2018-05-17T23:00:00.000Z,
//   end: 2018-05-18T00:00:00.000Z,
//   __v: 0 }
app.post('/addEvents', calController.addEvents, calController.getAllEvents);
app.get('/getAllEvents', calController.getAllEvents);
app.post('/sendSlack', slackController.sendGeneralSlack);
// example req.body: { "firstName":"Benjamin", "lastName", "Gummelt"}
app.post('/intCheckIn', calController.intCheckIn, slackController.sendIntSlack);
// for hard parts, requires req.body.message
// example req.body: { "message": "here is my cool message"}
app.post('/pubCheckIn', slackController.sendGeneralSlack);
// for deliveries, requires req.body.message
// example req.body: { "message": "here is my cool message"}
app.post('otherCheckIn', slackController.sendGeneralSlack);

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`));
