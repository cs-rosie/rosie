const { WebClient } = require('@slack/client');
const bodyParser = require('body-parser');


// An access token (from your Slack app or custom integration - xoxp, xoxb, or xoxa)
const token = 'xoxp-365508166806-364753788149-365142537154-3abb05b8d301a4dae6d65fab0bcfeac3';
const web = new WebClient(token);

const channel = 'CAQFDSJBV';

// See: https://api.slack.com/methods/chat.postMessage

module.exports = {
  sendSlack: (req, res) => {
    console.log(req.body, 'this is the request in slack!!')
    web.chat
      .postMessage({ channel, text: req.body.test })
      .then(res =>
        // `res` contains information about the posted message
        console.log(`Posting to channel ${channel} with id ${res.ts}`)
      )
      .then(() => res.send('ok'))
      .catch(console.error);
  },
};
