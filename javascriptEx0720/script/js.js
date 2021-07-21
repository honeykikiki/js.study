const $btnStart = document.querySelector("#btn_start");
const $start = document.querySelector("#start");
const $form = document.querySelector("form");
const $input = document.querySelector("form input");
const $result = document.querySelector("#result");
const $br = document.createElement("br");

$btnStart.addEventListener("click", () => {
  $start.style.display = "none";
  $form.style.display = "block";
});

$form.addEventListener("submit", (event) => {
  event.preventDefault();
  let input = $input.value;
  $input.value = "";

  if (input !== "") {
    $result.innerHTML = "";
  }

  let arr = [];
  for (let i = 0; i < 10; i++) {
    // arr.push(i + 1);
    $result.innerHTML += `${input} * ${i + 1} = <span>${
      input * (i + 1)
    }<span> <br>`;
  }

  // arr.forEach((el) => {
  //   ($result.innerHTML = `9 ${input * el}`), document.createElement("br");
  //   console.log(el * input);
  // });
});
