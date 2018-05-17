const calUtils = require('../utils/calUtils');

module.exports = {
  /**
   * @name: extractCalData
   * @description:
   *   summary, attendees, start, end
   */
  addEvents: (req, res) => {
    const calObjs = req.body.map(((obj) => {
      let result = {};
      let invitee;
      let email;
      result.start = obj.start.dateTime;
      result.end = obj.end.dateTime;
      console.log(obj.description);
      result.description = obj.description;
      result.summary = obj.summary;
      let inviteeData = calUtils.extract(JSON.stringify(result.description));
      if (inviteeData.invitee) {
        result.invitee = inviteeData.invitee[1];
      }
      if (inviteeData.email) {
        result.email = inviteeData.email[1];
      }
      // console.log( {start, end, description, summary, invitee, email})
      return result;
    }));
    console.log('line 15 calCtrl', calObjs);
    res.send('Successfully retrieved items from /addEvents');
  },
};
