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
  let min = 1000001;
  let max = -1000001;
  for (let i = 0; i < T; i++) {
    item = N[i];
    if (min > item) {
      min = item;
    }
    if (max < item) {
      max = item;
    }
  }

  console.log(`${min} ${max}`);
}
