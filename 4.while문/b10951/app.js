const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let = testCaseArray = [];
for (let i = 0; ; i++) {
  const tempValue = input[i].split(" ").map((item) => +item);
  testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
  if (tempValue[0] === 0 && tempValue[1] === 0) {
    break;
  }
}
solution(testCaseArray);
function solution(testCaseArray) {
  // Write your code
  let A = testCaseArray[0].A;
  let B = testCaseArray[0].B;
  let i = 0;
  while (A !== 0 || B !== 0) {
    console.log(A + B);
    A = testCaseArray[i].A;
    B = testCaseArray[i].B;
    i++;
  }
}
