const $green = document.querySelector("#green");
const $yellow = document.querySelector("#yellow");
const $red = document.querySelector("#red");

$green.style.backgroundColor = "white";
$yellow.style.backgroundColor = "white";
$red.style.backgroundColor = "white";

setTimeout(() => {
  $red.style.backgroundColor = "white";
  $green.style.backgroundColor = "green";
}, 0);

setTimeout(() => {
  $green.style.backgroundColor = "white";
  $yellow.style.backgroundColor = "yellow";
}, 3500);

setTimeout(() => {
  $yellow.style.backgroundColor = "white";
  $red.style.backgroundColor = "red";
}, 4000);

setInterval(() => {
  setTimeout(() => {
    $red.style.backgroundColor = "white";
    $green.style.backgroundColor = "green";
  }, 0);

  setTimeout(() => {
    $green.style.backgroundColor = "white";
    $yellow.style.backgroundColor = "yellow";
  }, 3500);

  setTimeout(() => {
    $yellow.style.backgroundColor = "white";
    $red.style.backgroundColor = "red";
  }, 4000);
}, 8000);
