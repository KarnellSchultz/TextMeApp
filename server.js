

const express = require("express");
const app = express();
require('dotenv').config()
const accountSid = process.env.ACCOUNTSID;
const authToken = process.env.AUTHTOKEN;
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const client = require('twilio')(accountSid, authToken);


app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "100kb" })); //keeps ppl from blowing me up
app.use(express.static("public")); //serves the content of my public folder.
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`TextMe App running on:${port}`);
});

app.get('/', (req, res) => {res.send("Hello  its me . . . the server ")
});

app.get("/reply", (req, res) => {
  res.send(`${req}, we hear ya!`);
  console.log("new shit");
});

app.post('/webhooks/SMS' , (req, res) => {
    console.log(req.body)
  const twiml = new twilio.TwimlResponse();
  
  twiml.message('The Robots are coming! Head for the hills!');
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
})
http.createServer(app).listen(1337, function () {
    console.log("Express server listening on port 1337");
  });
// client.messages
//   .create({
//      body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
//      from: '+14257287345',
//      to:  '+460760009866'
//    })
//   .then(message => console.log(message.sid));
