let clientPhoneNumber = Number; 

const pageElement = document.getElementById("body");
const updateButton = document.getElementById("updateColor");
const upcomingcolor = document.getElementById("upcomingcolor");
const moreColors = document.getElementById("more-colors");

let color;
pageElement.style.background = color;
upcomingcolor.innerHTML = color
updateButton.addEventListener("click", updateColors);
moreColors.addEventListener("click", showColors);

async function updateColors() {
  let colorData = await fetch('/colors');
  color = await colorData.json();
  pageElement.style.background = color;
  console.log(`The color is: ${color}`)
  upcomingcolor.innerHTML = color
}

// async function showColors() {
//   let colorListData = await fetch('/colorsList');
//   colorList = await colorListData.json();
  
//   colorList.forEach(element => {
//     return moreColors.innerHTML = "<li>element</li>"
//   });
// }

// setInterval(updateColors, 10000);


