const calUtils = require('../utils/calUtils');

module.exports = {
  /**
   * @name: extractCalData
   * @description:
   *   summary, attendees, start, end
   */
  addEvents: (req, res) => {
    const calObjs = req.body.map(((obj) => {
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
    }));
    // console.log('line 15 calCtrl', Object.entries(calObjs));
    res.send('Successfully retrieved items from /addEvents');
  },
};
