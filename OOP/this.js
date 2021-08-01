let kim = {
  name: "kim",
  first: 10,
  second: 20,
  sum: function () {
    // console.log(this);
    return this.first + this.second;
  },
  // sum: function (f,s) {
  //   return f +s;
  // },
};

console.log(kim.sum(kim.first, kim.second));
console.log(kim.sum());
