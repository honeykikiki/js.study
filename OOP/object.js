// 객체를 만드는법
let member = ["eging", "grapt", "leezhce"];
console.log(member[1]);

let memberObject = {
  manager: "egoing",
  developer: "grapt",
  design: "leezhce",
};

console.log(memberObject["developer"]);
delete memberObject.manager;
memberObject.stydy = "seongjin";
console.log(memberObject);
