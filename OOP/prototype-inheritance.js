const superObj = {
  superVal: "super",
};
const subObj = {
  supersub: "sub",
};

subObj.__proto__ = superObj;
console.log(subObj.subVal);
console.log(subObj.superVal);
subObj.superval = "sub";
console.log(superObj.superVal);
