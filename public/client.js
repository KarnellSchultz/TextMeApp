let clientPhoneNumber = Number; 

// document.getElementById("demo").addEventListener("click", myFunction);

const pageElement = document.getElementById("body");
const updateButton = document.getElementById("updateColor");
const upcomingcolor = document.getElementById("upcomingcolor");

let color = "DarkOrange"
pageElement.style.background = color;
upcomingcolor.innerHTML = color
updateButton.addEventListener("click", updateColors);

async function updateColors() {
  let colorData = await fetch('/colors');
  color = await colorData.json();
  pageElement.style.background = color;
  console.log(`The color is: ${color}`)
  upcomingcolor.innerHTML = color

}

// setInterval(updateColors, 10000);