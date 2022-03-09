const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

// let = testCaseArray = [];
// for (let i = 0; i < input.length; i++) {
//   const tempValue = input[i].split(" ").map((item) => +item);
//   testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
// }
input = +input[0];

solution(input);

function solution(N) {
  // Write your code
  let makeNum = N;
  let ans = 0;
  while (makeNum !== N || ans === 0) {
    let ten;
    let one;
    if (makeNum >= 10) {
      ten = +String(makeNum)[0];
      one = +String(makeNum)[1];
    } else {
      ten = 0;
      one = +String(makeNum)[0];
    }
    makeNum = ten + one;
    let makeNumOne;
    if (makeNum >= 10) {
      makeNumOne = +String(makeNum)[1];
    } else {
      makeNumOne = +String(makeNum)[0];
    }
    makeNum = +(String(one) + String(makeNumOne));
    ans++;
  }
  console.log(ans);
}
