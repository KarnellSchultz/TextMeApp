

const express = require("express");
const app = express();
require('dotenv').config()
const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;


const MessagingResponse = require('twilio').twiml.MessagingResponse;
const client = require('twilio')(accountSid, authToken);
var http = require('http');
var twilio = require('twilio');


app.use(express.urlencoded({ extended: false }));
// app.use(express.json({ limit: "100kb" })); //keeps ppl from blowing me up
app.use(express.static("public")); //serves the content of my public folder.


app.get('/', (req, res) => {res.send("Hello its me . . . the server ")
});

app.get("/reply", (req, res) => {
  let data = "this is server data, cuz";
  res.send(data)
  console.log("new shit");
});

// app.post('/webhooks/sms' , (req, res) => {
  
//   console.log(req.body);
  
//  const twiml = new MessagingResponse();

//   twiml.message('The Robots are coming! Head for the hills!');

//   res.writeHead(200, {'Content-Type': 'text/xml'});
//   res.end(twiml.toString());
// });

app.post('/hooks/sms', (req, res) => {
  console.log(req.body);
  
  const twiml = new MessagingResponse();

  twiml.message('Tyi: Always do the right thing. -Nellzus');

  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

app.get('/hooks/sms', (req, res) => {
    let data = "Make a POST to this page cuz";

  res.send(data);
})

app.post('/text:clientPhoneNumber', (req, res) => {
  //need validation on here too
  let outboundPhoneNumber = req.params.clientPhoneNumber; 
  sendText(outboundPhoneNumber)
  
})



function sending() {
  client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+14257287345',
     to:  '+460760009866'
   })
  .then(message => console.log(message.sid));
}


const port = process.env.PORT || 3007;
const listener = app.listen(port, () => {
  console.log(`TextMe App running on:${port}`);
});

// app.post('webhooks/sms', function(req, res) {
//   // var twilio = require('twilio');
//   const twiml = new twilio.TwimlResponse();
//   twiml.message('The Robots are coming! Head for the hills!');
//   res.writeHead(200, {'Content-Type': 'text/xml'});
//   res.end(twiml.toString());
// });





function sendText(phoneNumber) {
  let message = 'To act without hesitation, to do what is right';
client.messages
  .create({
     body: `${message}`,
     from: '+14257287345',
     to:  `+${phoneNumber}`
   })
  .then(message => console.log(message.sid));
}


client.messages.list({limit: 20})
               .then(messages => messages.forEach(m => console.log(m.sid)));