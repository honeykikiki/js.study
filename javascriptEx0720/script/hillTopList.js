let arr = [
  {
    no: "1",
    area: "대전",
    phone: "000-100-0000",
    datetime: "2021-07-24",
  },
  {
    no: "2",
    area: "인천",
    phone: "000-200-0000",
    datetime: "2021-07-24",
  },
  {
    no: "3",
    area: "서울",
    phone: "000-300-0000",
    datetime: "2021-07-24",
  },
  {
    no: "4",
    area: "대구",
    phone: "000-400-0000",
    datetime: "2021-07-24",
  },
  {
    no: "5",
    area: "대구",
    phone: "000-500-0000",
    datetime: "2021-07-24",
  },
];

const $box = document.querySelector(".box");
const rows = [];

for (let i = 0; i < arr.length; i++) {
  const div = document.createElement("div");
  const colls = [];
  for (let j = 0; j < 4; j++) {
    const divInner = document.createElement("div");
    colls.push(divInner);
    div.append(divInner);
  }
  // console.log(Boolean(divInner));
  // divInner.append(`${arr[j].no}`);
  // divInner.append(`${arr[j].area}`);
  // divInner.append(`${arr[j].phone}`);
  // divInner.append(`${arr[j].datetime}`);
  rows.push(colls);
  $box.append(div);
}
console.log(rows[0][0]);

// rows[0][0].textContent = `${arr[0].no}`;
// rows[0][1].textContent = `${arr[0].area}`;
// rows[0][2].textContent = `${arr[0].phone}`;
// rows[0][3].textContent = `${arr[0].datetime}`;

// rows[1][0].textContent = `${arr[1].no}`;
// rows[1][1].textContent = `${arr[1].area}`;
// rows[1][2].textContent = `${arr[1].phone}`;
// rows[1][3].textContent = `${arr[1].datetime}`;

// rows[2][0].textContent = `${arr[2].no}`;
// rows[2][1].textContent = `${arr[2].area}`;
// rows[2][2].textContent = `${arr[2].phone}`;
// rows[2][3].textContent = `${arr[2].datetime}`;

// rows[3][0].textContent = `${arr[3].no}`;
// rows[3][1].textContent = `${arr[3].area}`;
// rows[3][2].textContent = `${arr[3].phone}`;
// rows[3][3].textContent = `${arr[3].datetime}`;

// rows[4][0].textContent = `${arr[4].no}`;
// rows[4][1].textContent = `${arr[4].area}`;
// rows[4][2].textContent = `${arr[4].phone}`;
// rows[4][3].textContent = `${arr[4].datetime}`;

for (let i = 0; i < arr.length; i++) {
  rows[i][0].textContent = `${arr[i].no}`;
  rows[i][1].textContent = `${arr[i].area}`;
  rows[i][2].textContent = `${arr[i].phone}`;
  rows[i][3].textContent = `${arr[i].datetime}`;
}

const $button = document.querySelector("#home-btn");
$button.addEventListener("click", () => {
  location.href = "/javascriptEx0720/hillTOP.html";
});

// const $ul = document.querySelector("#main");
// const $li0 = document.querySelector("#li0");
// const $li1 = document.querySelector("#li1");
// const $li2 = document.querySelector("#li2");
// const $li3 = document.querySelector("#li3");
// // console.log($ul);
// for (let i = 0; i < arr.length; i++) {
//   const ul = document.createElement("ul");
//   for (let j = 0; j < arr.length; j++) {
//     const li = document.createElement("li");
//     ul.append(li);
//   }
//   // $li.append(ul);
// }

// $.ajax({
//   url: "http://172.20.10.3:8081/m/list.do",
//   type: "GET",
//   dataType: "jsonp", // 권한을 회피하기 위한 방법
//   crossOrigin: true,
//   success: function (data) {
//     const member = data.memberList[0];
//     let memberNo = member.mem_no;
//     $box2One.textContent = memberNo;
//   },
// });
