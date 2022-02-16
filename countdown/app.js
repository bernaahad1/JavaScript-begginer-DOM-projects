const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const endDate = document.querySelector(".end-date");
const deadline = document.querySelector(".countdown-container");
const items = document.querySelectorAll(".countdown-container span");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 17, 30, 0);

const weekday = weekdays[futureDate.getDay()];
const month = months[futureDate.getMonth()];
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const day = futureDate.getDate();

endDate.textContent = `${weekday}, ${day} ${month} ${year} ${hours}:${minutes}`;

if (hours >= 12) {
  endDate.textContent += "pm";
} else {
  endDate.textContent += "am";
}

const futureTime = futureDate.getTime();

function getRemainingTime() {
  const currTime = new Date().getTime();
  let remTime = futureTime - currTime;
  //1s = 1000ms
  //1m = 60s
  //1hr = 60min
  //1day = 24hr
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHr = 60 * 60 * 1000;
  const oneM = 60 * 1000;
  const oneS = 1000;

  let days = Math.floor(remTime / oneDay);
  let hr = Math.floor((remTime % oneDay) / oneHr);
  let m = Math.floor((remTime % oneHr) / oneM);
  let s = Math.floor((remTime % oneM) / oneS);

  const values = [days, hr, m, s];

  items.forEach(function (item, index) {
    if (values[index] < 10) {
      item.innerHTML = "0" + values[index];
    } else {
      item.innerHTML = values[index];
    }
  });

  if (remTime < 0) {
    clearInterval(countdown);
    deadline.innerHTML =
      '<h1 class="expired">Sorry, this giveaway has expired<h4>';
  }
}

let countdown = setInterval(getRemainingTime, 1000);
