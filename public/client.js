const pageElement = document.getElementById("body");
const updateButton = document.getElementById("updateColor");
const upcomingcolor = document.getElementById("upcomingcolor");
const moreColors = document.getElementById("more-colors");
const moreColorsButton = document.getElementById("more-colors-button");
const colorItem = document.getElementById("color-item");

let color = "plum";
pageElement.style.background = color;
upcomingcolor.innerHTML = color;
updateButton.addEventListener("click", updateColors);

async function updateColors() {
  let colorData = await fetch("/colors");
  color = await colorData.json();
  pageElement.style.background = color;
  console.log(`The color is: ${color}`);
  upcomingcolor.innerHTML = color;
  updateTimeStamp()
}

let listItems = document.getElementsByTagName("li");
if (listItems.length > 12) {
  moreColors.parentNode.removeChild(moreColors);
  console.log("removing elments");
}

console.log(colorItem);


let updateTimestamp;
function updateTimeStamp() {
  updateTimestamp = new Date().toLocaleDateString();
    return updateTimestamp;
}

let showColors = new Vue({
  el: "#vueList",
  data: {
    items: [{ message: "" }]
  }
});

let secret = new Vue({
  el: "#secret",
  data: {
    message: ""
  }
})


moreColorsButton.addEventListener("click", vueListUpdate);

vueListUpdate();
async function vueListUpdate() {

  let colorListData = await fetch("/colorsList");
  let colorList = await colorListData.json();
  showColors.items = [];
  colorList.forEach((element, index) => {
    showColors.items.push({ message: element });
  })
}


setInterval(updateColors, 10000);
