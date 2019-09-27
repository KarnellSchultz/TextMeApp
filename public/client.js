async function expressTest() {
    console.log('its me client')
    const response = await fetch('/reply');
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));
}

async function webhook() {
 const response = await fetch('/webhooks/sms')
}

let clientPhoneNumber = Number; 


document.getElementById("demo").addEventListener("click", myFunction);

function submitNumber() {
  console.log('YOOO!')
}