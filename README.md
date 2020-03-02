# [Text Me App](https://glitch.com/edit/#!/smscolors)

## Tech

- Vanilla JS 🍦
- Twillio API
- Express / Node
- *A little Vue too*

## Gif of the app in action

![text me app in action](https://media.giphy.com/media/WRirUUBDig7WXl4keP/giphy.gif)

### How it works

- Text a color to this phone number: `+14257287345`
- You should receive a confirmation text
- Wait a moment for the page to update with that color
- 💥 Boom! The page changes to the color you texted

The app also uses Vue.js to display possible Css colors that users can use to update the page. 


On the front-end:
`public/`
  `Index.html` is the main html file
  `client.js` is the client side JavaScript file
  
`Server.js` is the serverside node express Javascript code 

using Twilio to send and receive SMS > also adding the content of the SMS to the html

The app is at a **solid 1.0** level right now.


#### Check out my project live on Glitch: https://smscolors.glitch.me/
