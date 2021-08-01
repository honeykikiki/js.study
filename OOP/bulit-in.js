// 객체의 활용의 예
console.log(Math.PI);
console.log(Math.random());
console.log(Math.floor(2.9));
console.log(Math.ceil(2.1));
console.log(Math.round(2.5));
console.log(Math.round(2.4));
console.log(Math.max(2.4, 3));
console.log(Math.min(2.4, 3));

let MyMath = {
  PI: Math.PI,
  random: function () {
    return Math.random();
  },
  floor: (val) => Math.floor(val),
};

console.log(MyMath.floor(3.9));
