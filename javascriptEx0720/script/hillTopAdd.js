const home = document.querySelector("#home-btn");
const $form = document.querySelector("#form");
const $localInput = document.querySelector("#localInput");
const $phoneInput = document.querySelector("#phoneInput");

let arr = []; //리스트 객체러 정되는 곳

class List {
  constructor(no, area, phone, date) {
    this.no = no;
    this.area = area;
    this.phone = phone;
    this.date = date;
  }
  // number() {
  //   this.no += 1;
  // }
}
let data;
$form.addEventListener("submit", (e) => {
  e.preventDefault();

  const localInput = $localInput.value;
  const phoneInput = $phoneInput.value;
  const date = new Date();

  if (localInput == "") {
    alert("내용을 입력해주세요");
    return;
  }

  if (phoneInput == "") {
    alert("전화번호 입력해주세요");
    return;
  } else {
    let i = arr.length + 1;
    let list = new List(i, localInput, phoneInput, date);
    arr.push(list);
    localStorage.setItem(i, JSON.stringify(list));
    data = JSON.parse(localStorage.getItem(i));
  }

  $localInput.value = "";
  $phoneInput.value = "";

  // arr.push(phoneInput);
});

console.log(data);
// localStorage.removeItem(1);

document.write(arr);
console.log(arr);

// $form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const localInput = $localInput.value;
//   const phoneInput = $phoneInput.value;
//   const date = new Date();
//   let i = arr.length + 1;
//   let list = new List(i, localInput, phoneInput, date);

//   arr.push(list);
//   // arr.push(phoneInput);
// });

home.addEventListener("click", () => {
  location.href = "/javascriptEx0720/hillTOP.html";
});
