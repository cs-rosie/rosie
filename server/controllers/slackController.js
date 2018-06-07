const { WebClient } = require('@slack/client');

// An access token (from your Slack app or custom integration - xoxp, xoxb, or xoxa)
const token = 'xoxp-365508166806-364753788149-365933617283-1d4b73ceec24308e6893fc0047da037c';
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
    const slackMsg = `${appt.firstName} ${appt.lastName} has arrived for a ${appt.type} with ${
      appt.interviewer
    }`;
    console.log(slackMsg);
    web.chat
      .postMessage({ channel, text: slackMsg })
      .then(result => {
        console.log(`Posting to channel ${channel} with id ${result.ts}`);
        res.send('ok');
      })
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
      .then(result => {
        console.log(`Posting to channel ${channel} with id ${result.ts}`);
      })
      .then(() => res.send('ok'))
      .catch(console.error);
  },
};
