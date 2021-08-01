let kim = {
  name: "kim",
  first: 10,
  second: 20,
};

let lee = {
  name: "lee",
  first: 10,
  second: 10,
};

function sum(agu) {
  return agu + this.first + this.second;
}

console.log(sum.call(kim));
console.log(sum.call(lee));

let kimSum = sum.bind(kim, "-> ");

console.log(kimSum());
