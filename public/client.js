async function expressTest() {
    console.log('its me client')
    const response = await fetch('/reply');
    const myJson = await response.json();
    console.log(JSON.stringify(myJson));
}

expressTest();
