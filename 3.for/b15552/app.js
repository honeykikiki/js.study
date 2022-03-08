const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const testCaseArray = [];
for (let i = 1; i <= +input[0]; ++i) {
  const tempValue = input[i].split(" ").map((item) => +item);
  // console.log(tempValue);
  testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
}
// console.log(testCaseArray);
solution(+input[0], testCaseArray);
function solution(T, testCaseArray) {
  // Write your code
  for (let i = 0; i < T; i++) {
    const a = testCaseArray[i].A;
    const b = testCaseArray[i].B;
    console.log(a + b);
  }
}
