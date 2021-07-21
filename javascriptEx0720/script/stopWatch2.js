// const $timer = document.querySelector("#timer");
const $start = document.querySelector("#start");
const $stop = document.querySelector("#stop");
const $list = document.querySelector("#list");

const $min = document.querySelector("#min");
const $sec = document.querySelector("#sec");
const $milisec = document.querySelector("#milisec");
const $listResult = document.querySelector("#list-result");

let time = new Date();
let secTimer = time.getSeconds();
let millisecTimer = time.getMilliseconds();

let stTime;
let timerStart;

$start.addEventListener("click", () => {
  if (!stTime) {
    stTime = new Date().getTime();
  }

  let timers = setInterval(function () {
    let nowTime = new Date().getTime();
    let newTime = new Date(nowTime - stTime);
    // let newTime = Math.floor((nowTime - stTime) / 100);

    let min = newTime.getMinutes();
    let sec = newTime.getSeconds();
    let milisec = Math.floor(newTime.getMilliseconds() / 10);

    $min.innerHTML = `${min}`;
    $sec.innerHTML = `${sec}`;
    $milisec.innerHTML = `${milisec}`;
  }, 1);
});

$stop.addEventListener("click", () => {
  if (timers) {
    clearInterval(timers);
  }
});
