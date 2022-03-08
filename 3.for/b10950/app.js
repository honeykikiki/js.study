const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

const testCaseArray = [];
for (let i = 1; i <= +input[0]; ++i) {
  const tempValue = input[i].split(" ").map((item) => +item);
  // console.log(tempValue);
  testCaseArray.push({ A: tempValue[0], B: tempValue[1] });
}

solution(+input[0], testCaseArray);
function solution(T, A) {
  // Write your code
  for (let i = 0; i < T; i++) {
    console.log(A[i].A + A[i].B);
  }
}
