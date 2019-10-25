const pageElement = document.getElementById("body");
const updateButton = document.getElementById("updateColor");
const upcomingcolor = document.getElementById("upcomingcolor");
const moreColors = document.getElementById("more-colors");
const moreColorsButton = document.getElementById("more-colors-button");
const colorItem = document.getElementById("color-item");

let color = "LavenderBlush";
pageElement.style.background = color;
upcomingcolor.innerHTML = color;
updateButton.addEventListener("click", updateColors);

async function updateColors() {
  let colorData = await fetch("/colors");
  color = await colorData.json();
  pageElement.style.background = color;
  console.log(`The color is: ${color}`);
  upcomingcolor.innerHTML = color;
}

let listItems = document.getElementsByTagName("li");
if (listItems.length > 12) {
  moreColors.parentNode.removeChild(moreColors);
  console.log("removing elments");
}

console.log(colorItem);
function removeColors() {
  colorItem.parentNode.removeChild(colorItem);
}

// setInterval(updateColors, 10000);

let showColors = new Vue({
  el: "#vueList",
  data: {
    items: [{ message: "" }]
  }
});

moreColorsButton.addEventListener("click", vueListUpdate);

vueListUpdate();
async function vueListUpdate() {
  removeColors();
  let colorListData = await fetch("/colorsList");
  let colorList = await colorListData.json();

  colorList.forEach((element, index) => {
    showColors.items.push({ message: element });
  })
}

function removeColors() {
  showColors.items.forEach(el => {
    showColors.items.shift();
  }); //clears the array
}
