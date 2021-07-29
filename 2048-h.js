const $table = document.querySelector("#table");

const CODE = {
  2: 2,
  4: 4,
  8: 8,
  16: 16,
  32: 32,
  64: 64,
  128: 128,
  256: 256,
  512: 512,
  1024: 1024,
  2048: 2048,
};

let box = [];
for (let i = 0; i < 4; i++) {
  const $tr = document.createElement("tr");
  let boxInner = [];
  for (let j = 0; j < 4; j++) {
    const $td = document.createElement("td");
    $tr.append($td);
    boxInner.push($td);
  }
  $table.append($tr);
  box.push(boxInner);
}

let arr = [0, 1, 2, 3, 0, 1, 2, 3];

function numberPush() {
  let a = arr.splice(Math.floor(Math.random() * arr.length), 1);
  return a;
}
function startPush() {
  box[numberPush()][numberPush()].textContent = "2";
  box[numberPush()][numberPush()].textContent = "2";
}
startPush();

// $table.addEventListener("mouseevent");
// $table.addEventListener("keyboardevent");
