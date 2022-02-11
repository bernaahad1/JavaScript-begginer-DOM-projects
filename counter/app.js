const increaseBtn = document.querySelector(".increase");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
let result = document.getElementById("result");

function selectColor(num) {
  if (num > 0) {
    return "#008000";
  } else if (num == 0) {
    return "#102A42";
  } else {
    return "red";
  }
}

increaseBtn.addEventListener("click", function () {
  let sum = parseInt(result.textContent);
  result.textContent = sum + 1;
  sum++;
  result.style.color = selectColor(sum);
});

decreaseBtn.addEventListener("click", function () {
  let sum = parseInt(result.textContent);
  result.textContent = sum - 1;
  sum--;
  result.style.color = selectColor(sum);
});

resetBtn.addEventListener("click", function () {
  result.textContent = "0";
  result.style.color = "#102A42";
});
