const { WebClient } = require('@slack/client');
const bodyParser = require('body-parser');

// An access token (from your Slack app or custom integration - xoxp, xoxb, or xoxa)
const token = 'xoxp-365508166806-364753788149-365238338544-308dd7ac449e75ba76063d3cadd19656';
const web = new WebClient(token);

const channel = 'CAQFDSJBV';

// See: https://api.slack.com/methods/chat.postMessage

module.exports = {
    /**
   * @name: sendIntSlack
   */
  sendIntSlack: (req, res) => {
    console.log(res.locals.appt[0], 'this is the appointment in slack!!');
    const appt = res.locals.appt[0];
    const slackMsg = `${appt.firstName} ${appt.lastName} has arrived for a ${appt.type} with ${appt.interviewer}`;
    console.log(slackMsg);
    web.chat
      .postMessage({ channel, text: slackMsg })
      .then((result) => {
        console.log(`Posting to channel ${channel} with id ${result.ts}`);
      })
      .then(() => res.send('ok'))
      .catch(console.error);
  },
  /**
   * @name: sendGeneralSlack
   * @params: req.body.message
   */
  sendGeneralSlack: (req, res) => {
    let slackMsg = '';
    if (req.body.message) {
      slackMsg = req.body.message;
    }
    web.chat
    .postMessage({ channel, text: slackMsg })
    .then((result) => {
      console.log(`Posting to channel ${channel} with id ${result.ts}`);
    })
    .then(() => res.send('ok'))
    .catch(console.error);
  }
};
