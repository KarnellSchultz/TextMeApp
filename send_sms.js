// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC38cb6bb104fe5a79f5c2a7aafbfcf6eb';
const authToken = 'b868fc0513fa15315c13a45ae6995adb';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+14257287345',
     to:  '+460760009866'
   })
  .then(message => console.log(message.sid));
