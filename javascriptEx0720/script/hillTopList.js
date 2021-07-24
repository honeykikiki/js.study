let arr = [
  {
    no: "1",
    area: "대전",
    phone: "000-000-0000",
    datetime: "2021-07-24",
  },
  {
    no: "2",
    area: "인천",
    phone: "000-000-0000",
    datetime: "2021-07-24",
  },
  {
    no: "3",
    area: "서울",
    phone: "000-000-0000",
    datetime: "2021-07-24",
  },
  {
    no: "4",
    area: "대구",
    phone: "000-000-0000",
    datetime: "2021-07-24",
  },
  {
    no: "5",
    area: "대구",
    phone: "000-000-0000",
    datetime: "2021-07-24",
  },
];

const rows = [];

const $box = document.querySelector(".box");
for (let i = 0; i < arr.length; i++) {
  const div = document.createElement("div");

  for (let j = 0; j < 4; j++) {
    const divInner = document.createElement("div");

    div.append(divInner);

    divInner.append(`${arr[j].area}`);
    // divInner.append(`${arr[j].phone}`);
    // divInner.append(`${arr[j].datetime}`);
  }
  $box.append(div);
}

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
