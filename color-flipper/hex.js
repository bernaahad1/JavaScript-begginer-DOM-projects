const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const color = document.querySelector(".color");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    const randomNum = Math.floor(Math.random() * hex.length);
    hexColor += hex[randomNum] + "";
    console.log(hexColor);
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
