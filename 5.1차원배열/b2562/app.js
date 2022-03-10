const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().split("\n");

let = testCaseArray = [];
// for (let i = 0; i < input.length; i++) {
// }
testCaseArray = input.map((item) => +item);
// console.log(input[0]);

solution(testCaseArray);

function solution(T) {
  // Write your code
  let max = 0;
  let maxidx = 0;
  for (let i = 0; i < T.length; i++) {
    item = T[i];
    if (max < item) {
      max = item;
      maxidx = i;
    }
  }
  console.log(max);
  console.log(maxidx + 1);
}
