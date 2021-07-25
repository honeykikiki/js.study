const home = document.querySelector("#home-btn");
const $form = document.querySelector("#form");
const $localInput = document.querySelector("#localInput");
const $phoneInput = document.querySelector("#phoneInput");

let arr = [];

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const localInput = $localInput.value;
  const phoneInput = $phoneInput.value;
  obj.push(localInput, phoneInput, new Date());
  // arr.push(phoneInput);
});
console.log(arr);

home.addEventListener("click", () => {
  location.href = "/javascriptEx0720/hillTOP.html";
});
