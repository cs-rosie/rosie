const { WebClient } = require('@slack/client');

// An access token (from your Slack app or custom integration - xoxp, xoxb, or xoxa)
const token = 'xoxp-365508166806-364753788149-364079528561-ae25952ee0dcbf0b49eb4801a9889752';

const web = new WebClient(token);

const channel = 'CAQFDSJBV';

// See: https://api.slack.com/methods/chat.postMessage

module.exports = {
  sendSlack: (req, res) => {
    web.chat
      .postMessage({ channel, text: `Posting to channel ${channel}` })
      .then(res =>
        // `res` contains information about the posted message
        console.log(`Posting to channel ${channel} with id ${res.ts}`)
      )
      .then(() => res.send('ok'))
      .catch(console.error);
  },
};
