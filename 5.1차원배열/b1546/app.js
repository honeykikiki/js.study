const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let = testCaseArray = [];
// for (let i = 0; i < input.length; i++) {
// }
testCaseArray = input[1].split(" ").map((item) => +item);

solution(+input[0], testCaseArray);

function solution(T, N) {
  // Write your code
  // console.log(N.reduce((prev, cur) => prev + cur));
  let num = 0;
  let max = 0;
  let arr = [];
  for (let i = 0; i < N.length; i++) {
    num += N[i];
    arr.push(N[i]);
  }

  for (let i = 0; i < N.length; i++) {
    item = N[i];
    if (max < item) {
      max = item;
    }
  }

  num = (num / (max * T)) * 100;
  console.log(num);
}
