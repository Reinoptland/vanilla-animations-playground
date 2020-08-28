// X 1. Select an element on the webpage (span)
// X 2. Perform some kind of processing (get the time)
// X 3. Change the content of the element you selected

function main() {
  const secondsElement = document.getElementById("seconds");
  const minutesElement = document.getElementById("minutes");
  const hoursElement = document.getElementById("hours");

  // console.log("SECONDS:", secondsElement);

  const date = new Date();
  const seconds = date.getSeconds();
  const minutes = date.getMinutes();
  const hours = date.getHours();

  // console.log("current seconds", seconds);

  if (parseInt(hoursElement.innerText) !== hours) {
    hoursElement.innerText = hours;
  }

  secondsElement.innerText = seconds;
  minutesElement.innerText = minutes;
}

function addAllEventListeners() {
  const button = document.getElementById("syncTime");
  button.addEventListener("click", main);
  button.addEventListener("click", handleClick);
}

function handleClick() {
  const clock = document.getElementById("clock");
  clock.classList.add("green-clock");
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => setInterval(main, 1000));
  document.addEventListener("DOMContentLoaded", addAllEventListeners);
} else {
  main();
}
