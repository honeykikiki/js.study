// 객체의 반복문
let member = ["eging", "grapt", "leezhce"];
let i = 0;
while (i < member.length) {
  console.log(member[i]);
  i += 1;
}

member.forEach((name, i) => {
  console.log(name, i);
});

let memberObject = {
  manager: "egoing",
  developer: "grapt",
  design: "leezhce",
};

for (key in memberObject) {
  console.log(key, memberObject[key]);
}
