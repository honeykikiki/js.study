// const $timer = document.querySelector("#timer");
const $start = document.querySelector("#start");
const $stop = document.querySelector("#stop");
const $list = document.querySelector("#list");

const $min = document.querySelector("#min");
const $sec = document.querySelector("#sec");
const $milisec = document.querySelector("#milisec");
const $listResult = document.querySelector("#list-result");

let stTime = 0;
let endTime = 0;

$start.addEventListener("click", () => {
  if (!stTime) {
    stTime = Date.now();
  } else {
    stTime += Date.now() - endTime;
  }

  timerStart = setInterval(() => {
    let nowTime = Date.now();
    let time = new Date(nowTime - stTime);

    let minTimer = time.getMinutes();
    let secTimer = time.getSeconds();
    let millisecTimer = time.getMilliseconds();

    minTimer = minTimer < 10 ? `0${minTimer}` : minTimer;
    secTimer = secTimer < 10 ? `0${secTimer}` : secTimer;
    millisecTimer = millisecTimer < 1 ? `0${millisecTimer}` : millisecTimer;

    $min.innerHTML = `${minTimer}`;
    $sec.innerHTML = `${secTimer}`;
    $milisec.innerHTML = `${Math.floor(millisecTimer / 10)}`;
  }, 1);

  $start.style.backgroundColor = "gray";
});

$stop.addEventListener("click", () => {
  clearInterval(timerStart);
  endTime = Date.now();
});

// https://im-developer.tistory.com/53 참고한 사이트
