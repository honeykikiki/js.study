const superObj = {
  superVal: "super",
};
// const subObj = {
//   supersub: "sub",
// };

// subObj.__proto__ = superObj;

const subObj = Object.create(superObj);
subObj.subVal = "sub";

console.log(subObj.subVal);
console.log(subObj.superVal);
subObj.superval = "sub";
console.log(superObj.superVal);

let kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function () {
    return this.first + this.second;
  },
};

let lee = Object.create(kim);
lee.name = "kee";
lee.first = 10;
lee.second = 10;
lee.avg = function () {
  return (this.first + this.second) / 2;
};
// let lee = {
//   name: "lee",
//   first: 10,
//   second: 10,
//   avg: function () {
//     return (this.first + this.second) / 2;
//   },
// };
// lee.__proto__ = kim;

console.log(kim.sum());
console.log(lee.sum());
console.log(lee.avg());
