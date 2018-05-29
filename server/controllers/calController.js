const calUtils = require('../utils/calUtils');
const db = require('../db');

module.exports = {
  /**
   * @name: addEvents
   * @description:
   *   summary, attendees, start, end
   */
  addEvents: (req, res, next) => {
    console.log('inside add events');
    const calArr = req.body.map((obj) => {
      const result = {};
      result.description = obj.description;
      const inviteeData = calUtils.getInviteeData(JSON.stringify(obj.description));
      if (inviteeData.firstName) {
        result.firstName = inviteeData.firstName;
      }
      if (inviteeData.lastName) {
        result.lastName = inviteeData.lastName;
      }
      if (inviteeData.email) {
        result.email = inviteeData.email[1];
      }
      if (obj.summary) {
        result.summary = obj.summary;
        result.type = calUtils.getEventType(obj.summary);
      }
      if (obj.attendees) {
        result.interviewer = calUtils.getInterviewer(obj.attendees);
      }
      result.start = new Date(obj.start.dateTime);
      result.end = new Date(obj.end.dateTime);
      console.log(result.start);
      return result;
    });

    db.insertMany(calArr, (err, result) => {
      if (err) {
        res.status(500).send('Failed to add calObj to db');
        throw new Error('Post Message Failed:', err);
      }
      console.log('Added calObj to database', result);
    });
    next();
  },
  getAllEvents: (req, res) => {
    db.find({}, (err) => {
      if (err) res.status(500).send('Failed to find calObj in db');
      res.send('ok');
    });
  },
  /**
   * @name: checkIn
   * @params: req.body.firstName, req.body.lastName
   */
  intCheckIn: (req, res, next) => {
    const { email } = req.body;
    if (!email) res.status(400).send('Did not have valid body');
    db.find({ email }, null, (err, appt) => {
      if (err) res.status(500).send('Failed to find calObj in db');
      console.log(appt);
      res.locals.appt = appt;
      next();
    });
  },
};
