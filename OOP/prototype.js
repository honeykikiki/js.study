let kim = {
  name: "kim",
  first: 10,
  second: 20,
  third: 30,
  sum: function () {
    // console.log(this);
    return this.first + this.second + this.third;
  },
};

let lee = {
  name: "lee",
  first: 10,
  second: 10,
  third: 10,
  sum: function () {
    // console.log(this);
    return this.first + this.second + this.third;
  },
};

// function factory(name, first, second) {
//   this.name = name;
//   this.first = name;
//   this.second = name;
//   sum = function () {
//     return first + second;
//   };
// }

// let heo = new factory("heo", 20, 20);

console.log(kim.sum());
console.log(lee.sum());

let d1 = new Date("2022-03-02");
console.log(d1.getFullYear());
console.log(d1.getMonth());

console.log(Date);

function Person(name, first, second, third) {
  this.name = name;
  this.first = first;
  this.second = second;
  this.third = third;
}

Person.prototype.sum = function () {
  return this.first + this.second + this.third;
};

let kim2 = new Person("kim", 10, 20, 30);
kim2.sum = function () {
  return this.first - this.second;
};
let lee2 = new Person("lee", 10, 10, 10);

console.log(kim2);
console.log(kim2.sum());
console.log(lee2);
console.log(lee2.sum());
