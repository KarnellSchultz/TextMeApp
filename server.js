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


app.get('/', (req, res) => {res.send(`${req} :This is server info`)
});

app.get("/reply", (req, res) => {
  let data = "this is the /reply endpoint";
  res.send(data)
});

//hooks/sms is a webhook being hit by Twilio each time a message is received
app.post('/hooks/sms', async (req, res) => {
  console.log(req.body);
  let incomingTextContent = await req.body.Body;
  updateColor(incomingTextContent);
  
  const twiml = new MessagingResponse();
  twiml.message('Tyi: Always do the right thing. -Nellzus');
  // res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});



let colors = "red";
function updateColor(incomingTextContent) {
  colors = incomingTextContent;
}

app.get('/colors', async (req, res) => {
    console.log("color info is: " + colors)
  res.json(colors)
})

app.get('/hooks/sms', (req, res) => {
  let data = "Make a POST to this page cuz";
  res.send(data);
})


// app.post('/text:clientPhoneNumber', (req, res) => {
//   need validation on here too
//   let outboundPhoneNumber = req.params.clientPhoneNumber; 
//   sendText(outboundPhoneNumber)
//   res.send(`${outboundPhoneNumber}`)
//   const twiml = new MessagingResponse();
//   twiml.message(``)
//   res.writeHead(200, {'Content-Type': 'text/xml'});
//   res.end(twiml.toString());
// })



const port = process.env.PORT || 3007;
const listener = app.listen(port, () => {
  console.log(`TextMe App running on:${port}`);
});


client.messages.list({limit: 10})
               .then(messages => messages.forEach(m => 
        console.log(m.sid, m.status, m.dateSent, m.to, m.price )));